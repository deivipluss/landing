"use client";
import React, { useState, useRef } from "react";
import { 
  FaShoppingCart, 
  FaStore, 
  FaCreditCard, 
  FaArrowRight,
  FaCheck,
  FaChartLine,
  FaBox,
  FaRegCreditCard,
  FaMobile,
  FaShoppingBag,
  FaTruck
} from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function EcommercePage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const ecommerceTypes = [
    {
      title: "Tiendas B2C",
      description: "Plataformas de venta directa al consumidor final, optimizadas para convertir visitantes en compradores y generar ventas recurrentes.",
      icon: <FaShoppingBag className="text-xl" />,
      features: [
        "Catálogo intuitivo",
        "Proceso de compra simplificado",
        "Sistema de recomendaciones",
        "Historiales de pedidos"
      ]
    },
    {
      title: "Tiendas B2B",
      description: "Soluciones especializadas para ventas entre empresas con funcionalidades específicas para pedidos por volumen, cotizaciones y cuentas corporativas.",
      icon: <FaStore className="text-xl" />,
      features: [
        "Precios personalizados",
        "Gestión de cuentas corporativas",
        "Portal de cotizaciones",
        "Pedidos recurrentes"
      ]
    },
    {
      title: "Marketplace",
      description: "Plataformas multi-vendedor que conectan compradores con diversos vendedores bajo un mismo ecosistema, maximizando oferta y demanda.",
      icon: <FaBox className="text-xl" />,
      features: [
        "Perfiles de vendedor",
        "Sistema de comisiones",
        "Gestión de disputas",
        "Verificación de calidad"
      ]
    },
    {
      title: "Suscripciones",
      description: "Tiendas orientadas a la venta de productos o servicios recurrentes mediante suscripciones automáticas que fidelizan clientes.",
      icon: <FaRegCreditCard className="text-xl" />,
      features: [
        "Facturación recurrente",
        "Gestión de ciclos",
        "Upgrades y downgrades",
        "Retención de suscriptores"
      ]
    }
  ];

  const ecommerceFeatures = [
    {
      title: "Diseño UX Optimizado",
      description: "Interfaces intuitivas y atractivas diseñadas para maximizar conversiones y minimizar abandonos de carrito.",
      icon: <FaMobile className="text-xl" />
    },
    {
      title: "Gestión de Inventario",
      description: "Sistemas inteligentes de control de stock, variantes de productos y alertas automáticas para reposición.",
      icon: <FaBox className="text-xl" />
    },
    {
      title: "Pasarelas de Pago Seguras",
      description: "Integración con múltiples métodos de pago locales e internacionales, con protocolos avanzados de seguridad.",
      icon: <FaCreditCard className="text-xl" />
    },
    {
      title: "Logística Integrada",
      description: "Conexión con proveedores logísticos para cálculo de envíos en tiempo real y seguimiento de pedidos.",
      icon: <FaTruck className="text-xl" />
    },
    {
      title: "Marketing E-commerce",
      description: "Herramientas de promoción, programas de fidelización, cupones y campañas específicas para comercio online.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    },
    {
      title: "Analítica Avanzada",
      description: "Dashboards completos con KPIs clave, comportamiento de usuarios, y análisis de conversión para optimización continua.",
      icon: <FaChartLine className="text-xl" />
    }
  ];

  const processSteps = [
    {
      title: "Planificación Estratégica",
      description: "Analizamos tu modelo de negocio, competencia y público objetivo para definir la estrategia ideal para tu tienda online.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    },
    {
      title: "Arquitectura y Diseño",
      description: "Creamos la estructura de tu tienda y su diseño visual, centrados en la experiencia de usuario y la maximización de conversiones.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    },
    {
      title: "Desarrollo y Configuración",
      description: "Implementamos tu tienda con todas las funcionalidades necesarias, catálogo de productos y configuraciones técnicas.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    },
    {
      title: "Integración de Pagos y Logística",
      description: "Conectamos pasarelas de pago, configuramos impuestos y establecemos los métodos de envío según tus necesidades.",
      icon: <FaCreditCard />
    },
    {
      title: "Pruebas y Optimización",
      description: "Realizamos tests exhaustivos de usabilidad, rendimiento y seguridad para garantizar una experiencia de compra perfecta.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    },
    {
      title: "Lanzamiento y Crecimiento",
      description: "Implementamos estrategias de lanzamiento y te acompañamos en el crecimiento continuo de tu tienda online.",
      icon: <FaChartLine />
    }
  ];

  const packages = [
    {
      title: "Tienda Básica",
      price: "Desde $1,990",
      features: [
        "Tienda responsive con hasta 50 productos",
        "Diseño personalizado basado en plantilla",
        "Integración con 2 pasarelas de pago",
        "Configuración de métodos de envío",
        "Panel de administración intuitivo",
        "Capacitación básica de uso",
        "30 días de soporte post-lanzamiento"
      ],
      color: "blue",
      popular: false
    },
    {
      title: "Tienda Profesional",
      price: "Desde $3,990",
      features: [
        "Tienda responsive con hasta 500 productos",
        "Diseño personalizado a medida",
        "Integración con múltiples pasarelas de pago",
        "Sistema de cálculo de envíos en tiempo real",
        "SEO e-commerce básico",
        "Importación inicial de productos",
        "Integración con email marketing",
        "Capacitación completa para administradores",
        "60 días de soporte post-lanzamiento"
      ],
      color: "cyan",
      popular: true
    },
    {
      title: "Tienda Premium",
      price: "Desde $7,990",
      features: [
        "Tienda responsive con productos ilimitados",
        "Diseño premium exclusivo",
        "Funcionalidades avanzadas a medida",
        "Integración con sistemas ERP/CRM",
        "Optimización avanzada de velocidad y conversión",
        "SEO e-commerce avanzado",
        "Estrategia de marketing digital incluida",
        "App móvil opcional (costo adicional)",
        "Capacitación extendida y documentación",
        "6 meses de soporte y mantenimiento"
      ],
      color: "sky",
      popular: false
    }
  ];

  // Tab component for ecommerce types
  const TypeTab = ({ type, active, onClick, index }: {
    type: typeof ecommerceTypes[0];
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
      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-300 w-full ${
        active
          ? "bg-gradient-to-r from-blue-600/30 to-cyan-700/30 border border-blue-500/30 text-white" 
          : "text-gray-400 hover:bg-blue-900/20 hover:text-gray-300"
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
        {type.icon}
      </div>
      <span className="hidden md:block">{type.title}</span>
    </motion.button>
  );

  // Package card component
  const PackageCard = ({ 
    title, 
    price, 
    features, 
    color, 
    popular 
  }: { 
    title: string;
    price: string; 
    features: string[]; 
    color: string;
    popular: boolean;
  }) => {
    // Define color classes mapping
    const colorVariants = {
      blue: {
        bg: "from-blue-500 to-blue-700",
        border: "border-blue-500/30",
        text: "text-blue-400",
      },
      cyan: {
        bg: "from-cyan-500 to-blue-600",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
      },
      sky: {
        bg: "from-sky-500 to-cyan-600",
        border: "border-sky-500/30",
        text: "text-sky-400",
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
        className={`bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl overflow-hidden ${
          popular ? `ring-2 ring-${color}-500/30 ${colorClasses.border}` : 'border border-blue-500/20'
        }`}
      >
        {popular && (
          <div className={`bg-gradient-to-r ${colorClasses.bg} text-center py-2`}>
            <p className="text-white text-sm font-medium">MÁS POPULAR</p>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorClasses.bg} mb-4`}>
            {price}
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
            <span>Solicitar presupuesto</span>
            <FaArrowRight />
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-cyan-600/5 filter blur-[120px] pointer-events-none"></div>
        
        {/* Hero Section */}
        <div ref={headerRef} className="relative py-12 md:py-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/30">
                  COMERCIO ELECTRÓNICO
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Tiendas <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">online</span> que impulsan tu negocio
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Desarrollo tiendas virtuales optimizadas para ventas, con experiencias de compra intuitivas y herramientas avanzadas que convierten visitantes en clientes recurrentes.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:shadow-glow-blue transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Crear mi tienda online</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="https://calendly.com/deivipluss/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                  >
                    Ver ejemplos de proyectos
                  </Link>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-y-4 gap-x-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white">
                      <FaShoppingCart />
                    </div>
                    <div>
                      <div className="text-white font-medium">+45</div>
                      <div className="text-gray-400 text-xs">tiendas online creadas</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white">
                      <FaChartLine />
                    </div>
                    <div>
                      <div className="text-white font-medium">156%</div>
                      <div className="text-gray-400 text-xs">aumento promedio en ventas</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isHeaderInView ? 1 : 0, scale: isHeaderInView ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative h-[400px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl"></div>
                  <Image
                    src="/imagenes/ecommerce-hero.webp"
                    alt="Tienda online profesional"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent opacity-60"></div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white">
                          <FaStore />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Dashboard de Ventas</h3>
                        </div>
                        <span className="ml-auto text-green-400 text-sm flex items-center">
                          +84% <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-blue-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">$12,587</div>
                          <div className="text-gray-400 text-xs">Ventas mensuales</div>
                        </div>
                        <div className="bg-blue-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">3.6%</div>
                          <div className="text-gray-400 text-xs">Ratio de conversión</div>
                        </div>
                        <div className="bg-blue-900/20 p-2 rounded-lg">
                          <div className="text-white font-bold">$94</div>
                          <div className="text-gray-400 text-xs">Valor medio de compra</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            >
              {[
                { value: "+156%", label: "aumento promedio en ventas online" },
                { value: "3.6%", label: "tasa de conversión media" },
                { value: "99.9%", label: "disponibilidad garantizada" },
                { value: "2.1s", label: "velocidad media de carga" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border border-blue-500/10 p-5 rounded-xl"
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>
        
        {/* Ecommerce Types Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm font-medium mb-3">
                TIPOS DE TIENDAS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Soluciones adaptadas a tu modelo de negocio
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Desarrollo diferentes tipos de plataformas e-commerce, cada una con características 
                específicas según el modelo de negocio y objetivos comerciales.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {ecommerceTypes.map((type, index) => (
                <TypeTab
                  key={index}
                  type={type}
                  active={activeTab === index}
                  onClick={() => setActiveTab(index)}
                  index={index}
                />
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-8 border border-blue-500/20"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {ecommerceTypes[activeTab].icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{ecommerceTypes[activeTab].title}</h3>
                    <p className="text-gray-300 mb-6">{ecommerceTypes[activeTab].description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {ecommerceTypes[activeTab].features.map((feature, i) => (
                        <div key={i} className="bg-blue-900/20 py-2 px-3 rounded-lg border border-blue-500/10 flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                          <span className="text-blue-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2 flex-shrink-0 mt-4 md:mt-0"
                  >
                    <span>Solicitar presupuesto</span>
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm font-medium mb-3">
                CARACTERÍSTICAS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tiendas online de alto rendimiento
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto">
                Cada e-commerce que desarrollo incorpora características premium diseñadas para 
                maximizar ventas y ofrecer una experiencia de compra excepcional.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {ecommerceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-700 flex items-center justify-center text-white text-xl mb-5">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
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
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm font-medium mb-3">
                METODOLOGÍA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proceso de desarrollo e-commerce
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mi enfoque sistemático garantiza tiendas online que no solo se ven bien, 
                sino que están estratégicamente diseñadas para maximizar ventas.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-600 to-blue-800/40 left-[15px] md:left-1/2 top-0 transform md:-translate-x-1/2 hidden sm:block"></div>
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start gap-8 mb-12 relative ${
                    index % 2 === 0 ? 'md:mr-[50%]' : 'md:ml-[50%] md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-lg border border-blue-500/20 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-900/30 text-blue-400 mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm font-medium mb-3">
                PLANES DE SERVICIO
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Inversión en tu tienda online
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Planes adaptados a diferentes tamaños y necesidades de negocio,
                desde pequeñas tiendas hasta grandes marketplaces.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <PackageCard
                  key={index}
                  title={pkg.title}
                  price={pkg.price}
                  features={pkg.features}
                  color={pkg.color}
                  popular={pkg.popular}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/70 p-6 rounded-xl border border-blue-500/20 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white">
                  <FaStore className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">¿Tienes un proyecto especial o marketplace?</h3>
                  <p className="text-gray-300 text-sm">Contacta para un presupuesto personalizado adaptado a tus necesidades específicas</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap md:ml-auto"
              >
                Solicitar presupuesto personalizado
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm font-medium mb-3">
                TESTIMONIOS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lo que dicen nuestros clientes
              </h2>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                Descubre cómo nuestras tiendas online han transformado negocios
                y ayudado a empresas a escalar sus ventas digitales.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "La experiencia de trabajar con ellos ha sido espectacular. Nuestra tienda online ha incrementado las ventas en un 187% en solo 4 meses. La plataforma es rápida, intuitiva y nuestros clientes adoran lo fácil que es comprar.",
                  author: "Laura Méndez",
                  position: "Directora E-commerce",
                  company: "ModaExpress",
                  image: "/imagenes/testimonial-1.webp"
                },
                {
                  quote: "Migramos de una plataforma básica a una solución personalizada y la diferencia es abismal. No solo mejoramos la experiencia del usuario, sino que nuestros procesos internos son mucho más eficientes. La inversión se recuperó en el primer trimestre.",
                  author: "Carlos Jiménez",
                  position: "CEO",
                  company: "TechGadget Store",
                  image: "/imagenes/testimonial-2.webp"
                },
                {
                  quote: "Como marketplace con más de 50 vendedores, necesitábamos una solución robusta y escalable. El sistema desarrollado superó nuestras expectativas, permitiendo un crecimiento sostenido sin problemas técnicos. El soporte post-lanzamiento ha sido excelente.",
                  author: "Marta Rodríguez",
                  position: "COO",
                  company: "Mercado Local",
                  image: "/imagenes/testimonial-3.webp"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 rounded-xl p-6 border border-blue-500/10 relative"
                >
                  <div className="absolute top-6 left-6 text-blue-500 text-4xl opacity-20">"</div>
                  <div className="relative z-10">
                    <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        width={48} 
                        height={48} 
                        className="object-cover" 
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{testimonial.position}, <span className="text-blue-400">{testimonial.company}</span></p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 text-blue-500 text-4xl opacity-20">"</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
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
                Resuelve tus dudas sobre nuestros servicios de e-commerce
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Cuánto tiempo tarda en desarrollarse una tienda online?",
                  answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Una tienda básica puede estar lista en 3-4 semanas, mientras que un e-commerce más complejo o marketplace puede requerir entre 2-4 meses. Al iniciar el proyecto, establecemos un cronograma detallado con hitos claros para que conozcas exactamente cuándo estará lista tu tienda."
                },
                {
                  question: "¿Qué plataformas de e-commerce utilizas?",
                  answer: "Trabajo principalmente con WooCommerce, Shopify y Magento, seleccionando la plataforma que mejor se adapte a las necesidades específicas de tu negocio. Para proyectos más personalizados o complejos, también desarrollo soluciones a medida. La elección de la plataforma dependerá de factores como el volumen de productos, integraciones necesarias, presupuesto y objetivos de escalabilidad."
                },
                {
                  question: "¿Cómo se gestionan los métodos de pago y envío?",
                  answer: "Integro múltiples pasarelas de pago adaptadas a tus necesidades (tarjetas de crédito, PayPal, transferencias, pagos móviles) y configuramos proveedores de envío con cálculo de costos en tiempo real. También puedo implementar sistemas de pago a plazos, suscripciones, y métodos personalizados según los requerimientos específicos de tu mercado y tipo de cliente."
                },
                {
                  question: "¿Ofrecen servicios de mantenimiento post-lanzamiento?",
                  answer: "Sí, todos nuestros planes incluyen un período de soporte post-lanzamiento, y ofrecemos paquetes de mantenimiento mensuales que incluyen actualizaciones de seguridad, optimización de rendimiento, pequeñas modificaciones, y monitoreo de disponibilidad. Estos planes aseguran que tu tienda permanezca segura, rápida y actualizada, permitiéndote concentrarte en hacer crecer tu negocio mientras nosotros nos encargamos del aspecto técnico."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 p-6 rounded-xl border border-blue-500/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl border border-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-700/20"></div>
              
              <div className="relative p-8 md:p-12 z-10">
                <div className="absolute inset-0 bg-[#1A1A2E]/40 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Lleva tu negocio al siguiente nivel con un e-commerce profesional
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Las oportunidades del comercio electrónico son ilimitadas. Una tienda online bien 
                      diseñada y optimizada puede transformar tu negocio, multiplicar tus ventas y alcanzar 
                      nuevos mercados.
                    </p>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
                      {[
                        "Consultoría inicial gratuita",
                        "Diseño personalizado",
                        "Soporte post-lanzamiento",
                        "Optimización continua"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white text-xs">
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
                      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:shadow-glow-blue transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>Crear mi tienda online</span>
                      <FaArrowRight />
                    </button>
                    <Link
                      href="https://calendly.com/deivipluss/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Agendar consultoría estratégica
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
    
      {/* Contact form modal */}
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
              className="bg-[#1A1A2E] rounded-xl p-6 md:p-8 max-w-md w-full relative border border-blue-500/30"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                    <FaShoppingCart className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">E-commerce</h3>
                <p className="text-gray-300 text-center mb-6">Cuéntanos sobre la tienda online que quieres crear</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Empresa o proyecto
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa o proyecto"
                  />
                </div>
                <div>
                  <label htmlFor="ecommerce_type" className="block text-sm font-medium text-gray-300 mb-1">
                    Tipo de tienda online
                  </label>
                  <select
                    id="ecommerce_type"
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="b2c">Tienda B2C (venta al público)</option>
                    <option value="b2b">Tienda B2B (venta a empresas)</option>
                    <option value="marketplace">Marketplace (múltiples vendedores)</option>
                    <option value="subscription">Modelo de suscripción</option>
                    <option value="other">Otro (especificar en mensaje)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0D0C1D] border border-blue-500/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe tu proyecto de e-commerce, productos que vendes, funcionalidades que necesitas y cualquier detalle relevante..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:shadow-glow-blue transition-all duration-300"
                  >
                    Solicitar presupuesto
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Te responderé en menos de 24 horas con una propuesta personalizada
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-glow-blue {
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </div>
  );
}
