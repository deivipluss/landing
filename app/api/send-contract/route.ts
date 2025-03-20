import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'; // Importar StandardFonts para usar fuentes estándar
const { htmlToText } = require('html-to-text'); // Usar require para versiones antiguas

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

    // Convertir el contenido HTML a texto plano
    let contractText = '';
    if (typeof contractHTML === 'string' && contractHTML.trim() !== '') {
      try {
        contractText = htmlToText(contractHTML, { wordwrap: 130 }); // Ajustar el texto a un ancho razonable
      } catch (error) {
        console.error('Error al convertir contractHTML a texto plano:', error);
        contractText = ''; // Asignar un valor predeterminado en caso de error
      }
    } else {
      console.warn('El contenido de contractHTML no es válido o está vacío.');
    }

    // Dividir el texto en párrafos utilizando los saltos de línea
    const paragraphs = contractText
      ? contractText.split('\n').filter((p) => typeof p === 'string' && p.trim() !== '')
      : []; // Si contractText está vacío, asignar un arreglo vacío

    // Generar el archivo PDF
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica); // Registrar la fuente estándar Helvetica
    let page = pdfDoc.addPage([600, 800]); // Tamaño de página A4
    const { width, height } = page.getSize();

    // Configuración de márgenes
    const marginLeft = 50;
    const marginRight = 50;
    const maxWidth = width - marginLeft - marginRight;

    // Agregar contenido al PDF
    page.drawText('Contrato de Servicios de Consultoría Digital', {
      x: marginLeft,
      y: height - 50,
      size: 18,
      font: font,
      color: rgb(0, 0.53, 0.71), // Azul
    });

    page.drawText(`Nombre: ${name}`, { x: marginLeft, y: height - 100, size: 12, font: font });
    page.drawText(`Fecha: ${date}`, { x: marginLeft, y: height - 120, size: 12, font: font });
    page.drawText('Contenido del contrato:', { x: marginLeft, y: height - 160, size: 12, font: font });

    // Dibujar los párrafos en el PDF
    const fontSize = 10;
    let yPosition = height - 180;

    for (const paragraph of paragraphs) {
      const words = paragraph.split(' ');
      let currentLine = '';

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const textWidth = font.widthOfTextAtSize(testLine, fontSize); // Calcular el ancho del texto

        if (textWidth <= maxWidth) {
          currentLine = testLine;
        } else {
          // Dibujar la línea actual y comenzar una nueva
          page.drawText(currentLine, { x: marginLeft, y: yPosition, size: fontSize, font: font });
          yPosition -= 15;

          if (yPosition < 50) {
            // Agregar una nueva página si el contenido excede el espacio
            page = pdfDoc.addPage([600, 800]);
            yPosition = height - 50;
          }

          currentLine = word;
        }
      }

      // Dibujar la última línea del párrafo
      if (currentLine) {
        page.drawText(currentLine, { x: marginLeft, y: yPosition, size: fontSize, font: font });
        yPosition -= 15;
      }

      // Agregar espacio vertical entre párrafos
      yPosition -= 10;

      if (yPosition < 50) {
        // Agregar una nueva página si el contenido excede el espacio
        page = pdfDoc.addPage([600, 800]);
        yPosition = height - 50;
      }
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
