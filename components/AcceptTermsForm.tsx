"use client";

import React, { useState, useEffect } from "react";

interface AcceptTermsFormProps {
  onAccept: (value: boolean) => void;
  isAlreadyAccepted?: boolean; // Nuevo prop para saber si ya fue aceptado
}

const AcceptTermsForm: React.FC<AcceptTermsFormProps> = ({ 
  onAccept, 
  isAlreadyAccepted = false 
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    dniOrRuc: "" // Mantener solo los campos necesarios
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Efecto para cargar datos guardados y estado de aceptación
  useEffect(() => {
    // Recuperar datos del formulario si ya fue aceptado anteriormente
    if (isAlreadyAccepted) {
      setFormSubmitted(true);
      setIsChecked(true);
      
      // Cargar datos guardados en localStorage
      const savedName = localStorage.getItem('contractUserName');
      const savedEmail = localStorage.getItem('contractUserEmail');
      const savedCompany = localStorage.getItem('contractUserCompany');
      const savedPhone = localStorage.getItem('contractUserPhone');
      const savedDniOrRuc = localStorage.getItem('contractUserDniOrRuc');
      
      // Actualizar el estado del formulario con los datos guardados
      setFormData({
        name: savedName || '',
        email: savedEmail || '',
        company: savedCompany || '',
        phone: savedPhone || '',
        dniOrRuc: savedDniOrRuc || ''
      });
    }
  }, [isAlreadyAccepted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // No permitir cambios si el formulario ya fue enviado
    if (formSubmitted) return;
    
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // No permitir cambios si el formulario ya fue enviado
    if (formSubmitted) return;
    
    setIsChecked(e.target.checked);
  };

  // Función para enviar datos a Google Sheets usando el proxy API
  const sendToGoogleSheets = async (data: typeof formData) => {
    try {
      console.log('Enviando datos al proxy API:', { ...data, accepted: isChecked }); // Verificar datos enviados
      
      const response = await fetch('/api/google-sheets-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, accepted: isChecked }) // Incluir "accepted"
      });
      
      const responseData = await response.json();
      console.log('Respuesta del proxy API:', responseData);
      
      if (response.ok) {
        console.log('Datos enviados correctamente a Google Sheets mediante proxy');
        return true;
      } else {
        console.error('Error al enviar datos mediante proxy:', responseData.error);
        throw new Error(responseData.error || 'Error al enviar datos mediante proxy');
      }
    } catch (error) {
      console.error('Error al enviar datos a Google Sheets:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // No procesar si el formulario ya fue enviado
    if (formSubmitted) return;
    
    setError("");
    setLoading(true);

    if (!isChecked) {
      setError("Debes aceptar los términos y condiciones para continuar.");
      setLoading(false);
      return;
    }

    if (!formData.name || !formData.email) {
      setError("Por favor completa todos los campos obligatorios.");
      setLoading(false);
      return;
    }

    // Guardar datos en localStorage para poder accederlos al imprimir o enviar por email
    localStorage.setItem('contractUserName', formData.name);
    localStorage.setItem('contractUserEmail', formData.email);
    localStorage.setItem('contractUserCompany', formData.company || '');
    localStorage.setItem('contractUserPhone', formData.phone || '');
    localStorage.setItem('contractUserDniOrRuc', formData.dniOrRuc || '');
    localStorage.setItem('contractAcceptedDate', new Date().toISOString());

    // Enviar datos a Google Sheets
    try {
      const success = await sendToGoogleSheets(formData);
      
      if (success) {
        // Simulación de envío exitoso
        setFormSubmitted(true);
        onAccept(true);
      } else {
        setError("Hubo un problema al procesar tu solicitud. Por favor intenta nuevamente.");
      }
    } catch (err) {
      console.error("Error al enviar datos:", err);
      setError("Error al enviar datos. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-4 text-[#E1E1E1] font-poppins">Tus datos para el contrato</h3>
      
      <form onSubmit={handleSubmit} className={`space-y-4 ${formSubmitted ? 'opacity-90 pointer-events-none' : ''}`}>
        {/* Si el formulario ya fue enviado, mostrar un overlay informativo */}
        {formSubmitted && (
          <div className="absolute inset-0 bg-[#1A1A2E] bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-green-900/30 p-4 rounded-lg shadow-lg border-l-4 border-green-500 max-w-sm">
              <p className="flex items-center text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Contrato firmado correctamente
              </p>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
              Nombre completo <span className="text-[#FF5C5C]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="w-full p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
              Correo electrónico <span className="text-[#FF5C5C]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="w-full p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-200"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dniOrRuc" className="block mb-2 text-sm font-medium text-gray-300">
              DNI/RUC <span className="text-[#FF5C5C]">*</span>
            </label>
            <input
              type="text"
              id="dniOrRuc"
              name="dniOrRuc"
              value={formData.dniOrRuc}
              onChange={handleChange}
              placeholder="Tu DNI o RUC"
              className="w-full p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-300">
              Empresa/Organización
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nombre de tu empresa (opcional)"
              className="w-full p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Tu número de teléfono (opcional)"
              className="w-full p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex items-start p-4 mt-2 bg-gray-800/30 rounded-lg border border-gray-700">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border border-gray-700 rounded bg-gray-800 focus:ring-3 focus:ring-[#4A90E2]"
              disabled={formSubmitted} // Deshabilitar si ya fue aceptado
            />
          </div>
          <label htmlFor="terms" className={`ml-3 text-sm font-medium ${formSubmitted ? 'text-green-500' : 'text-gray-300'}`}>
            He leído y acepto los términos y condiciones de este contrato <span className="text-[#FF5C5C]">*</span>
          </label>
        </div>

        {error && (
          <div className="p-3 bg-red-900/20 border-l-4 border-[#FF5C5C] text-red-400 text-sm rounded">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          </div>
        )}

        <button
          type="submit"
          className={`w-full text-white font-medium rounded-lg text-base px-6 py-4 text-center flex justify-center items-center transition-all duration-200 ${
            formSubmitted
              ? "bg-green-600 hover:bg-green-700 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-default"
              : "bg-[#4A90E2] hover:bg-[#4A90E2]/80 focus:ring-[#4A90E2]/30"
          }`}
          disabled={formSubmitted || loading}
        >
          {loading ? (
            <>
              <svg className="w-5 h-5 mr-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Procesando...
            </>
          ) : formSubmitted ? (
            <>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              Términos Aceptados
            </>
          ) : (
            "Firmar y aceptar el contrato"
          )}
        </button>
        
        {!formSubmitted ? (
          <p className="text-xs text-center text-gray-400 mt-2">
            Al hacer clic en &ldquo;Firmar y aceptar&rdquo;, confirmas que has leído y aceptas los términos y condiciones descritos en este documento.
          </p>
        ) : (
          <p className="text-xs text-center text-green-500 mt-2">
            Has aceptado este contrato el día {new Date().toLocaleDateString('es-ES')}. Puedes imprimir o enviar el contrato por email en cualquier momento.
          </p>
        )}
      </form>
    </div>
  );
};

export default AcceptTermsForm;
