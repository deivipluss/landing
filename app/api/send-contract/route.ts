import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, date, contractHTML } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email y nombre son requeridos' },
        { status: 400 }
      );
    }

    // Configura el transportador
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Boolean(process.env.EMAIL_SECURE) || false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Contenido HTML del correo
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9fafb; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280; }
          .btn { display: inline-block; background-color: #1e40af; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Tu Contrato de Servicios de Consultoría Digital</h1>
          </div>
          <div class="content">
            <p>Hola ${name},</p>
            <p>Gracias por aceptar los términos y condiciones del contrato de servicios de consultoría digital con Deivis Contreras Cárdenas.</p>
            <p>Has aceptado este contrato el día ${date}. El contrato se adjunta a este correo electrónico para tus registros.</p>
            <p>Nos pondremos en contacto contigo a la brevedad para comenzar tu proceso de transformación digital.</p>
            <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos.</p>
            <p>Saludos cordiales,</p>
            <p><b>Deivis Contreras Cárdenas</b><br>Consultor en Transformación Digital<br>info@deiviscontreras.com</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Deivis Contreras Cárdenas. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Crear un HTML para el contrato (para enviar como archivo adjunto)
    const contractFullHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Contrato de Servicios de Consultoría Digital - Deivis Contreras</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { text-align: center; color: #1e40af; }
        h2 { color: #1e40af; margin-top: 20px; }
        h3 { color: #3b82f6; margin-top: 15px; }
        .header { text-align: center; margin-bottom: 30px; }
        .footer { margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px; }
        .signature-area { margin-top: 40px; padding: 20px; border-top: 1px dashed #ccc; }
        .signature-line { display: block; margin-top: 40px; border-top: 1px solid #000; width: 220px; }
        .date { margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Contrato de Servicios de Consultoría Digital</h1>
        <p><strong>Fecha:</strong> ${date}</p>
      </div>
      
      <div class="content">
        ${contractHTML || `
          <h2>Términos y Condiciones de Servicios de Consultoría Digital</h2>
          <p>El presente documento constituye un acuerdo vinculante entre Deivis Contreras Cárdenas, especialista en transformación digital, y ${name}.</p>
          <!-- Aquí iría el contenido completo del contrato -->
        `}
      </div>
      
      <div class="signature-area">
        <h3>Datos del Cliente:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        
        <div class="signatures">
          <div style="display: flex; justify-content: space-between; margin-top: 40px;">
            <div>
              <span class="signature-line"></span>
              <p>Firma del Consultor<br>Deivis Contreras Cárdenas</p>
            </div>
            <div>
              <span class="signature-line"></span>
              <p>Firma del Cliente<br>${name}</p>
            </div>
          </div>
        </div>
        
        <p class="date">Fecha de aceptación: ${date}</p>
      </div>
    </body>
    </html>
    `;

    // Configuración del email
    const mailOptions = {
      from: `"Deivis Contreras" <deivipluss@gmail.com>`,
      to: email,
      subject: 'Tu Contrato de Consultoría Digital - Deivis Contreras',
      html: htmlContent,
      attachments: [
        {
          filename: 'contrato-consultoria-digital.html',
          content: contractFullHTML,
          contentType: 'text/html'
        }
      ]
    };

    try {
      // Enviar email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true });
    } catch (emailError) {
      console.error('Error al enviar el correo:', emailError);
      return NextResponse.json(
        { error: 'Error al enviar el correo. Verifica tu configuración de correo.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error en el procesamiento:', error);
    return NextResponse.json(
      { error: 'Error al enviar el correo' },
      { status: 500 }
    );
  }
}
