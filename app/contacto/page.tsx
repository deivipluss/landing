"use client";

import React, { useState, useEffect, Suspense } from "react";
import { FaCogs, FaBrain, FaRocket, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

const navItems = [
  { href: "/", icon: <FaCogs />, label: "Home" },
  { href: "#solutions", icon: <FaBrain />, label: "Soluciones" },
  { href: "/novedades-tech", icon: <FaRocket />, label: "Tech News" },
  { href: "/contacto", icon: <FaWhatsapp />, label: "Contacto" },
];

const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState({
    name: "",
    whatsapp: "+51",
    selectedService: "",
  });

  useEffect(() => {
    const serviceParam = searchParams.get("servicio");
    if (serviceParam && serviceParam in serviceLabels) {
      setFormState((prevState) => ({
        ...prevState,
        selectedService: serviceParam,
      }));
    }
  }, [searchParams]);

  const handleInputChange = (name: string, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formState);
      alert("Formulario enviado exitosamente");
      setFormState({
        name: "",
        whatsapp: "+51",
        selectedService: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el formulario");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-[700px] bg-[#1A1A2E] p-8 rounded-lg shadow-glow"
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="mt-1 p-3 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="selectedService" className="block text-sm font-medium text-gray-300">
            Servicio de Interés
          </label>
          <select
            id="selectedService"
            name="selectedService"
            value={formState.selectedService}
            onChange={(e) => handleInputChange("selectedService", e.target.value)}
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
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Número WhatsApp</label>
          <PhoneInput
            country={"pe"}
            value={formState.whatsapp}
            onChange={(value) => handleInputChange("whatsapp", value)}
            inputClass="text-black"
            buttonClass="bg-gray-800 text-white"
            containerClass="mt-1 rounded-md bg-gray-800"
            inputStyle={{
              width: "100%",
              backgroundColor: "#1A1A2E",
              color: "#FFFFFF",
              border: "1px solid #4A90E2",
              borderRadius: "8px",
            }}
            buttonStyle={{
              backgroundColor: "#4A90E2",
              color: "#FFFFFF",
            }}
            dropdownStyle={{
              backgroundColor: "#1A1A2E",
              color: "#FFFFFF",
              scrollbarColor: "#4A90E2 transparent",
              scrollbarWidth: "thin",
            }}
            localization={{
              search: "Buscar",
            }}
            enableSearch
            searchClass="bg-gray-700 text-white p-2 rounded-md"
            searchPlaceholder="Buscar"
          />
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

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0C1D] flex flex-col overflow-hidden relative">
      <header className="flex justify-center py-6 mt-8 space-x-6 bg-[#1A1A2E]/80 shadow-glow rounded-full w-[90%] max-w-3xl mx-auto">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="group">
            <div className="text-2xl text-[#FF5C5C]">{item.icon}</div>
          </Link>
        ))}
      </header>
      <main className="flex-grow flex justify-center items-center">
        <Suspense fallback={<div>Cargando...</div>}>
          <ContactForm />
        </Suspense>
      </main>
    </div>
  );
};

export default Contact;
