"use client";

import { useState } from "react";
import Link from "next/link";
import ContractTerms from "@/components/ContractTerms";
import AcceptTermsForm from "@/components/AcceptTermsForm";
import Container from "@/components/Container"; // Corregir esta importación

export default function ContratoPage() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = (value: boolean) => {
    setAccepted(value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container className="py-8 md:py-16">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Contrato de Servicios de Consultoría Digital
          </h1>
          
          <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 mb-8">
            <ContractTerms />
            
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
              <AcceptTermsForm onAccept={handleAccept} />
              
              {accepted && (
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md text-center">
                  ¡Gracias por aceptar los términos y condiciones! Nos pondremos en contacto contigo a la brevedad.
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
