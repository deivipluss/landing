"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, MessageCircle, Home } from "lucide-react";
import ContractTerms from "@/components/ContractTerms";
import AcceptTermsForm from "@/components/AcceptTermsForm";
import Container from "@/components/Container";

export default function ContratoPage() {
  const [accepted, setAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isPrinted, setIsPrinted] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const contractRef = useRef<HTMLDivElement>(null);
  const [showBlockingModal] = useState(true);

  // Verificar si es seguro cerrar el modal
  const canCloseModal = isPrinted || isEmailSent;

  // Comprobar si hay un estado guardado al cargar la página
  useEffect(() => {
    const savedAccepted = localStorage.getItem("contractAccepted") === "true";
    if (savedAccepted) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = (value: boolean) => {
    setAccepted(value);
    if (value) {
      // Guardar en localStorage para mantener el estado entre recargas
      localStorage.setItem("contractAccepted", "true");
      // Mostrar modal automáticamente cuando se acepta el contrato
      setShowModal(true);
      // Reiniciar estados cuando se acepta el contrato nuevamente
      setIsPrinted(false);
      setIsEmailSent(false);
    }
  };

  // Función para imprimir el contrato
  const handlePrint = () => {
    const contractContent = contractRef.current;
    if (!contractContent) return;

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      showToast(
        "Error: Por favor permite ventanas emergentes para imprimir el contrato.",
        "error"
      );
      return;
    }

    // Información del usuario desde localStorage o estado global si lo implementaste
    const userData = {
      name: localStorage.getItem("contractUserName") || "",
      email: localStorage.getItem("contractUserEmail") || "",
      company: localStorage.getItem("contractUserCompany") || "",
      phone: localStorage.getItem("contractUserPhone") || "",
      dniOrRuc: localStorage.getItem("contractUserDniOrRuc") || "", // Mantener solo los campos necesarios
    };

    const currentDate = new Date().toLocaleDateString("es-ES");

    // Obtener el HTML del contrato pero excluir el mensaje instructivo
    const contractHTML = contractContent.innerHTML;
    // Usar RegExp con el constructor en lugar de la notación literal para evitar problemas con escape de /
    const instructiveMessageRegex = new RegExp(
      '<div class="bg-blue-50 dark:bg-blue-900\\/20 p-4 rounded-lg mb-6 border-l-4 border-blue-500">[\\s\\S]*?<\\/div>',
      "g"
    );
    const cleanContractHTML = contractHTML.replace(instructiveMessageRegex, "");

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
            .signature-img {
              max-width: 150px;
              max-height: 60px;
              margin-bottom: 5px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Contrato de Servicios de Consultoría Digital</h1>
            <p><strong>Fecha:</strong> ${currentDate}</p>
          </div>
          
          <div class="content">
            ${cleanContractHTML}
          </div>
          
          <div class="signature-area">
            <h3>Datos del Cliente:</h3>
            <p><strong>Nombre:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            ${
              userData.company
                ? `<p><strong>Empresa/Organización:</strong> ${userData.company}</p>`
                : ""
            }
            <p><strong>DNI/RUC:</strong> ${userData.dniOrRuc}</p>
            
            <div class="signatures">
              <div style="display: flex; justify-content: space-between; margin-top: 40px;">
                <div>
                  <img src="/imagenes/firma-consultor.png" alt="Firma del consultor" class="signature-img" />
                  <p>Firma del Consultor<br>Deivis Contreras Cárdenas<br>DNI: 71035458</p>
                </div>
                <div>
                  <span class="signature-line"></span>
                  <p>Firma del Cliente<br>${userData.name}<br>DNI/RUC: ${userData.dniOrRuc}</p>
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

    // Marcar el contrato como impreso cuando se complete la impresión
    printWindow.onafterprint = () => {
      setIsPrinted(true);
      showToast("¡El contrato se ha impreso correctamente!", "success");
    };

    setTimeout(() => printWindow.print(), 500);
  };

  // Función para enviar por correo
  const handleEmail = async () => {
    // Obtener datos del usuario
    const userEmail = localStorage.getItem("contractUserEmail") || "";
    const userName = localStorage.getItem("contractUserName") || "";
    const userDniRuc = localStorage.getItem("contractUserDniOrRuc") || "";
    const contractContent = contractRef.current?.innerHTML || "";

    if (!userEmail || !userName || !contractContent) {
      showToast("Error: Faltan datos necesarios para enviar el correo.", "error");
      return;
    }

    setIsLoading(true);

    try {
      // Enviar a la API de correo
      const response = await fetch("/api/send-contract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          name: userName,
          dniOrRuc: userDniRuc, // Asegurarse de enviar el DNI/RUC
          date: new Date().toLocaleString("es-ES"),
          contractHTML: contractContent,
        }),
      });

      if (response.ok) {
        setIsEmailSent(true);
        showToast(
          "¡El contrato ha sido enviado a tu correo electrónico!",
          "success"
        );
      } else {
        const errorData = await response.json();
        console.error("Error al enviar el correo:", errorData);
        showToast(
          errorData.error ||
            "Error al enviar el correo. Por favor intenta nuevamente.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      showToast(
        "Hubo un problema al enviar el correo. Por favor intenta nuevamente.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Sistema de notificaciones toast mejorado
  const [toasts, setToasts] = useState<
    Array<{ id: number; message: string; type: "success" | "error" | "info" }>
  >([]);

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  };

  return (
    <>
      {/* Popup Modal Bloqueante */}
      {showBlockingModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-2xl p-6 max-w-lg w-full mx-auto"
          >
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-red-500" />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Acceso Restringido
              </h2>

              <p className="text-gray-600 mb-6">
                Este contrato requiere una cotización actualizada para ser
                visualizado. Por favor, solicita una nueva cotización para
                continuar.
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/51999113934?text=Hola,%20necesito%20una%20cotización%20actualizada%20para%20acceder%20al%20contrato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Solicitar Cotización por WhatsApp
                </a>

                <button
                  onClick={() => (window.location.href = "/")}
                  className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
                >
                  <Home className="h-5 w-5 mr-2" />
                  Volver al Inicio
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E]">
        {/* Header decorativo */}
        <div className="w-full bg-gradient-to-r from-[#4A90E2] to-[#9370DB] h-2"></div>

        {/* No incluir el menú de navegación aquí */}

        <Container className="py-12 md:py-20">
          <div className="w-full max-w-4xl mx-auto">
            <h1
              className="text-3xl md:text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4A90E2] to-[#9370DB] font-poppins"
              style={{ letterSpacing: "-1px" }}
            >
              Contrato de Servicios de Consultoría Digital
            </h1>

            <p className="text-center text-[#E1E1E1] opacity-80 mb-8 max-w-2xl mx-auto font-poppins font-light">
              Revisa y acepta los términos y condiciones para contratar los
              servicios de consultoría en transformación digital de Deivis
              Contreras Cárdenas.
            </p>

            <div className="bg-[#1A1A2E] shadow-glow rounded-xl p-6 md:p-8 mb-8 border border-[#4A90E2]/20">
              {/* Indicadores de progreso */}
              <div className="flex justify-between items-center mb-8 text-sm font-medium">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#4A90E2] text-white flex items-center justify-center">
                    1
                  </div>
                  <span className="ml-2 text-[#4A90E2]">Revisar términos</span>
                </div>
                <div className="h-px bg-gray-700 w-1/4"></div>
                <div className="flex items-center">
                  <div
                    className={`h-8 w-8 rounded-full ${
                      accepted ? "bg-[#FF5C5C]" : "bg-gray-700"
                    } text-white flex items-center justify-center`}
                  >
                    2
                  </div>
                  <span
                    className={`ml-2 ${
                      accepted ? "text-[#FF5C5C]" : "text-gray-500"
                    }`}
                  >
                    Aceptar contrato
                  </span>
                </div>
              </div>

              {/* Contenido del contrato (referenciado para imprimir) */}
              <div ref={contractRef} className="text-[#E1E1E1]">
                <ContractTerms />
              </div>

              <div className="mt-8 border-t border-gray-700 pt-6">
                <AcceptTermsForm
                  onAccept={handleAccept}
                  isAlreadyAccepted={accepted}
                />

                {accepted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 flex flex-col md:flex-row justify-center gap-4"
                  >
                    <Link
                      href="/"
                      className="flex items-center justify-center px-6 py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#4A90E2]/80 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Volver al Inicio
                    </Link>

                    <button
                      onClick={() => setShowModal(true)}
                      className="flex items-center justify-center px-6 py-3 bg-[#FF5C5C] text-white rounded-lg hover:bg-[#FF5C5C]/80 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                        <path
                          fillRule="evenodd"
                          d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Gestionar Contrato
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/"
                className="inline-flex items-center text-[#4A90E2] hover:text-[#4A90E2]/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Volver al inicio
              </Link>
            </div>

            {/* Información de contacto - dirección actualizada */}
            <div className="mt-12 text-center text-sm text-gray-400">
              <p>¿Tienes alguna pregunta sobre el contrato?</p>
              <p className="mt-1">
                Contáctanos a{" "}
                <span className="text-[#4A90E2]">deivipluss@gmail.com</span>
              </p>
            </div>
          </div>
        </Container>

        {/* Sistema de Toasts/Notificaciones */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
          <AnimatePresence>
            {toasts.map((toast) => (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className={`px-6 py-3 rounded-lg shadow-glow flex items-center ${
                  toast.type === "success"
                    ? "bg-green-500 text-white"
                    : toast.type === "error"
                    ? "bg-[#FF5C5C] text-white"
                    : "bg-[#4A90E2] text-white"
                }`}
              >
                {toast.type === "success" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {toast.type === "error" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {toast.type === "info" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span>{toast.message}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal de confirmación mejorado */}
        <AnimatePresence>
          {showModal && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => canCloseModal && setShowModal(false)}
                className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4 backdrop-blur-sm"
              >
                {/* Modal content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#1A1A2E] rounded-xl shadow-glow max-w-md w-full p-8 relative overflow-hidden border border-[#4A90E2]/20"
                >
                  {/* Glow effects */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#4A90E2] rounded-full opacity-20 blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#FF5C5C] rounded-full opacity-20 blur-3xl"></div>

                  {/* Check icon */}
                  <div className="flex justify-center mb-6">
                    <div className="h-20 w-20 rounded-full bg-green-900/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-center text-white mb-2 font-poppins">
                    ¡Contrato Aceptado!
                  </h3>

                  <p className="text-center text-gray-300 mb-6">
                    Gracias por aceptar los términos y condiciones. Elige cómo
                    quieres recibir tu contrato.
                  </p>

                  {/* Estado de acciones */}
                  <div className="flex justify-center gap-4 mb-4">
                    <div
                      className={`flex flex-col items-center ${
                        isPrinted ? "text-green-500" : "text-gray-400"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        />
                      </svg>
                      <span className="text-xs mt-1">
                        {isPrinted ? "Impreso" : "Pendiente"}
                      </span>
                    </div>
                    <div
                      className={`flex flex-col items-center ${
                        isEmailSent ? "text-green-500" : "text-gray-400"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs mt-1">
                        {isEmailSent ? "Enviado" : "Pendiente"}
                      </span>
                    </div>
                  </div>

                  {/* Botones para imprimir y enviar por email */}
                  <div className="flex flex-col gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handlePrint}
                      className={`flex items-center justify-center px-6 py-3 ${
                        isPrinted ? "bg-green-600" : "bg-[#4A90E2]"
                      } text-white rounded-lg hover:bg-[#4A90E2]/80 transition-colors duration-200 w-full`}
                      disabled={isLoading}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {isPrinted ? "Imprimir Nuevamente" : "Imprimir Contrato"}
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleEmail}
                      className={`flex items-center justify-center px-6 py-3 ${
                        isEmailSent ? "bg-green-600" : "bg-[#FF5C5C]"
                      } text-white rounded-lg hover:bg-[#FF5C5C]/80 transition-colors duration-200 w-full`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          {isEmailSent
                            ? "Enviar Nuevamente"
                            : "Enviar por Email"}
                        </>
                      )}
                    </motion.button>

                    {canCloseModal ? (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowModal(false)}
                        className="mt-2 text-gray-400 hover:text-gray-200 text-sm font-medium"
                      >
                        Cerrar
                      </motion.button>
                    ) : (
                      <p className="mt-3 text-sm text-center text-amber-400">
                        Debes imprimir o enviar por email el contrato antes de
                        cerrar
                      </p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Footer decorativo */}
        <div className="w-full bg-gradient-to-r from-[#4A90E2] to-[#9370DB] h-1 mt-auto"></div>
      </main>
    </>
  );
}
