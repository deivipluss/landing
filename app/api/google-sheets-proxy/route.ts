import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Convertir el cuerpo de la solicitud en un objeto JSON
    
    // Desestructurar las propiedades del cuerpo
    const { name, email, company, phone, dniOrRuc, accepted } = body;

    // Intentar todas las posibles variables de entorno
    const scriptURL = process.env.GOOGLE_SCRIPT_URL || 
                      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 
                      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
    
    // Log para depuración
    console.log('Variables de entorno disponibles:', {
      GOOGLE_SCRIPT_URL: process.env.GOOGLE_SCRIPT_URL,
      NEXT_PUBLIC_GOOGLE_SCRIPT_URL: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL,
      NEXT_PUBLIC_GOOGLE_SHEETS_URL: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL
    });
    
    // Verificar que tenemos la URL del script
    if (!scriptURL) {
      console.error('Falta la URL del script de Google en las variables de entorno');
      return NextResponse.json(
        { error: 'Falta configuración de URL del script de Google' },
        { status: 500 }
      );
    }

    console.log('Usando URL del script:', scriptURL);

    // Construir los datos para enviar a Google
    const formData = new URLSearchParams();
    Object.keys(body).forEach(key => {
      formData.append(key, body[key] || '');
    });
    
    // Asegurar que tenemos un timestamp
    if (!formData.has('timestamp')) {
      formData.append('timestamp', new Date().toLocaleString('es-ES'));
    }

    console.log('Enviando datos a Google Sheets:', Object.fromEntries(formData.entries()));
    
    // Hacer la solicitud POST al script de Google
    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ name, email, company, phone, dniOrRuc, accepted }).toString()
    });

    // Intentar obtener la respuesta como texto primero
    const responseText = await response.text();
    console.log('Respuesta cruda de Google Sheets:', responseText);
    
    // Intentar parsear la respuesta como JSON
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (error) {
      // Cambiamos de 'e' a 'error' para evitar el error de ESLint
      result = { rawResponse: responseText };
    }
    
    if (!response.ok) {
      console.error('Error en la respuesta del script:', result);
      return NextResponse.json({ 
        error: `Error en la respuesta: ${response.status}`,
        details: result
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Datos enviados correctamente a Google Sheets',
      response: result
    });
    
  } catch (error) {
    console.error('Error al enviar datos a Google Sheets:', error);
    return NextResponse.json(
      { 
        error: 'Error al enviar datos a Google Sheets', 
        details: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    );
  }
}

// Ruta GET para probar la conexión
export async function GET() {
  try {
    const scriptURL = process.env.GOOGLE_SCRIPT_URL || 
                      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 
                      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
    
    if (!scriptURL) {
      console.error('Variables de entorno disponibles:', {
        GOOGLE_SCRIPT_URL: process.env.GOOGLE_SCRIPT_URL,
        NEXT_PUBLIC_GOOGLE_SCRIPT_URL: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL,
        NEXT_PUBLIC_GOOGLE_SHEETS_URL: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL
      });
      
      return NextResponse.json({ error: 'Falta configuración de URL del script de Google' }, { status: 500 });
    }

    // Intentar hacer una solicitud GET al script
    const response = await fetch(scriptURL, { method: 'GET' });
    const responseText = await response.text();
    
    return NextResponse.json({ 
      status: 'ok',
      scriptURL: scriptURL,
      message: 'Proxy para Google Sheets funcionando correctamente',
      googleResponse: responseText
    });
  } catch (error) {
    return NextResponse.json({ 
      error: 'Error al conectar con Google Sheets', 
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
