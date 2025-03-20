import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PDFDocument, rgb, StandardFonts, PDFPage } from 'pdf-lib'; // Importar StandardFonts para usar fuentes estándar estándar
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
        // Primero, eliminamos el mensaje instructivo del HTML
        // Usar RegExp con el constructor en lugar de la notación literal para evitar problemas con escape de /
        const instructiveMessageRegex = new RegExp('<div class="bg-blue-50 dark:bg-blue-900\\/20 p-4 rounded-lg mb-6 border-l-4 border-blue-500">[\\s\\S]*?<\\/div>', 'g');
        const cleanHTML = contractHTML.replace(instructiveMessageRegex, '');
        
        // Luego convertimos a texto plano
        contractText = htmlToText(cleanHTML, { wordwrap: 130 }); // Ajustar el texto a un ancho razonable
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

    // Generar el archivo PDF mejorado
    const pdfDoc = await PDFDocument.create();
    
    // Embeber las fuentes necesarias para diferentes estilos
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
    
    // Configuración de la página
    const pageWidth = 600;
    const pageHeight = 840;
    let page = pdfDoc.addPage([pageWidth, pageHeight]);
    
    // Colores del documento
    const titleColor = rgb(0.1, 0.3, 0.6); // Azul oscuro para títulos
    const subtitleColor = rgb(0.2, 0.4, 0.7); // Azul medio para subtítulos
    const textColor = rgb(0.1, 0.1, 0.1); // Negro para texto general
    const accentColor = rgb(0.6, 0.6, 0.6); // Gris para elementos decorativos
    
    // Configuración de márgenes
    const marginLeft = 60;
    const marginRight = 60;
    const marginTop = 100; // Aumentado para dar más espacio al encabezado
    const marginBottom = 80;
    const textMaxWidth = pageWidth - marginLeft - marginRight;
    
    // Función para dibujar encabezado en cada página
    const drawHeader = (currentPage: PDFPage) => {
      // Título del documento en dos líneas
      currentPage.drawText('CONTRATO DE SERVICIOS', {
        x: marginLeft,
        y: pageHeight - 30,
        size: 10,
        font: helveticaBold,
        color: accentColor,
      });
      
      // URL debajo del título
      currentPage.drawText('www.deivipluss.pro', {
        x: marginLeft,
        y: pageHeight - 45,
        size: 8,
        font: helvetica,
        color: accentColor,
      });
      
      // Línea decorativa - REPOSICIONADA PARA QUE ESTÉ DEBAJO DEL TEXTO
      currentPage.drawRectangle({
        x: marginLeft,
        y: pageHeight - 55, // Ajustado para estar debajo del texto www.deivipluss.pro
        width: pageWidth - marginLeft - marginRight,
        height: 1,
        color: accentColor,
      });
      
      // Fecha en la parte derecha
      currentPage.drawText(`Fecha: ${new Date().toLocaleDateString('es-ES')}`, {
        x: pageWidth - marginRight - 120,
        y: pageHeight - 30,
        size: 8,
        font: helvetica,
        color: accentColor,
      });
    };
    
    // Función para dibujar pie de página en cada página
    const drawFooter = (currentPage: PDFPage, pageNumber: number, totalPages: number) => {
      // Línea decorativa - REPOSICIONADA PARA QUE ESTÉ ARRIBA DEL TEXTO
      currentPage.drawRectangle({
        x: marginLeft,
        y: marginBottom - 15, // Ajustado para estar arriba del texto de Deivis Contreras
        width: pageWidth - marginLeft - marginRight,
        height: 1,
        color: accentColor,
      });
      
      // Firma del consultor a la izquierda en dos líneas
      currentPage.drawText('Deivis Contreras Cárdenas', {
        x: marginLeft,
        y: marginBottom - 28, // Ajustado para estar debajo de la línea
        size: 8,
        font: helveticaBold,
        color: accentColor,
      });
      
      currentPage.drawText('Consultor Digital', {
        x: marginLeft,
        y: marginBottom - 40, // Ajustado para mantener proporción
        size: 7,
        font: helvetica,
        color: accentColor,
      });
      
      // Número de página a la derecha
      currentPage.drawText(`Página ${pageNumber} de ${totalPages}`, {
        x: pageWidth - marginRight - 80,
        y: marginBottom - 28, // Alineado con el texto de Deivis Contreras
        size: 8,
        font: helvetica,
        color: accentColor,
      });
    };
    
    // Dibujar encabezado y pie de página en la primera página
    drawHeader(page);
    
    // Título principal del contrato
    let yPosition = pageHeight - marginTop;
    
    page.drawText('CONTRATO DE PRESTACIÓN DE SERVICIOS DE', {
      x: (pageWidth - helveticaBold.widthOfTextAtSize('CONTRATO DE PRESTACIÓN DE SERVICIOS DE', 16)) / 2,
      y: yPosition,
      size: 16,
      font: helveticaBold,
      color: titleColor,
    });
    
    yPosition -= 20;
    page.drawText('CONSULTORÍA Y TRANSFORMACIÓN DIGITAL', {
      x: (pageWidth - helveticaBold.widthOfTextAtSize('CONSULTORÍA Y TRANSFORMACIÓN DIGITAL', 16)) / 2,
      y: yPosition,
      size: 16,
      font: helveticaBold,
      color: titleColor,
    });
    
    yPosition -= 40;
    
    // Datos del cliente
    page.drawText(`Cliente: ${name}`, {
      x: marginLeft,
      y: yPosition,
      size: 12,
      font: helveticaBold,
      color: textColor,
    });
    
    yPosition -= 20;
    page.drawText(`Fecha: ${date}`, {
      x: marginLeft,
      y: yPosition,
      size: 12,
      font: helveticaBold,
      color: textColor,
    });
    
    yPosition -= 40;
    
    // Partes del contrato
    page.drawText('Entre las partes:', {
      x: marginLeft,
      y: yPosition,
      size: 12,
      font: helveticaBold,
      color: subtitleColor,
    });
    
    yPosition -= 25;
    
    // Procesamiento de los párrafos del contrato
    let pageNumber = 1;
    const totalPages = Math.ceil(paragraphs.length / 25) + 1; // Estimación aproximada
    
    for (const paragraph of paragraphs) {
      // Detectar si es un título o subtítulo basado en el texto
      const isSectionTitle = paragraph.match(/^\d+\.\s[A-ZÁÉÍÓÚÑ\s]+$/); // Ejemplo: "1. OBJETO DEL CONTRATO"
      const isSubSectionTitle = paragraph.match(/^\d+\.\d+\.\s[A-Za-záéíóúñ\s]+$/); // Ejemplo: "4.1. Obligaciones de EL CONSULTOR"
      const isPhase = paragraph.includes('Fase') && paragraph.includes(':');
      
      // Si el párrafo contiene "9. JURISDICCIÓN" o menciona "jurisdicción", lo omitimos
      if (paragraph.includes("9. JURISDICCIÓN") || paragraph.toLowerCase().includes("jurisdicción")) {
        continue;
      }
      
      let fontSize = 10;
      let font = helvetica;
      let color = textColor;
      let alignment = 'left';
      let lineSpacing = 15;
      
      if (isSectionTitle) {
        // Es un título principal
        yPosition -= 15;
        fontSize = 12;
        font = helveticaBold;
        color = titleColor;
        lineSpacing = 25;
      } else if (isSubSectionTitle || isPhase) {
        // Es un subtítulo
        yPosition -= 10;
        fontSize = 11;
        font = helveticaBold;
        color = subtitleColor;
        lineSpacing = 20;
      }
      
      // Dividir párrafos largos en líneas que se ajusten al ancho disponible
      const words = paragraph.split(' ');
      let currentLine = '';
      
      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const lineWidth = font.widthOfTextAtSize(testLine, fontSize);
        
        if (lineWidth <= textMaxWidth) {
          currentLine = testLine;
        } else {
          // Verificar si hay espacio suficiente para esta línea
          if (yPosition < marginBottom) {
            // Agregar nueva página
            drawFooter(page, pageNumber, totalPages);
            pageNumber++;
            page = pdfDoc.addPage([pageWidth, pageHeight]);
            drawHeader(page);
            yPosition = pageHeight - marginTop;
          }
          
          // Dibujar la línea con alineación adecuada
          let xPosition = marginLeft;
          if (alignment === 'center') {
            xPosition = (pageWidth - font.widthOfTextAtSize(currentLine, fontSize)) / 2;
          } else if (alignment === 'right') {
            xPosition = pageWidth - marginRight - font.widthOfTextAtSize(currentLine, fontSize);
          }
          
          page.drawText(currentLine, {
            x: xPosition,
            y: yPosition,
            size: fontSize,
            font: font,
            color: color,
          });
          
          yPosition -= lineSpacing;
          currentLine = word;
        }
      }
      
      // Dibujar la última línea del párrafo si hay contenido
      if (currentLine) {
        // Verificar si hay espacio suficiente
        if (yPosition < marginBottom) {
          drawFooter(page, pageNumber, totalPages);
          pageNumber++;
          page = pdfDoc.addPage([pageWidth, pageHeight]);
          drawHeader(page);
          yPosition = pageHeight - marginTop;
        }
        
        let xPosition = marginLeft;
        if (alignment === 'center') {
          xPosition = (pageWidth - font.widthOfTextAtSize(currentLine, fontSize)) / 2;
        } else if (alignment === 'right') {
          xPosition = pageWidth - marginRight - font.widthOfTextAtSize(currentLine, fontSize);
        }
        
        page.drawText(currentLine, {
          x: xPosition,
          y: yPosition,
          size: fontSize,
          font: font,
          color: color,
        });
        
        yPosition -= lineSpacing;
      }
      
      // Agregar espacio después del párrafo
      yPosition -= 5;
    }
    
    // Agregar sección de firmas al final
    if (yPosition < marginBottom + 150) {
      drawFooter(page, pageNumber, totalPages);
      pageNumber++;
      page = pdfDoc.addPage([pageWidth, pageHeight]);
      drawHeader(page);
      yPosition = pageHeight - marginTop;
    }
    
    yPosition -= 40;
    
    page.drawText('ACEPTACIÓN Y FIRMA', {
      x: (pageWidth - helveticaBold.widthOfTextAtSize('ACEPTACIÓN Y FIRMA', 14)) / 2,
      y: yPosition,
      size: 14,
      font: helveticaBold,
      color: titleColor,
    });
    
    yPosition -= 40;
    
    const signatureWidth = (pageWidth - marginLeft - marginRight - 60) / 2;
    
    // Línea de firma para el consultor - usando drawRectangle en lugar de drawLine
    page.drawRectangle({
      x: marginLeft,
      y: yPosition - 1,
      width: signatureWidth,
      height: 1,
      color: accentColor,
    });
    
    // Información del consultor
    page.drawText('Deivis Contreras Cárdenas', {
      x: marginLeft,
      y: yPosition - 20,
      size: 10,
      font: helveticaBold,
      color: textColor,
    });
    
    page.drawText('DNI: 71035458', {
      x: marginLeft,
      y: yPosition - 35,
      size: 10,
      font: helvetica,
      color: textColor,
    });
    
    page.drawText('EL CONSULTOR', {
      x: marginLeft,
      y: yPosition - 50,
      size: 10,
      font: helveticaOblique,
      color: textColor,
    });
    
    // Línea de firma para el cliente - usando drawRectangle en lugar de drawLine
    page.drawRectangle({
      x: pageWidth - marginRight - signatureWidth,
      y: yPosition - 1,
      width: signatureWidth,
      height: 1,
      color: accentColor,
    });
    
    // Información del cliente
    page.drawText(name, {
      x: pageWidth - marginRight - signatureWidth,
      y: yPosition - 20,
      size: 10,
      font: helveticaBold,
      color: textColor,
    });
    
    page.drawText(`Fecha: ${date}`, {
      x: pageWidth - marginRight - signatureWidth,
      y: yPosition - 35,
      size: 10,
      font: helvetica,
      color: textColor,
    });
    
    page.drawText('EL CLIENTE', {
      x: pageWidth - marginRight - signatureWidth,
      y: yPosition - 50,
      size: 10,
      font: helveticaOblique,
      color: textColor,
    });
    
    // Dibujar pie de página en la última página
    drawFooter(page, pageNumber, totalPages);
    
    // Serializar el PDF a un archivo
    const pdfBytes = Buffer.from(await pdfDoc.save());
    
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
