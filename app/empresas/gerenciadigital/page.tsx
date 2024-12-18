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
      setShowBackToTop(window.scrollY > 100);
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0C1D] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-3 sm:py-4 mb-4 space-x-3 sm:space-x-4 bg-[#1A1A2E]/80 backdrop-blur-lg shadow-glow rounded-full w-full max-w-3xl mx-auto border border-[#4A90E2]/20">
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

      <main ref={mainRef} className="pt-48 md:pt-56 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="text-center mb-24" {...fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              <span className="text-[#4A90E2] drop-shadow-glow">INNOVACIÓN</span>
              <span className="text-[#FF5C5C] ml-2">EMPRESARIAL</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Como experto en transformación digital, te guío en el camino hacia una 
              revolución empresarial que maximizará tu potencial en la era digital.
              Mi misión es convertir tu visión en una realidad tecnológica tangible.
            </p>
          </motion.div>

          <motion.div className="mb-24" {...fadeInUp}>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=1000"
                alt="Mi visión de la Innovación Empresarial en acción"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/80 to-[#FF5C5C]/80 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                  Juntos Crearemos tu Futuro Digital
                </h2>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            initial="initial"
            animate="animate"
          >
            <motion.div {...fadeInUp}>
              <FeatureCard
                icon={<Brain className="h-6 w-6" />}
                title="Mi Enfoque en IA"
                description="Implemento soluciones de IA personalizadas que transformarán tus procesos de negocio, permitiéndote tomar decisiones más inteligentes y predictivas."
                color="[#4A90E2]"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <FeatureCard
                icon={<Code className="h-6 w-6" />}
                title="Desarrollo Estratégico"
                description="Creo software a medida que no solo resuelve tus desafíos actuales, sino que se adapta y escala con tu crecimiento futuro."
                color="[#FF5C5C]"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <FeatureCard
                icon={<BarChart2 className="h-6 w-6" />}
                title="Análisis de Datos"
                description="Transformo tus datos en insights accionables, construyendo una base sólida para tu toma de decisiones estratégicas."
                color="[#00F5D4]"
              />
            </motion.div>
          </motion.div>

          <motion.div className="mb-24" {...fadeInUp}>
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#4A90E2]">Mi Metodología de Innovación</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1" className="border-[#4A90E2]/20">
                <AccordionTrigger className="text-[#4A90E2]">Transformación Cultural</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Mi enfoque va más allá de la tecnología: construyo una cultura de innovación 
                  en tu organización. Implemento programas de cambio que empoderan a tu equipo, 
                  fomentando la colaboración digital y el pensamiento innovador.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-[#FF5C5C]/20">
                <AccordionTrigger className="text-[#FF5C5C]">Desarrollo de Talento Digital</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Diseño programas de capacitación inmersivos y personalizados, utilizando las últimas 
                  tecnologías en e-learning y realidad virtual. Mi objetivo es potenciar las habilidades 
                  digitales de tu equipo, preparándolos para liderar en la era digital.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-[#00F5D4]/20">
                <AccordionTrigger className="text-[#00F5D4]">Estrategia de Ventas Digital</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Mi expertise en ventas digitales revolucionará tu approach comercial. 
                  Implemento estrategias de marketing digital basadas en datos, automatización 
                  inteligente y experiencia del cliente para maximizar tus conversiones.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div className="mb-24" {...fadeInUp}>
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#4A90E2]">Mis Casos de Éxito</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-[#1A1A2E] border-[#4A90E2]/20">
                <CardHeader>
                  <CardTitle className="text-[#4A90E2] flex items-center">
                    <Globe className="h-6 w-6 mr-2" />
                    Revolución E-commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Lideré la transformación digital de un minorista tradicional hacia un 
                    líder del e-commerce, logrando un incremento del 200% en ventas digitales 
                    y mejorando la eficiencia operativa en un 50% a través de mi metodología 
                    de innovación integral.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1A2E] border-[#FF5C5C]/20">
                <CardHeader>
                  <CardTitle className="text-[#FF5C5C] flex items-center">
                    <Briefcase className="h-6 w-6 mr-2" />
                    Transformación Financiera
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Desarrollé e implementé una estrategia de digitalización bancaria que 
                    redujo costos operativos en un 40% y elevó la satisfacción del cliente 
                    en un 80%, mediante soluciones móviles innovadoras y servicios digitales 
                    de próxima generación.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div className="text-center mb-24" {...fadeInUp}>
            <h2 className="text-3xl font-semibold mb-6 text-[#4A90E2]">Comienza Tu Viaje Digital Conmigo</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Mi compromiso es guiarte en cada paso de tu transformación digital. 
              Juntos, crearemos una estrategia única que llevará tu negocio al siguiente nivel.
            </p>
            <Button className="bg-gradient-to-r from-[#4A90E2] to-[#FF5C5C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-[#3A7BC8] hover:to-[#FF3C3C] transition-all duration-300 shadow-glow">
              Agenda tu Consultoría Estratégica
            </Button>
          </motion.div>

          <motion.div className="mb-24" {...fadeInUp}>
            <div className="relative h-[200px] sm:h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=300&width=1000"
                alt="Mi Equipo de Innovación Digital"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A2E]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-white text-xl font-semibold">
                  Mi equipo de expertos y yo estamos listos para potenciar tu éxito digital
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