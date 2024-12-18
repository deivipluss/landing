"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, BarChart2, Globe, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { 
  FaCogs, 
  FaBrain, 
  FaRocket,
  FaWhatsapp,
  FaArrowUp
} from "react-icons/fa";

import { useRouter } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const navItems = [
  { 
    href: "/", 
    icon: <FaCogs className="transition-transform duration-300 group-hover:rotate-180" />, 
    label: "Home" 
  },
  { 
    href: "#solutions", 
    icon: <FaBrain className="transition-transform duration-300 group-hover:scale-110" />, 
    label: "Soluciones" 
  },
  { 
    href: "/novedades-tech", 
    icon: <FaRocket className="transition-transform duration-300 group-hover:scale-110" />, 
    label: "Tech News" 
  },
  { 
    href: "/contacto", 
    icon: <FaWhatsapp className="transition-transform duration-300 group-hover:rotate-12" />, 
    label: "Contacto" 
  },
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; color: string }> = ({ icon, title, description, color }) => (
  <Card className={`bg-[#1A1A2E] border-${color}/20 hover:border-${color} transition-all duration-300`}>
    <CardHeader>
      <CardTitle className={`flex items-center text-${color}`}>
        {icon}
        <span className="ml-2">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-300">{description}</CardDescription>
    </CardContent>
  </Card>
);

const GerenciaDigital: React.FC = () => {
  const router = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('header');
      if (nav) {
        setShowBackToTop(window.scrollY > nav.clientHeight);
      }
      if (mainRef.current) {
        const { bottom } = mainRef.current.getBoundingClientRect();
        setShowFooter(bottom <= window.innerHeight);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-3 sm:py-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12 space-x-3 sm:space-x-4 bg-[#1A1A2E]/80 backdrop-blur-lg shadow-glow rounded-full w-full max-w-3xl mx-auto border border-[#4A90E2]/20">
            {navItems.map((item) => (
              <div 
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="group flex flex-col items-center cursor-pointer"
              >
                <div className="text-xl sm:text-2xl mx-2 sm:mx-3 text-[#FF5C5C] group-hover:text-[#4A90E2] transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] sm:text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors duration-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main ref={mainRef} className="pt-40 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#4A90E2] drop-shadow-glow">INNOVACIÓN</span>
              <span className="text-[#FF5C5C] ml-2">EMPRESARIAL</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformación Digital & Estrategia Empresarial
            </p>
          </motion.div>

          <motion.div className="mb-24" {...fadeInUp}>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=1000"
                alt="Innovación Empresarial en acción"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/80 to-[#FF5C5C]/80 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                  Impulse su Negocio al Futuro Digital
                </h2>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            initial="initial"
            animate="animate"
          >
            <motion.div {...fadeInUp}>
              <FeatureCard
                icon={<Brain className="h-6 w-6" />}
                title="IA Avanzada"
                description="Integre inteligencia artificial en sus procesos para toma de decisiones más inteligentes y eficientes."
                color="[#4A90E2]"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <FeatureCard
                icon={<Code className="h-6 w-6" />}
                title="Desarrollo de Software"
                description="Soluciones de software personalizadas para optimizar sus operaciones y mejorar la experiencia del cliente."
                color="[#FF5C5C]"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <FeatureCard
                icon={<BarChart2 className="h-6 w-6" />}
                title="Ciencia de Datos"
                description="Aproveche el poder de sus datos para obtener insights valiosos y tomar decisiones basadas en evidencia."
                color="[#00F5D4]"
              />
            </motion.div>
          </motion.div>

          <motion.div className="mb-24" {...fadeInUp}>
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#4A90E2]">Pilares de Nuestra Innovación</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1" className="border-[#4A90E2]/20">
                <AccordionTrigger className="text-[#4A90E2]">Cultura Digital</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Fomentamos una cultura de innovación y adaptabilidad digital en su organización. 
                  Nuestros programas de capacitación y cambio cultural preparan a su equipo para 
                  prosperar en la era digital, mejorando la colaboración y la eficiencia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-[#FF5C5C]/20">
                <AccordionTrigger className="text-[#FF5C5C]">Entrenamiento del Recurso Humano</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Ofrecemos sistemas de entrenamiento avanzados para su personal, utilizando 
                  tecnologías de e-learning y realidad virtual. Nuestros programas personalizados 
                  aseguran que su equipo esté siempre a la vanguardia de las habilidades digitales.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-[#00F5D4]/20">
                <AccordionTrigger className="text-[#00F5D4]">Experiencia en Ventas Digitales</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Con nuestra amplia experiencia en ventas digitales, transformamos su estrategia 
                  de comercialización. Implementamos técnicas de marketing digital, análisis de datos 
                  y automatización para maximizar sus conversiones y retención de clientes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div className="mb-24" {...fadeInUp}>
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#4A90E2]">Casos de Éxito</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-[#1A1A2E] border-[#4A90E2]/20">
                <CardHeader>
                  <CardTitle className="text-[#4A90E2] flex items-center">
                    <Globe className="h-6 w-6 mr-2" />
                    Transformación E-commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Implementamos una estrategia de innovación completa para una empresa 
                    minorista tradicional, resultando en un aumento del 200% en ventas en línea 
                    y una mejora del 50% en la eficiencia operativa.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1A2E] border-[#FF5C5C]/20">
                <CardHeader>
                  <CardTitle className="text-[#FF5C5C] flex items-center">
                    <Briefcase className="h-6 w-6 mr-2" />
                    Innovación en Servicios Financieros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Ayudamos a un banco tradicional a digitalizar sus procesos, resultando en 
                    una reducción del 40% en costos operativos y un aumento del 80% en la 
                    satisfacción del cliente a través de nuevas aplicaciones móviles y servicios en línea.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl font-semibold mb-6 text-[#4A90E2]">Comience su Transformación Digital Hoy</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Descubra cómo nuestra estrategia de innovación puede revolucionar su negocio. 
              Estamos listos para crear una experiencia digital única para su organización.
            </p>
            <Button className="bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-[#3A7BC8] hover:to-[#FF3C3C] transition-all duration-300 shadow-glow">
              Solicitar Consulta Personalizada
            </Button>
          </motion.div>

          <motion.div className="mb-16" {...fadeInUp}>
            <div className="relative h-[200px] sm:h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=300&width=1000"
                alt="Equipo de Innovación Digital"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A2E]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-white text-xl font-semibold">
                Nuestro equipo de expertos está listo para impulsar su éxito digital
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {showBackToTop && (
        <motion.button
          className="fixed bottom-16 sm:bottom-24 right-4 sm:right-8 bg-[#4A90E2] text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-50"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={handleBackToTop}
        >
          <FaArrowUp className="text-lg sm:text-xl" />
        </motion.button>
      )}

      {showFooter && (
        <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 sm:py-8 text-gray-400 text-xs sm:text-sm mt-12 sm:mt-16 border-t border-[#4A90E2]/20 w-full">
          © 2024 - Deivipluss. Todos los derechos reservados.
        </footer>
      )}

      <style jsx global>{`
        .drop-shadow-glow {
          text-shadow: 0 0 15px rgba(74, 144, 226, 0.5);
        }

        .shadow-glow {
          box-shadow: 0 0 25px rgba(74, 144, 226, 0.3);
        }
      `}</style>
    </div>
  );
};

export default GerenciaDigital;