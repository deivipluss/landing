"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, MessageCircle, X } from "lucide-react";

export default function ContractPage() {
  const [termsExpired, setTermsExpired] = useState(false);

  useEffect(() => {
    // Simulación de verificación de términos expirados
    const checkTermsExpiration = () => {
      const expirationDate = new Date("2023-12-31T23:59:59"); // Fecha de expiración simulada
      const now = new Date();
      setTermsExpired(now > expirationDate);
    };

    checkTermsExpiration();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
      {/* Popup bloqueante si los términos han expirado */}
      {termsExpired && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setTermsExpired(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              ¡Términos Expirados!
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Los términos de este contrato han expirado. Por favor, solicita
              una nueva cotización para continuar.
            </p>
            <a
              href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Solicitar Cotización en WhatsApp
            </a>
          </div>
        </motion.div>
      )}

      {/* Contenido principal de la página */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Contrato de Servicios
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          Este contrato detalla los términos y condiciones para la prestación
          de servicios. Por favor, revisa cuidadosamente antes de proceder.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">
            Detalles del Contrato
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
            <li>Duración del contrato: 6 meses.</li>
            <li>Servicios incluidos: Diseño, desarrollo y soporte técnico.</li>
            <li>Condiciones de pago: 50% inicial, 50% al finalizar.</li>
            <li>Política de cancelación: No reembolsable después de iniciar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
