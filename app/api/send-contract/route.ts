import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PDFDocument, rgb } from 'pdf-lib'; // Importar pdf-lib para generar PDFs

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
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verificar conexión con el transportador
    try {
      await transporter.verify();
      console.log('Transportador configurado correctamente.');
    } catch (verifyError) {
      console.error('Error al verificar el transportador:', verifyError);
      const errorMessage =
        verifyError instanceof Error
          ? verifyError.message
          : 'Error desconocido al verificar el transportador';

      return NextResponse.json(
        { error: `Error al configurar el transportador de correo: ${errorMessage}` },
        { status: 500 }
      );
    }

    // Generar el archivo PDF
    const pdfDoc = await PDFDocument.create();
    let page = pdfDoc.addPage([600, 800]); // Tamaño de página A4
    const { width, height } = page.getSize();

    // Agregar contenido al PDF
    page.drawText('Contrato de Servicios de Consultoría Digital', {
      x: 50,
      y: height - 50,
      size: 18,
      color: rgb(0, 0.53, 0.71), // Azul
    });

    page.drawText(`Nombre: ${name}`, { x: 50, y: height - 100, size: 12 });
    page.drawText(`Fecha: ${date}`, { x: 50, y: height - 120, size: 12 });
    page.drawText('Contenido del contrato:', { x: 50, y: height - 160, size: 12 });

    const lines = (typeof contractHTML === 'string' ? contractHTML : '').split('\n'); // Asegurarse de que contractHTML sea una cadena
    let yPosition = height - 180;

    for (const line of lines) {
      if (yPosition < 50) {
        // Agregar una nueva página si el contenido excede el espacio
        page = pdfDoc.addPage([600, 800]); // Crear una nueva página
        yPosition = height - 50; // Reiniciar la posición Y en la nueva página
      }
      page.drawText(line, { x: 50, y: yPosition, size: 10 });
      yPosition -= 15;
    }

    // Serializar el PDF a un archivo
    const pdfBytes = Buffer.from(await pdfDoc.save()); // Convertir a Buffer para asegurarse de que sea compatible

    // Configuración del email
    const mailOptions = {
      from: `"Deivis Contreras" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Tu Contrato de Consultoría Digital - Deivis Contreras',
      html: `
        <p>Hola ${name},</p>
        <p>Gracias por aceptar los términos y condiciones del contrato de servicios de consultoría digital con Deivis Contreras Cárdenas.</p>
        <p>Has aceptado este contrato el día ${date}. El contrato se adjunta a este correo electrónico para tus registros.</p>
        <p>Saludos cordiales,</p>
        <p><b>Deivis Contreras Cárdenas</b><br>Consultor en Transformación Digital<br>info@deiviscontreras.com</p>
      `,
      attachments: [
        {
          filename: 'contrato-consultoria-digital.pdf',
          content: pdfBytes, // Adjuntar el PDF generado
          contentType: 'application/pdf',
        },
      ],
    };

    try {
      // Enviar email
      await transporter.sendMail(mailOptions);
      console.log('Correo enviado correctamente a:', email);
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
      { error: 'Error al procesar la solicitud.' },
      { status: 500 }
    );
  }
}
