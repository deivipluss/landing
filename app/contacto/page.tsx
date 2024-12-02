"use client";

import React, { useState, useEffect, Suspense } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";

const serviceLabels = {
  branding: "Branding Empresarial",
  marcaPersonal: "Marca Personal",
  entrenamiento: "Entrenamiento Digital",
  communityManager: "Community Management",
  contenidoDigital: "Contenido Digital",
  ecommerce: "E-commerce",
  iaNegocios: "IA para Negocios",
  onlyfans: "OnlyFans Management",
};

const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    selectedService: "",
  });

  const [phoneValue, setPhoneValue] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("servicio");
    if (serviceParam && serviceParam in serviceLabels) {
      setFormState((prevState) => ({
        ...prevState,
        selectedService: serviceParam,
      }));
    }
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    setPhoneValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", { ...formState, phone: phoneValue });

      alert("Mensaje enviado exitosamente");
      setFormState({
        name: "",
        phone: "",
        selectedService: "",
      });
      setPhoneValue("");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el mensaje");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-[700px] bg-[#1A1A2E] p-8 rounded-lg shadow-glow"
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Contáctanos
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300"
          >
            Número WhatsApp
          </label>
          <PhoneInput
            country={"pe"} // Perú predeterminado
            value={phoneValue}
            onChange={handlePhoneChange}
            containerClass="mt-1"
            inputClass="rounded-md w-full bg-gray-800 text-white"
            buttonClass="bg-gray-700"
            dropdownStyle={{
              backgroundColor: "#1A1A2E",
              color: "#FFFFFF",
              maxHeight: "200px",
              overflow: "auto",
            }}
            enableAreaCodes={true}
            preferredCountries={[
              "pe", "ar", "bo", "br", "cl", "co", "ec", "py", "uy", "ve", // Sudamérica
              "us", "ca", // Norteamérica
              "mx", "gt", "hn", "ni", "pa", "cr", "sv", // Centroamérica
              "es", "fr", "de", "it", "pt", // Europa
              "au", "in", "jp", "cn", // Resto del mundo
            ]}
            localization={{
              pe: "Perú",
              ar: "Argentina",
              bo: "Bolivia",
              br: "Brasil",
              cl: "Chile",
              co: "Colombia",
              ec: "Ecuador",
              py: "Paraguay",
              uy: "Uruguay",
              ve: "Venezuela",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="selectedService"
            className="block text-sm font-medium text-gray-300"
          >
            Servicio de Interés
          </label>
          <select
            id="selectedService"
            name="selectedService"
            value={formState.selectedService}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          >
            <option value="">Selecciona un servicio</option>
            {Object.entries(serviceLabels).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-[#4A90E2] text-white p-3 rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          Enviar
        </motion.button>
      </form>
    </motion.div>
  );
};

const Page: React.FC = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ContactForm />
    </Suspense>
  );
};

export default Page;
