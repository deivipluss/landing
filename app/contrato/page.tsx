"use client";

import { useState } from "react";
import Link from "next/link";
import ContractTerms from "@/components/ContractTerms";
import AcceptTermsForm from "@/components/AcceptTermsForm";
import Container from "@/components/Container";

export default function ContratoPage() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = (value: boolean) => {
    setAccepted(value);
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
            
            <ContractTerms />
            
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
                  <p>Gracias por aceptar los términos y condiciones. Nos pondremos en contacto contigo muy pronto para comenzar tu proceso de transformación digital.</p>
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
