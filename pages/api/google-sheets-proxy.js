export default async function handler(req, res) {
  try {
    // Verificar método
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método no permitido' });
    }
    
    // Obtener URL del script de Google
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL || 
                            process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 
                            process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
    
    if (!googleScriptUrl) {
      console.error('Error: URL del script de Google no configurada');
      return res.status(500).json({ 
        error: "Falta configuración de URL del script de Google" 
      });
    }
    
    // Obtener datos del cuerpo de la solicitud
    const data = req.body;
    
    // Convertir datos a formato form-urlencoded
    const formData = new URLSearchParams();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    
    // Enviar datos al script de Google
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData.toString()
    });
    
    // Verificar respuesta
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error en respuesta del script:', errorText);
      return res.status(response.status).json({ 
        error: `Error en la respuesta: ${response.statusText}`,
        details: errorText
      });
    }
    
    // Devolver resultado
    const result = await response.json();
    return res.status(200).json(result);
    
  } catch (error) {
    console.error('Error en el proxy:', error);
    return res.status(500).json({ error: error.message });
  }
}
