import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
    
    // Verificar que tenemos la URL del script
    if (!scriptURL) {
      console.error('Falta la URL del script de Google en las variables de entorno');
      return NextResponse.json(
        { error: 'Falta configuración de URL del script de Google' },
        { status: 500 }
      );
    }

    // Construir los datos para enviar a Google
    const params = new URLSearchParams();
    params.append('timestamp', new Date().toLocaleString('es-ES'));
    params.append('name', body.name || '');
    params.append('email', body.email || '');
    params.append('company', body.company || 'No especificado');
    params.append('phone', body.phone || 'No especificado');
    params.append('accepted', 'true');

    console.log('Enviando datos a Google Sheets:', Object.fromEntries(params.entries()));
    
    // Hacer la solicitud desde el servidor (evita CORS)
    const response = await fetch(`${scriptURL}?${params.toString()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const responseText = await response.text();
    console.log('Respuesta de Google Sheets:', responseText);

    if (!response.ok) {
      throw new Error(`Error en la respuesta: ${response.status} - ${responseText}`);
    }

    return NextResponse.json({ success: true, message: 'Datos enviados correctamente a Google Sheets' });
  } catch (error) {
    console.error('Error al enviar datos a Google Sheets:', error);
    return NextResponse.json(
      { error: 'Error al enviar datos a Google Sheets', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// Agregar una ruta GET para probar la conexión
export async function GET() {
  try {
    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
    
    if (!scriptURL) {
      return NextResponse.json({ error: 'Falta configuración de URL del script de Google' }, { status: 500 });
    }

    // Intentar hacer una solicitud GET al script para verificar que está funcionando
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
