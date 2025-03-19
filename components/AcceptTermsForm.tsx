"use client";

import React, { useState } from "react";

interface AcceptTermsFormProps {
  onAccept: (value: boolean) => void;
}

const AcceptTermsForm: React.FC<AcceptTermsFormProps> = ({ onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isChecked) {
      setError("Debes aceptar los términos y condiciones para continuar.");
      return;
    }

    if (!formData.name || !formData.email) {
      setError("Por favor completa todos los campos obligatorios.");
      return;
    }

    // Aquí puedes implementar la lógica para enviar los datos a tu backend o API
    console.log("Formulario enviado:", formData);

    // Simulación de envío exitoso
    setFormSubmitted(true);
    onAccept(true);
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Tus datos para el contrato</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-all duration-200"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Empresa/Organización
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nombre de tu empresa (opcional)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Tu número de teléfono (opcional)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex items-start p-4 mt-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
            />
          </div>
          <label htmlFor="terms" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            He leído y acepto los términos y condiciones de este contrato <span className="text-red-500">*</span>
          </label>
        </div>

        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400 text-sm rounded">
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
              ? "bg-green-600 hover:bg-green-700 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }`}
          disabled={formSubmitted}
        >
          {formSubmitted ? (
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
        
        {!formSubmitted && (
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
            Al hacer clic en &ldquo;Firmar y aceptar&rdquo;, confirmas que has leído y aceptas los términos y condiciones descritos en este documento.
          </p>
        )}
      </form>
    </div>
  );
};

export default AcceptTermsForm;
