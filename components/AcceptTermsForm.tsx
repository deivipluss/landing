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
    company: ""
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
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Empresa/Organización
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div className="flex items-start mb-4">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
            />
          </div>
          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            He leído y acepto los términos y condiciones <span className="text-red-500">*</span>
          </label>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
            formSubmitted
              ? "bg-green-600 hover:bg-green-700 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }`}
          disabled={formSubmitted}
        >
          {formSubmitted ? "Términos Aceptados" : "Aceptar Términos y Condiciones"}
        </button>
      </form>
    </div>
  );
};

export default AcceptTermsForm;
