import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PDFDocument, rgb, StandardFonts, PDFPage } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';
// Corrección: usar require para html-to-text en lugar de import ESM
const { htmlToText } = require('html-to-text');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, date, contractHTML, dniOrRuc } = body;

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
        const instructiveMessageRegex = new RegExp('<div class="bg-blue-50 dark:bg-blue-900\\/20 p-4 rounded-lg mb-6 border-l-4 border-blue-500">[\\s\\S]*?<\\/div>', 'g');
        const cleanHTML = contractHTML.replace(instructiveMessageRegex, '');
        
        // Luego convertimos a texto plano usando la función importada correctamente
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
    
    // Cargar la imagen de la firma
    let signatureImage;
    try {
      let signatureImageBytes;
      
      // Intentamos dos métodos para cargar la imagen, dependiendo del entorno
      try {
        // Método 1: Intentar cargar desde el sistema de archivos local (desarrollo)
        const signatureImagePath = path.join(process.cwd(), 'public', 'imagenes', 'firma-consultor.png');
        signatureImageBytes = fs.readFileSync(signatureImagePath);
      } catch (localError) {
        console.log('No se pudo cargar la imagen localmente, intentando con fetch:', localError);
        
        // Método 2: Intentar cargar usando fetch (producción/serverless)
        const imageUrl = new URL('/imagenes/firma-consultor.png', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000').toString();
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
        const arrayBuffer = await response.arrayBuffer();
        signatureImageBytes = Buffer.from(arrayBuffer);
      }
      
      // Embeber la imagen en el documento PDF
      signatureImage = await pdfDoc.embedPng(signatureImageBytes);
      console.log('Imagen de firma cargada correctamente');
    } catch (imageError) {
      console.error('Error al cargar la imagen de la firma:', imageError);
      // Continuamos sin la imagen en caso de error
    }
    
    // Configuración de la página
    const pageWidth = 600;
    const pageHeight = 840;
    let page = pdfDoc.addPage([pageWidth, pageHeight]);
    
    // Colores del documento
    const titleColor = rgb(0.1, 0.3, 0.6); // Azul oscuro para títulos
    const subtitleColor = rgb(0.2, 0.4, 0.7); // Azul medio para subtítulos
    const textColor = rgb(0.1, 0.1, 0.1); // Negro para texto general
    const accentColor = rgb(0.6, 0.6, 0.6); // Gris para elementos decorativos
    const watermarkColor = rgb(0.85, 0.85, 0.85); // Gris muy claro para la marca de agua
    
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
    
    // Función para dibujar marca de agua en cada página
    const drawWatermark = (currentPage: PDFPage) => {
      // Primera marca de agua horizontal
      const watermarkText = "DeivisPluss.pro";
      const fontSize = 50;
      const watermarkWidth = helveticaBold.widthOfTextAtSize(watermarkText, fontSize);
      
      currentPage.drawText(watermarkText, {
        x: (pageWidth - watermarkWidth) / 2,
        y: pageHeight / 2,
        size: fontSize,
        font: helveticaBold,
        color: watermarkColor,
        opacity: 0.15,
      });
      
      // Segunda marca de agua vertical (simulando rotación)
      currentPage.drawText("CONFIDENCIAL", {
        x: pageWidth / 2 - 20, // Ajuste horizontal aproximado
        y: pageHeight / 2 + watermarkWidth / 4, // Ajuste vertical aproximado
        size: fontSize - 10, // Un poco más pequeña
        font: helveticaBold,
        color: watermarkColor,
        opacity: 0.1,
      });
    };
    
    // Dibujar encabezado, pie de página y marca de agua en la primera página
    drawHeader(page);
    drawWatermark(page);
    
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
            drawWatermark(page); // Agregar la marca de agua a cada página nueva
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
          drawWatermark(page); // Agregar la marca de agua a cada página nueva
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
      drawWatermark(page); // Agregar marca de agua a la página de firmas
      yPosition = pageHeight - marginTop;
    }
    
    yPosition -= 40;
    
    // Eliminamos el título "ACEPTACIÓN Y FIRMA"
    
    const signatureWidth = (pageWidth - marginLeft - marginRight - 60) / 2;
    
    // Si tenemos la imagen de la firma, la dibujamos
    if (signatureImage) {
      // Obtener dimensiones de la imagen
      const imgWidth = signatureImage.width;
      const imgHeight = signatureImage.height;
      
      // Calcular la escala para que la firma tenga un ancho adecuado
      // pero mantenga su proporción de aspecto
      const scale = Math.min(signatureWidth * 0.8 / imgWidth, 40 / imgHeight);
      
      // Dibujar la imagen de la firma
      page.drawImage(signatureImage, {
        x: marginLeft + 10, // Un poco más a la derecha para centrar mejor
        y: yPosition - 30, // Posicionamos la imagen con más espacio
        width: imgWidth * scale,
        height: imgHeight * scale,
      });
    }
    
    // Información del consultor - con un espacio equilibrado
    page.drawText('Deivis Contreras Cárdenas', {
      x: marginLeft,
      y: yPosition - 60, // Ajustado para dejar espacio adecuado
      size: 10,
      font: helveticaBold,
      color: textColor,
    });
    
    page.drawText('DNI: 71035458', {
      x: marginLeft,
      y: yPosition - 75, // Ajustado para mantener separación relativa
      size: 10,
      font: helvetica,
      color: textColor,
    });
    
    page.drawText('EL CONSULTOR', {
      x: marginLeft,
      y: yPosition - 90, // Ajustado para mantener separación relativa
      size: 10,
      font: helveticaOblique,
      color: textColor,
    });
    
    // Información del cliente - sin línea horizontal
    page.drawText(name, {
      x: pageWidth - marginRight - signatureWidth,
      y: yPosition - 60, // Alineado con el nombre del consultor
      size: 10,
      font: helveticaBold,
      color: textColor,
    });
    
    // Agregar DNI/RUC del cliente si está disponible
    if (dniOrRuc) {
      page.drawText(`DNI/RUC: ${dniOrRuc}`, {
        x: pageWidth - marginRight - signatureWidth,
        y: yPosition - 75, // Misma posición que el DNI del consultor
        size: 10,
        font: helvetica,
        color: textColor,
      });
      
      // Ajustar posición de la fecha y el rol debido al nuevo campo
      page.drawText(`Fecha: ${date}`, {
        x: pageWidth - marginRight - signatureWidth,
        y: yPosition - 90, // Movido más abajo
        size: 10,
        font: helvetica,
        color: textColor,
      });
      
      page.drawText('EL CLIENTE', {
        x: pageWidth - marginRight - signatureWidth,
        y: yPosition - 105, // Movido más abajo
        size: 10,
        font: helveticaOblique,
        color: textColor,
      });
    } else {
      // Si no hay DNI/RUC, mantener el formato original
      page.drawText(`Fecha: ${date}`, {
        x: pageWidth - marginRight - signatureWidth,
        y: yPosition - 75,
        size: 10,
        font: helvetica,
        color: textColor,
      });
      
      page.drawText('EL CLIENTE', {
        x: pageWidth - marginRight - signatureWidth,
        y: yPosition - 90,
        size: 10,
        font: helveticaOblique,
        color: textColor,
      });
    }
    
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
        <div style="margin-top: 20px;">
          <img src="cid:firma-consultor" alt="Firma" style="max-width: 150px; height: auto; margin-bottom: 5px;" />
          <p><b>Deivis Contreras Cárdenas</b><br>Consultor en Transformación Digital<br>info@deiviscontreras.com</p>
        </div>
      `,
      attachments: [
        {
          filename: 'contrato-consultoria-digital.pdf',
          content: pdfBytes,
          contentType: 'application/pdf',
        },
        {
          filename: 'firma-consultor.png',
          path: path.join(process.cwd(), 'public', 'imagenes', 'firma-consultor.png'),
          cid: 'firma-consultor' // El mismo CID referenciado en el html
        }
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
