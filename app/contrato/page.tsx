"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ContractTerms from "@/components/ContractTerms";
import AcceptTermsForm from "@/components/AcceptTermsForm";
import Container from "@/components/Container";

export default function ContratoPage() {
  const [accepted, setAccepted] = useState(false);
  const contractRef = useRef<HTMLDivElement>(null);

  const handleAccept = (value: boolean) => {
    setAccepted(value);
  };

  // Función para imprimir el contrato
  const handlePrint = () => {
    const contractContent = contractRef.current;
    if (!contractContent) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Por favor permite ventanas emergentes para imprimir el contrato.');
      return;
    }

    // Información del usuario desde localStorage o estado global si lo implementaste
    const userData = {
      name: localStorage.getItem('contractUserName') || '',
      email: localStorage.getItem('contractUserEmail') || '',
      company: localStorage.getItem('contractUserCompany') || '',
    };

    const currentDate = new Date().toLocaleDateString('es-ES');
    
    printWindow.document.write(`
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
            <p><strong>Fecha:</strong> ${currentDate}</p>
          </div>
          
          <div class="content">
            ${contractContent.innerHTML}
          </div>
          
          <div class="signature-area">
            <h3>Datos del Cliente:</h3>
            <p><strong>Nombre:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            ${userData.company ? `<p><strong>Empresa/Organización:</strong> ${userData.company}</p>` : ''}
            
            <div class="signatures">
              <div style="display: flex; justify-content: space-between; margin-top: 40px;">
                <div>
                  <span class="signature-line"></span>
                  <p>Firma del Consultor<br>Deivis Contreras Cárdenas</p>
                </div>
                <div>
                  <span class="signature-line"></span>
                  <p>Firma del Cliente<br>${userData.name}</p>
                </div>
              </div>
            </div>
            
            <p class="date">Fecha de aceptación: ${currentDate}</p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 500);
  };

  // Función para enviar por correo
  const handleEmail = async () => {
    // Obtener datos del usuario
    const userEmail = localStorage.getItem('contractUserEmail') || '';
    const userName = localStorage.getItem('contractUserName') || '';
    
    if (!userEmail) {
      alert('No se encontró un correo electrónico para enviar el contrato.');
      return;
    }

    // Obtener el HTML del contrato para enviarlo por correo
    const contractContent = contractRef.current?.innerHTML || '';

    try {
      // Enviar a la API de correo
      const response = await fetch('/api/send-contract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          name: userName,
          date: new Date().toLocaleString('es-ES'),
          contractHTML: contractContent
        }),
      });

      if (response.ok) {
        alert('El contrato ha sido enviado a tu correo electrónico.');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al enviar el contrato. Por favor intenta nuevamente.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header decorativo */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 h-2"></div>
      
      {/* Contenido principal */}
      <Container className="py-12 md:py-20">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">
            Contrato de Servicios de Consultoría Digital
          </h1>
          
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Revisa y acepta los términos y condiciones para contratar los servicios 
            de consultoría en transformación digital de Deivis Contreras Cárdenas.
          </p>
          
          <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl p-6 md:p-8 mb-8 border border-gray-100 dark:border-slate-700">
            {/* Indicadores de progreso */}
            <div className="flex justify-between items-center mb-8 text-sm font-medium">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  1
                </div>
                <span className="ml-2 text-blue-600 dark:text-blue-400">Revisar términos</span>
              </div>
              <div className="h-px bg-gray-300 dark:bg-gray-600 w-1/4"></div>
              <div className="flex items-center">
                <div className={`h-8 w-8 rounded-full ${accepted ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'} text-white flex items-center justify-center`}>
                  2
                </div>
                <span className={`ml-2 ${accepted ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>
                  Aceptar contrato
                </span>
              </div>
            </div>
            
            {/* Contenido del contrato (referenciado para imprimir) */}
            <div ref={contractRef}>
              <ContractTerms />
            </div>
            
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
              <AcceptTermsForm onAccept={handleAccept} />
              
              {accepted && (
                <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">¡Contrato Aceptado!</h4>
                  <p className="mb-6">Gracias por aceptar los términos y condiciones. Nos pondremos en contacto contigo muy pronto para comenzar tu proceso de transformación digital.</p>
                  
                  {/* Botones para imprimir y enviar por email */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                    <button
                      onClick={handlePrint}
                      className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                      </svg>
                      Imprimir Contrato
                    </button>
                    <button
                      onClick={handleEmail}
                      className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Enviar por Email
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Volver al inicio
            </Link>
          </div>
          
          {/* Información de contacto */}
          <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>¿Tienes alguna pregunta sobre el contrato?</p>
            <p className="mt-1">Contáctanos a <span className="text-blue-600 dark:text-blue-400">info@deiviscontreras.com</span></p>
          </div>
        </div>
      </Container>
      
      {/* Footer decorativo */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 h-1 mt-auto"></div>
    </main>
  );
}
