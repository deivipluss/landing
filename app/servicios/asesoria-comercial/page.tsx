"use client";
import React, { useState, useRef, useEffect } from "react";
import { 
  FaHandshake, 
  FaChartLine, 
  FaUsers, 
  FaArrowRight,
  FaCheck,
  FaLightbulb,
  FaComments,
  FaRegLightbulb,
  FaChartPie,
  FaRegChartBar,
  FaCog,
  FaBullseye,
  FaRegComments,
  FaMapMarkedAlt,
  FaRocket,
  FaPhoneAlt
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";

export default function AsesoriaComercialPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });
  
  // Parallax effect for hero section
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);

  // Servicios de Asesoría Comercial
  const serviciosAsesoria = [
    {
      title: "Diagnóstico Comercial",
      description: "Analizo en profundidad tu estrategia actual, procesos de venta y equipo comercial para identificar oportunidades de mejora inmediatas.",
      icon: <FaChartPie className="text-xl" />,
      features: [
        "Revisión de embudo de ventas",
        "Análisis de métricas clave",
        "Evaluación de procesos",
        "Auditoría de comunicación"
      ]
    },
    {
      title: "Asesoría Estratégica",
      description: "Te acompaño como asesor externo para implementar mejoras específicas en tu área comercial y tomar decisiones basadas en datos.",
      icon: <FaLightbulb className="text-xl" />,
      features: [
        "Sesiones estratégicas personalizadas",
        "Definición de KPIs avanzados",
        "Elaboración de playbooks de venta",
        "Evaluación de competitividad"
      ]
    },
    {
      title: "Coaching Ejecutivo",
      description: "Trabajo directamente con directores y gerentes comerciales para potenciar su liderazgo y capacidad de desarrollar equipos de alto rendimiento.",
      icon: <FaComments className="text-xl" />,
      features: [
        "Sesiones one-on-one",
        "Desarrollo de habilidades directivas",
        "Gestión de equipos comerciales",
        "Resolución de desafíos específicos"
      ]
    },
    {
      title: "Interim Management",
      description: "Asumo temporalmente roles de dirección comercial para implementar cambios estructurales o cubrir posiciones estratégicas durante transiciones.",
      icon: <FaUsers className="text-xl" />,
      features: [
        "Dirección comercial temporal",
        "Implementación de cambios",
        "Reestructuración de equipos",
        "Transferencia de conocimiento"
      ]
    }
  ];

  // Metodologías aplicadas
  const metodologias = [
    {
      title: "Sales Performance Analysis™",
      description: "Metodología propietaria de diagnóstico que combina análisis cuantitativo y cualitativo para identificar los puntos críticos de mejora.",
      icon: <FaRegChartBar className="text-xl" />
    },
    {
      title: "Strategic Sales Framework",
      description: "Marco estructurado para alinear la estrategia comercial con los objetivos de negocio y potenciar áreas de oportunidad específicas.",
      icon: <FaBullseye className="text-xl" />
    },
    {
      title: "Leadership Amplifier System",
      description: "Sistema de desarrollo de liderazgo comercial que potencia las capacidades directivas para impulsar equipos de alto rendimiento.",
      icon: <FaUsers className="text-xl" />
    },
    {
      title: "Revenue Architecture",
      description: "Diseño integral de la arquitectura de generación de ingresos, desde captación hasta fidelización y expansión de clientes.",
      icon: <FaCog className="text-xl" />
    },
    {
      title: "Decision Intelligence Framework",
      description: "Marco para la toma de decisiones comerciales basadas en datos que maximiza el retorno de la inversión comercial.",
      icon: <FaRegLightbulb className="text-xl" />
    }
  ];

  // Proceso de asesoría
  const procesoAsesoria = [
    {
      title: "Evaluación Inicial",
      description: "Realizo un análisis profundo de tu situación actual para entender completamente el contexto, desafíos y oportunidades específicas.",
      icon: <FaRegChartBar />,
      color: "emerald"
    },
    {
      title: "Plan Personalizado",
      description: "Diseño un plan de acción a medida basado en tus necesidades concretas, con objetivos claros y métricas de seguimiento.",
      icon: <FaMapMarkedAlt />,
      color: "teal"
    },
    {
      title: "Implementación Guiada",
      description: "Te acompaño durante todo el proceso de implementación, asegurando que cada cambio se aplique efectivamente y se adapte según sea necesario.",
      icon: <FaCog />,
      color: "green"
    },
    {
      title: "Optimización Continua",
      description: "Evalúo constantemente los resultados para realizar ajustes que maximicen el impacto y consoliden las mejoras a largo plazo.",
      icon: <FaChartLine />,
      color: "emerald"
    }
  ];

  // Beneficios de la asesoría
  const beneficios = [
    {
      title: "Visión Externa Experta",
      description: "Aporto una perspectiva nueva e imparcial, identificando puntos ciegos que desde dentro de la organización pueden pasar desapercibidos.",
      icon: <FaRegLightbulb />
    },
    {
      title: "Decisiones Basadas en Datos",
      description: "Te ayudo a implementar sistemas para tomar decisiones comerciales fundamentadas en datos concretos, no en intuiciones.",
      icon: <FaChartPie />
    },
    {
      title: "Implementación Acelerada",
      description: "Acorto drásticamente la curva de aprendizaje al aportar metodologías probadas y evitar errores comunes que cuestan tiempo y dinero.",
      icon: <FaRocket />
    },
    {
      title: "Transferencia de Conocimiento",
      description: "No solo resuelvo problemas actuales, sino que capacito a tu equipo para mantener y mejorar los resultados a largo plazo.",
      icon: <FaRegComments />
    }
  ];

  // Casos de éxito (simplificados para el ejemplo)
  const casosExito = [
    {
      empresa: "Empresa SaaS B2B",
      resultado: "Incremento del 43% en tasa de conversión de oportunidades a ventas en 3 meses",
      testimonio: "La asesoría comercial transformó nuestra forma de entender las ventas empresariales. Ahora tenemos procesos claros y medibles que nos dan total visibilidad sobre nuestro pipeline."
    },
    {
      empresa: "Retail Especializado",
      resultado: "Reducción del 38% en el ciclo de venta y aumento del 27% en ticket promedio",
      testimonio: "El enfoque sistemático y la metodología de trabajo han sido clave para profesionalizar nuestra área comercial y escalar nuestras ventas de manera sostenible."
    }
  ];

  // Paquetes de servicio
  const paquetes = [
    {
      title: "Asesoría Puntual",
      price: "Desde $2,490",
      duracion: "1 mes",
      features: [
        "Diagnóstico comercial inicial",
        "3 sesiones de asesoría (2h c/u)",
        "1 informe de recomendaciones",
        "Acceso a herramientas básicas",
        "1 sesión de seguimiento (30 días)"
      ],
      color: "emerald",
      popular: false
    },
    {
      title: "Transformación Comercial",
      price: "Desde $4,990",
      duracion: "3 meses",
      features: [
        "Diagnóstico comercial profundo",
        "8 sesiones de asesoría (2h c/u)",
        "Acompañamiento en implementación",
        "Creación de playbook comercial",
        "Acceso a suite completa de herramientas",
        "Evaluación de equipo comercial",
        "Informes de progreso mensuales",
        "3 meses de soporte por email"
      ],
      color: "teal",
      popular: true
    },
    {
      title: "Asesor Comercial Externo",
      price: "Desde $2,490/mes",
      duracion: "Mínimo 6 meses",
      features: [
        "Todo lo de Transformación Comercial",
        "Sesiones semanales recurrentes",
        "Participación en reuniones estratégicas",
        "Desarrollo de liderazgo comercial",
        "Consultas ilimitadas por email/chat",
        "Revisión trimestral de estrategia",
        "Acceso preferente para consultas urgentes",
        "Programa de mejora continua"
      ],
      color: "green",
      popular: false
    }
  ];

  const ServiceCard = ({ 
    service, 
    active, 
    onClick, 
    index 
  }: {
    service: typeof serviciosAsesoria[0];
    active: boolean;
    onClick: () => void;
    index: number;
  }) => (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 w-full ${
        active
          ? "bg-gradient-to-r from-emerald-600/30 to-teal-700/30 border border-emerald-500/30 text-white shadow-lg" 
          : "text-gray-400 hover:bg-emerald-900/20 hover:text-gray-300 hover:shadow"
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white">
        {service.icon}
      </div>
      <span className="hidden md:block font-medium">{service.title}</span>
    </motion.button>
  );

  // Componente de tarjeta para paquetes
  const PackageCard = ({ 
    title, 
    price, 
    duracion,
    features, 
    color, 
    popular 
  }: { 
    title: string;
    price: string;
    duracion: string; 
    features: string[]; 
    color: string;
    popular: boolean;
  }) => {
    // Define color classes mapping
    const colorVariants = {
      emerald: {
        bg: "from-emerald-500 to-emerald-700",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        hover: "hover:shadow-emerald-500/20"
      },
      teal: {
        bg: "from-teal-500 to-emerald-600",
        border: "border-teal-500/30",
        text: "text-teal-400",
        hover: "hover:shadow-teal-500/20"
      },
      green: {
        bg: "from-green-500 to-teal-600",
        border: "border-green-500/30",
        text: "text-green-400",
        hover: "hover:shadow-green-500/20"
      }
    };
    
    // Get the correct variant based on the color prop
    const colorClasses = colorVariants[color as keyof typeof colorVariants];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl overflow-hidden shadow-xl ${
          popular ? `ring-2 ring-${color}-500/30 ${colorClasses.border}` : 'border border-emerald-500/20'
        } ${colorClasses.hover} hover:-translate-y-1 transition-all duration-300`}
      >
        {popular && (
          <div className={`bg-gradient-to-r ${colorClasses.bg} text-center py-2`}>
            <p className="text-white text-sm font-medium">RECOMENDADO</p>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorClasses.bg} mb-1`}>
            {price}
          </div>
          <div className="text-gray-400 text-sm mb-4">
            {duracion}
          </div>
          
          <div className="space-y-3 mb-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <FaCheck className={`${colorClasses.text} mr-2 mt-1 flex-shrink-0`} />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="px-6 pb-6">
          <button
            onClick={() => setShowContactForm(true)}
            className={`w-full py-3 bg-gradient-to-r ${colorClasses.bg} text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
          >
            <span>Solicitar asesoría</span>
            <FaArrowRight />
          </button>
        </div>
      </motion.div>
    );
  };

  useEffect(() => {
    // Rotación automática de servicios cada 5 segundos si no hay interacción
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % serviciosAsesoria.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Elementos decorativos */}
        <motion.div 
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-600/5 filter blur-[150px] pointer-events-none"
          style={{ y: y2, opacity }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-teal-600/5 filter blur-[120px] pointer-events-none"
          style={{ y: y1 }}
        ></motion.div>
        
        {/* Sección Hero */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -left-5 -top-5 w-20 h-20 bg-emerald-500/10 rounded-full filter blur-xl"></div>
                
                <div className="relative">
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-sm font-medium mb-4 border border-emerald-500/30">
                    ASESORÍA COMERCIAL
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Te acompaño en las <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 italic">decisiones comerciales</span> que transformarán tu negocio
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Como asesor comercial, trabajo codo a codo contigo para desarrollar estrategias que aumenten ventas, mejoren procesos y potencien el talento de tu equipo comercial.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-glow-emerald transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Agenda una consulta estratégica</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaPhoneAlt className="text-sm" />
                    <span>Llamada de descubrimiento</span>
                  </Link>
                </div>
              </motion.div>
              
              {/* Panel de Asesoría Personalizada */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, scale: isHeaderInView ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative h-[480px] w-full">
                  {/* Panel principal */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] to-[#1A1A2E]/80 backdrop-blur-sm rounded-2xl border border-emerald-500/20">
                    {/* Contenido del panel */}
                    <div className="absolute inset-0 p-8 flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                          <FaHandshake className="text-xl" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-xl">Asesoría Personalizada</h3>
                          <p className="text-gray-400 text-sm">Soluciones a medida para tu negocio</p>
                        </div>
                      </div>
                      
                      {/* Imagen */}
                      <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                        <Image
                          src="/imagenes/asesoria-comercial-hero.webp"
                          alt="Asesoría comercial personalizada"
                          fill
                          className="object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-transparent to-transparent opacity-80"></div>
                      </div>
                      
                      {/* Datos de resultados */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-500/10">
                          <div className="text-emerald-400 font-medium text-sm mb-1">Promedio de mejora</div>
                          <div className="text-white font-bold text-2xl">+47%</div>
                          <div className="text-gray-400 text-xs">en performance comercial</div>
                        </div>
                        <div className="bg-teal-900/20 p-4 rounded-lg border border-teal-500/10">
                          <div className="text-teal-400 font-medium text-sm mb-1">ROI típico</div>
                          <div className="text-white font-bold text-2xl">5.3x</div>
                          <div className="text-gray-400 text-xs">retorno sobre inversión</div>
                        </div>
                      </div>
                      
                      {/* Testimonios mini */}
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-4 rounded-lg border border-emerald-500/20 relative">
                        <div className="absolute -top-2 -left-1 text-emerald-500 text-2xl opacity-30">"</div>
                        <p className="text-gray-300 text-sm italic">
                          Su asesoría ha sido transformadora. No solo mejoró nuestros números, sino que cambió completamente nuestra forma de entender el proceso comercial.
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                            AR
                          </div>
                          <div>
                            <p className="text-white text-xs font-medium">Ana Rodríguez</p>
                            <p className="text-gray-400 text-xs">Directora Comercial, TechServices</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
        </div>
        
        {/* Sección de Servicios de Asesoría */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-sm font-medium mb-3">
                SERVICIOS DE ASESORÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Soluciones comerciales <span className="italic">pensadas para ti</span>
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Mi enfoque de asesoría está diseñado para adaptarse a tus necesidades específicas,
                ofreciéndote exactamente el soporte que tu organización necesita en este momento.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {serviciosAsesoria.map((servicio, index) => (
                <ServiceCard
                  key={index}
                  service={servicio}
                  active={activeService === index}
                  onClick={() => setActiveService(index)}
                  index={index}
                />
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-8 border border-emerald-500/20 shadow-xl"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {serviciosAsesoria[activeService].icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{serviciosAsesoria[activeService].title}</h3>
                    <p className="text-gray-300 mb-6">{serviciosAsesoria[activeService].description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {serviciosAsesoria[activeService].features.map((feature, i) => (
                        <div key={i} className="bg-emerald-900/20 py-2 px-3 rounded-lg border border-emerald-500/10 flex items-center">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></div>
                          <span className="text-emerald-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 bg-emerald-950/30 border border-emerald-500/10 rounded-lg p-4">
                      <div className="flex items-start">
                        <FaRegLightbulb className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-300 text-sm italic">
                          "Mi objetivo como asesor no es solo ayudarte a resolver problemas inmediatos, sino construir capacidades internas para que tu equipo pueda seguir mejorando de forma sostenible."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2 flex-shrink-0 mt-4 md:mt-0"
                  >
                    <span>Consultar disponibilidad</span>
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        
        {/* Sección de Mi Enfoque / Beneficios */}
        <section ref={benefitsRef} className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-sm font-medium mb-3">
                MI ENFOQUE
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Por qué mi asesoría <span className="italic">marca la diferencia</span>?
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Mi trabajo va más allá de los consejos genéricos. Me baso en experiencia real
                para implementar soluciones concretas que generan resultados cuantificables.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isBenefitsInView ? 1 : 0, y: isBenefitsInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-lg"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white text-xl mb-5">
                    {beneficio.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{beneficio.title}</h3>
                  
                  <p className="text-gray-300">{beneficio.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Testimonios / Casos */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-xl p-6 md:p-8 border border-emerald-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Resultados que hablan por sí solos</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {casosExito.map((caso, index) => (
                  <div key={index} className="bg-[#1A1A2E]/60 rounded-lg p-5 border border-emerald-500/10">
                    <div className="text-emerald-400 font-bold mb-1">{caso.empresa}</div>
                    <div className="text-white text-lg font-medium mb-3">{caso.resultado}</div>
                    <p className="text-gray-400 italic text-sm">"{caso.testimonio}"</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Sección de Proceso de Trabajo */}
        <section className="py-12 mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/40 to-transparent rounded-xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-sm font-medium mb-3">
                METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mi proceso de trabajo
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Te guío a través de un proceso claro y estructurado, diseñado para 
                identificar oportunidades e implementar soluciones efectivas paso a paso.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {procesoAsesoria.map((paso, index) => {
                // Definir clases de color basadas en la propiedad color
                const colorVariants: {[key: string]: {bg: string, text: string, border: string}} = {
                  emerald: {
                    bg: "from-emerald-600 to-emerald-700",
                    text: "text-emerald-400",
                    border: "border-emerald-500/30",
                  },
                  teal: {
                    bg: "from-teal-600 to-teal-700",
                    text: "text-teal-400",
                    border: "border-teal-500/30",
                  },
                  green: {
                    bg: "from-green-600 to-green-700",
                    text: "text-green-400",
                    border: "border-green-500/30",
                  }
                };
                
                const colorClasses = colorVariants[paso.color] || colorVariants.emerald;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-lg border ${colorClasses.border} flex-grow transition-all duration-300 hover:shadow-lg relative shadow-xl`}
                  >
                    <div className="absolute -top-6 -left-2 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xl font-bold shadow-lg shadow-emerald-900/50">
                      {index + 1}
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex items-center mb-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${colorClasses.bg} text-white mr-3`}>
                          {paso.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{paso.title}</h3>
                      </div>
                      <p className="text-gray-300">{paso.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Sección de Metodologías */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-sm font-medium mb-3">
                FRAMEWORKS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Metodologías propietarias
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                He desarrollado marcos de trabajo propios que combinan las mejores prácticas de la industria
                con aprendizajes de mi experiencia trabajando con múltiples organizaciones.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {metodologias.map((metodologia, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white text-xl mb-5">
                    {metodologia.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{metodologia.title}</h3>
                  
                  <p className="text-gray-300">{metodologia.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección de Planes */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-sm font-medium mb-3">
                PLANES DE SERVICIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Elige la modalidad de <span className="italic">acompañamiento</span> ideal para ti
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Ofrezco distintas modalidades de colaboración para adaptarme a tus necesidades específicas 
                y presupuesto, siempre con el máximo compromiso de entrega y resultados.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {paquetes.map((paquete, index) => (
                <PackageCard
                  key={index}
                  title={paquete.title}
                  price={paquete.price}
                  duracion={paquete.duracion}
                  features={paquete.features}
                  color={paquete.color}
                  popular={paquete.popular}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-emerald-500/20 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿No encontraste lo que buscas?</h3>
                  <p className="text-gray-300 text-sm">Podemos diseñar un plan completamente personalizado para tus necesidades específicas</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
              >
                Solicitar propuesta a medida
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Sección FAQ */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Preguntas frecuentes
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Resuelve tus dudas sobre mis servicios de asesoría comercial
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cómo sabes si tus recomendaciones funcionarán en mi sector?",
                  answer: "Mi enfoque inicia con un diagnóstico exhaustivo de tu contexto específico y sector. No aplico fórmulas genéricas, sino que adapto estrategias probadas a las particularidades de tu industria. Además, mi experiencia trabajando con empresas de diversos sectores me ha permitido identificar patrones y soluciones que funcionan en múltiples contextos, que luego personalizo para tu caso concreto."
                },
                {
                  question: "¿Qué me diferencia de ti de otros consultores comerciales?",
                  answer: "La diferencia está en mi enfoque práctico y basado en resultados. No me limito a entregar un informe con recomendaciones teóricas, sino que trabajo codo a codo contigo en la implementación y medición de resultados. Mi modelo de colaboración se basa en transferir conocimiento real a tu equipo, garantizando que las mejoras sean sostenibles a largo plazo incluso después de finalizar nuestra colaboración."
                },
                {
                  question: "¿Necesito contratar el servicio por un tiempo mínimo?",
                  answer: "Para la asesoría puntual y el programa de transformación comercial no hay compromiso de permanencia mínima. El servicio de asesor externo sí requiere un compromiso mínimo de seis meses para garantizar que podamos generar un impacto significativo y sostenible. Dicho esto, todos mis servicios están diseñados para que veas resultados tangibles desde el primer mes."
                },
                {
                  question: "¿Trabajas en exclusiva o con varias empresas a la vez?",
                  answer: "Trabajo simultáneamente con varios clientes, pero tengo una política estricta de no trabajar con competidores directos al mismo tiempo. Si ya estoy asesorando a una empresa en tu misma industria y nicho específico, te lo comunicaré transparentemente. Además, limito intencionadamente mi número de clientes para garantizar una atención de máxima calidad a cada uno."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-emerald-500/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección CTA */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl border border-emerald-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Comencemos a transformar <span className="italic">tu estrategia comercial</span> hoy mismo
                    </h2>
                    <p className="text-gray-300 mb-6">
                      El primer paso hacia la mejora es reconocer que existe una oportunidad.
                      El segundo paso es tomar acción. Agenda una consulta inicial sin compromiso
                      y exploremos juntos cómo puedo ayudarte a alcanzar tus objetivos comerciales.
                    </p>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
                      {[
                        "Consulta inicial sin costo",
                        "Propuesta personalizada",
                        "Acompañamiento continuo",
                        "Resultados medibles"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-glow-emerald transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Solicitar asesoría personalizada</span>
                      <FaArrowRight />
                    </button>
                    <Link
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center flex items-center justify-center gap-2"
                    >
                      <FaPhoneAlt className="text-sm" />
                      <span>Agendar llamada de descubrimiento</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. ¡Todos los derechos reservados!
      </footer>
    
      {/* Formulario de contacto modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-emerald-500/30"
            >
              <button 
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                    <FaHandshake className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">Asesoría Comercial</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntame sobre los desafíos comerciales que enfrentas actualmente</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-emerald-500/30 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-[#0D0C1D] border border-emerald-500/30 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-3 bg-[#0D0C1D] border border-emerald-500/30 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué desafío comercial te gustaría resolver?
                  </label>
                  <select
                    id="challenge"
                    className="w-full p-3 bg-[#0D0C1D] border border-emerald-500/30 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="procesos">Optimización de procesos comerciales</option>
                    <option value="equipo">Desarrollo de equipo comercial</option>
                    <option value="estrategia">Estrategia comercial</option>
                    <option value="kpis">Definición y seguimiento de KPIs</option>
                    <option value="otro">Otro (especificar en mensaje)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-emerald-500/30 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Cuéntame más sobre tu situación actual, objetivos y cómo te gustaría que te ayudara..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-glow-emerald transition-all duration-300"
                  >
                    Solicitar asesoría
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te contactaré personalmente en menos de 24 horas para dialogar sobre tu situación
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-emerald {
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.4);
        }
      `}</style>
    </div>
  );
}
