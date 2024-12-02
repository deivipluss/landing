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
  { href: "/", icon: <FaCogs className="transition-transform duration-300 group-hover:rotate-180" />, label: "Home" },
  { href: "#solutions", icon: <FaBrain className="transition-transform duration-300 group-hover:scale-110" />, label: "Soluciones" },
  { href: "/novedades-tech", icon: <FaRocket className="transition-transform duration-300 group-hover:scale-110" />, label: "Tech News" },
  { href: "/contacto", icon: <FaWhatsapp className="transition-transform duration-300 group-hover:rotate-12" />, label: "Contacto" },
];

const countries = [
  { code: "pe", name: "Perú" },
  { code: "us", name: "Estados Unidos" },
  { code: "es", name: "España" },
  { code: "mx", name: "México" },
  { code: "ar", name: "Argentina" },
  // Agrega más países según sea necesario
];

const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState({
    name: "",
    whatsapp: "+51",
    selectedService: "",
    searchQuery: "",
    filteredCountries: countries,
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

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(lowercasedQuery)
    );
    setFormState((prevState) => ({
      ...prevState,
      searchQuery: query,
      filteredCountries: filtered,
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
        searchQuery: "",
        filteredCountries: countries,
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
          <label className="block text-sm font-medium text-gray-300 mb-1">Buscar País</label>
          <input
            type="text"
            placeholder="Buscar país..."
            value={formState.searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="mt-1 p-3 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          />
          <div className="mt-2 max-h-40 overflow-y-auto bg-gray-700 rounded-md p-2">
            {formState.filteredCountries.map((country) => (
              <div
                key={country.code}
                className="text-white cursor-pointer p-2 hover:bg-gray-600 rounded-md"
                onClick={() => handleInputChange("whatsapp", `+${country.code}`)}
              >
                {country.name}
              </div>
            ))}
          </div>
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
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden relative">
      <header className="flex justify-center py-6 mt-8 space-x-6 bg-[#1A1A2E]/80 backdrop-blur-lg shadow-glow rounded-full w-[90%] max-w-3xl mx-auto border border-[#4A90E2]/20">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col items-center cursor-pointer"
          >
            <div
              className={`text-2xl mx-3 text-[#FF5C5C] group-hover:text-[#4A90E2] transition-all duration-300`}
            >
              {item.icon}
            </div>
            <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors duration-300">
              {item.label}
            </span>
          </Link>
        ))}
      </header>

      <main className="flex-grow flex justify-center items-center p-4 md:p-8">
        <Suspense fallback={<div>Cargando...</div>}>
          <ContactForm />
        </Suspense>
      </main>

      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. Todos los derechos reservados
      </footer>
    </div>
  );
};

export default Contact;
