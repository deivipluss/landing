"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  ClipboardCheck, 
  Users, 
  Settings, 
  Leaf, 
  BarChart2, 
  Database, 
  BookOpen,
  CheckCircle,
  Calendar,
  Clock,
  Video,
  MessageSquare,
  BarChart,
  Calendar as CalendarIcon2,
  Bell,
  ChevronRight,
  Sparkles
} from "lucide-react";

const RoadmapElLounge: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const icons = [
    <ClipboardCheck key="audit" className="h-5 w-5" />,
    <CalendarIcon2 key="planning" className="h-5 w-5" />,
    <Users key="culture" className="h-5 w-5" />,
    <Settings key="processes" className="h-5 w-5" />,
    <Leaf key="modern" className="h-5 w-5" />,
    <BarChart2 key="metrics" className="h-5 w-5" />,
    <Database key="digital" className="h-5 w-5" />,
    <BookOpen key="training" className="h-5 w-5" />
  ];

  const colors = [
    "bg-blue-100 text-blue-600 border-blue-500",
    "bg-teal-100 text-teal-600 border-teal-500",
    "bg-green-100 text-green-600 border-green-500",
    "bg-purple-100 text-purple-600 border-purple-500",
    "bg-emerald-100 text-emerald-600 border-emerald-500",
    "bg-amber-100 text-amber-600 border-amber-500",
    "bg-indigo-100 text-indigo-600 border-indigo-500",
    "bg-red-100 text-red-600 border-red-500"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Back navigation */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link href="/ktdrallounge" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium group">
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="border-b border-transparent group-hover:border-blue-600">Volver al Diagnóstico Digital</span>
        </Link>
      </motion.div>
      
      {/* Header - Updated title and subtitle */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-transparent bg-clip-text text-center mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          HOJA DE RUTA 1 - EL LOUNGE
        </motion.h1>
        <motion.p 
          className="text-gray-600 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Plan estratégico de 35 días diseñado para transformar integralmente la presencia digital, 
          optimizar procesos operativos y maximizar el rendimiento comercial de El Lounge.
        </motion.p>
      </motion.div>
      
      {/* Timeline visualization - Updated to include up to day 35 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative mb-16 hidden md:block"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>
        </div>
        <div className="relative flex justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((step, index) => (
            <motion.div 
              key={step}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
              className={`h-8 w-8 rounded-full ${index < 8 ? colors[index % colors.length] : "bg-green-100 text-green-600 border-green-500"} border-2 flex items-center justify-center text-sm font-bold shadow-sm`}
            >
              {step}
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          {["Días 1-3", "Días 8-9", "Día 10", "Día 12", "Días 13-14", "Día 15", "Días 17-18", "Días 19-34", "Día 39"].map((days, index) => (
            <div 
              key={days} 
              className="text-xs text-gray-600 text-center font-medium"
              style={{ width: "11%", marginLeft: index === 0 ? "-10px" : index === 8 ? "10px" : "0" }}
            >
              {days}
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Roadmap sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Section 1 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-blue-500 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start">
            <div className={`mr-4 ${colors[0]} p-3 rounded-lg flex-shrink-0`}>
              {icons[0]}
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center">
                    <span className="mr-2">1. Auditoría Completa</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Fundacional</span>
                  </h2>
                  <p className="text-gray-600 mt-1 text-sm">Diagnóstico completo del estado actual</p>
                </div>
                <div className={`flex items-center ${colors[0]} px-3 py-1 rounded-full text-sm font-medium`}>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2-3 de abril, 2025</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-5">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-800 flex items-center">
                    <ClipboardCheck className="h-5 w-5 mr-2" />
                    Objetivo
                  </h3>
                  <p className="text-gray-700 mt-1 ml-7">
                    Realizaré un análisis profundo del ecosistema digital y operatividad comercial de <i>El Lounge</i> para identificar bloqueos y oportunidades de mejora.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 flex items-center">
                      <Database className="h-4 w-4 mr-2 text-blue-500" />
                      Infraestructura Tecnológica
                    </h4>
                    <ul className="mt-2 space-y-2 text-gray-600 ml-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Evaluación del estado y capacidad del hardware utilizado en el negocio.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Diagnóstico de conectividad y redes.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Verificación del software y activos digitales adquiridos por la empresa.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Revisión de software de gestión operativa (ERP, CRM, POS, etc.).
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Verificación de almacenamiento y seguridad de datos.
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-blue-500" />
                      Ecosistema Digital
                    </h4>
                    <ul className="mt-2 space-y-2 text-gray-600 ml-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Registro de todas las cuentas digitales de la empresa.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Verificación de disponibilidad de dominio.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Comprobación de disponibilidad de correos electrónicos.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Verificación de todas las cuentas sociales registradas a nombre del negocio.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Diagnóstico de presencia en redes sociales.
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                      Procesos Comerciales
                    </h4>
                    <ul className="mt-2 space-y-2 text-gray-600 ml-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Mapeo del customer journey.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Evaluación de estrategias de captación y fidelización.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Revisión de canales de venta y reservas.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Diagnóstico de eficiencia operativa del equipo.
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mr-1.5 mt-0.5 flex-shrink-0" />
                        Evaluación del compromiso y efectividad del recurso humano.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-teal-500 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start">
            <div className={`mr-4 ${colors[1]} p-3 rounded-lg flex-shrink-0`}>
              {icons[1]}
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">2. Metodologías para la Planificación</h2>
                  <p className="text-gray-600 mt-1 text-sm">Diseño de estrategias y calendarización</p>
                </div>
                <div className={`flex items-center ${colors[1]} px-3 py-1 rounded-full text-sm font-medium`}>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>8-9 de abril, 2025</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <h3 className="font-semibold text-teal-800 flex items-center">
                    <CalendarIcon2 className="h-5 w-5 mr-2" />
                    Objetivo
                  </h3>
                  <p className="text-gray-700 mt-1 ml-7">
                    Establecer metodologías claras para la gestión digital y operativa del negocio.
                  </p>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center">
                    <Video className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-bold text-blue-800">PRIMERA REUNIÓN (VIRTUAL)</h3>
                  </div>
                  <p className="text-gray-700 mt-2 ml-7">
                    Realizaré una reunión virtual con todos los líderes de equipo para presentarme, compartir los hallazgos iniciales y establecer las expectativas del proceso. Incluiré a los líderes de barra, escenario, atención al cliente, seguridad y demás áreas clave.
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className={`${colors[1]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Calendarización de contenido en redes sociales con objetivos claros y medibles.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[1]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Establecimiento de protocolos de producción de contenido de alta calidad.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[1]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Metodologías para moderación efectiva de comunidades digitales.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[1]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Optimización de presencia en redes sociales para maximizar alcance e interacción.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[1]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Desarrollo de flujos de trabajo para gestión de solicitudes y consultas en línea.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[1]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Planificación estratégica de campañas digitales alineadas con eventos físicos.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-green-500 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start">
            <div className={`mr-4 ${colors[2]} p-3 rounded-lg flex-shrink-0`}>
              {icons[2]}
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">3. Implantación de Cultura Organizativa y Colaborativa</h2>
                  <p className="text-gray-600 mt-1 text-sm">Alineación del equipo con la visión digital</p>
                </div>
                <div className={`flex items-center ${colors[2]} px-3 py-1 rounded-full text-sm font-medium`}>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>10 de abril, 2025</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-green-800 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Objetivo
                  </h3>
                  <p className="text-gray-700 mt-1 ml-7">
                    Lograr que cada líder comprenda claramente cómo su área contribuye al ecosistema digital completo.
                  </p>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="font-bold text-green-800">SEGUNDA REUNIÓN (PRESENCIAL) - 10 DE ABRIL</h3>
                  </div>
                  <p className="text-gray-700 mt-2 ml-7">
                    Realizaré una sesión presencial con los líderes de cada equipo para profundizar en su rol dentro del proceso de optimización, eficiencia empresarial y transformación digital.
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className={`${colors[2]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Definiré roles operativos, adicionales y/o digitales en cada área de operación.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[2]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Crearé protocolos de comunicación interna utilizando herramientas como Trello, Notion, WhatsApp, entre otras.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[2]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Fomentaré la necesidad de adaptarse a la modernidad y digitalización, tanto como individuos como en la empresa, para mantener una cultura de innovación continua.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-purple-500 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start">
            <div className={`mr-4 ${colors[3]} p-3 rounded-lg flex-shrink-0`}>
              {icons[3]}
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">4. Establecimiento de Procesos Operativos y Comerciales</h2>
                  <p className="text-gray-600 mt-1 text-sm">Estandarización de operaciones clave</p>
                </div>
                <div className={`flex items-center ${colors[3]} px-3 py-1 rounded-full text-sm font-medium`}>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>12 de abril, 2025</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h3 className="font-semibold text-purple-800 flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Objetivo
                  </h3>
                  <p className="text-gray-700 mt-1 ml-7">
                    Documentar y optimizar los procesos para aumentar eficiencia y mejorar la experiencia del cliente.
                  </p>
                </div>
                
                <div className="bg-purple-100 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-purple-600 mr-2" />
                    <h3 className="font-bold text-purple-800">TERCERA REUNIÓN (PRESENCIAL) - 12 DE ABRIL</h3>
                  </div>
                  <p className="text-gray-700 mt-2 ml-7">
                    Realizaré una reunión presencial con todos los líderes para validar las propuestas de mejora y asegurar que se adapten a la realidad operativa de El Lounge. Presentaré un borrador de los procesos y recogeré feedback para su implementación efectiva.
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className={`${colors[3]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Implementaré metodologías para planificación de eventos y promociones.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[3]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Crearé un sistema de registro de clientes y bases de datos.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[3]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Estableceré un flujo de atención al cliente eficiente.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[3]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Definiré procesos para la gestión de eventos y promociones especiales.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[3]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Crearé protocolos de respuesta rápida para situaciones críticas o emergencias.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[3]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Introduciré buenas prácticas post-venta y de post-atención al cliente.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[3]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Implementaré metodologías efectivas de seguimiento al cliente y conversión de prospectos.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-emerald-500 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start">
            <div className={`mr-4 ${colors[4]} p-3 rounded-lg flex-shrink-0`}>
              {icons[4]}
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">5. Orientación de la Cultura Empresarial hacia la Modernidad</h2>
                  <p className="text-gray-600 mt-1 text-sm">Adaptación a las mejores prácticas actuales</p>
                </div>
                <div className={`flex items-center ${colors[4]} px-3 py-1 rounded-full text-sm font-medium`}>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>12 de abril, 2025</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h3 className="font-semibold text-emerald-800 flex items-center">
                    <Leaf className="h-5 w-5 mr-2" />
                    Objetivo
                  </h3>
                  <p className="text-gray-700 mt-1 ml-7">
                    Alinear la cultura organizacional con valores modernos de sostenibilidad e innovación.
                  </p>
                </div>
                
                <div className="bg-emerald-100 p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-center">
                    <Video className="h-5 w-5 text-emerald-600 mr-2" />
                    <h3 className="font-bold text-emerald-800">CUARTA REUNIÓN (VIRTUAL) - 12 DE ABRIL</h3>
                  </div>
                  <p className="text-gray-700 mt-2 ml-7">
                    Organizaré una sesión virtual para revisar el progreso alcanzado hasta el momento y alinear la visión empresarial con las prácticas modernas. Esta reunión servirá como punto intermedio para evaluar la adaptación del equipo y realizar ajustes necesarios en la implementación.
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className={`${colors[4]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Implementaré y fomentaré buenas prácticas post atención al cliente y post venta.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[4]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Estableceré métodos de seguimiento y conversión desde cada área específica.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[4]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Introduciré prácticas eco-friendly y sostenibles en la operación diaria.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[4]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Adaptaré estrategias de marketing digital responsables y conscientes.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[4]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Fomentaré un ambiente de trabajo que valore la innovación y el pensamiento creativo.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[4]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Implementaré políticas de responsabilidad social empresarial.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 6 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-amber-500 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start">
            <div className={`mr-4 ${colors[5]} p-3 rounded-lg flex-shrink-0`}>
              {icons[5]}
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">6. Fijación de Objetivos Medibles</h2>
                  <p className="text-gray-600 mt-1 text-sm">Indicadores clave de desempeño</p>
                </div>
                <div className={`flex items-center ${colors[5]} px-3 py-1 rounded-full text-sm font-medium`}>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>13-14 de abril, 2025</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h3 className="font-semibold text-amber-800 flex items-center">
                    <BarChart2 className="h-5 w-5 mr-2" />
                    Objetivo
                  </h3>
                  <p className="text-gray-700 mt-1 ml-7">
                    Establecer un sistema de medición para evaluar el desempeño de cada área.
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className={`${colors[5]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Definiré indicadores clave de rendimiento (KPIs) para engagement.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[5]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Fijaré instrumentos de medición para monitorear el progreso.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[5]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Estableceré metas realistas pero ambiciosas para cada área del negocio.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[5]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Implementaré sistemas de seguimiento para medir las actividades del equipo de cara a la eficiencia y rentabilidad.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 7 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-indigo-500 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start">
            <div className={`mr-4 ${colors[6]} p-3 rounded-lg flex-shrink-0`}>
              {icons[6]}
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">7. Construcción de Bases Digitales Sólidas</h2>
                  <p className="text-gray-600 mt-1 text-sm">Infraestructura tecnológica profesional</p>
                </div>
                <div className={`flex items-center ${colors[6]} px-3 py-1 rounded-full text-sm font-medium`}>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>15 de abril, 2025</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h3 className="font-semibold text-indigo-800 flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Objetivo
                  </h3>
                  <p className="text-gray-700 mt-1 ml-7">
                    Implementar y asegurar todos los activos digitales del negocio bajo estándares profesionales.
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className={`${colors[6]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Optimizaré perfiles en redes sociales y plataformas de atención al cliente.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[6]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Implementaré herramientas de automatización para tareas repetitivas.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[6]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Realizaré el registro formal de dominio a nombre de la empresa.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[6]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Configuración de correo electrónico corporativo para comunicaciones oficiales.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[6]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Actualizaré los perfiles sociales con los nuevos datos corporativos.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[6]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Verificaré los perfiles de empresa en Meta para aumentar la confiabilidad.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[6]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Estableceré una nube propia de la empresa para almacenamiento seguro de archivos digitales.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[6]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Aseguraré que el software y otros activos digitales adquiridos estén bajo un registro propio y formal.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 8 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-red-500 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start">
            <div className={`mr-4 ${colors[7]} p-3 rounded-lg flex-shrink-0`}>
              {icons[7]}
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">8. Capacitación del Equipo</h2>
                  <p className="text-gray-600 mt-1 text-sm">Formación en herramientas y metodologías</p>
                </div>
                <div className={`flex items-center ${colors[7]} px-3 py-1 rounded-full text-sm font-medium`}>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>17-18 de abril, 2025</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h3 className="font-semibold text-red-800 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Objetivo
                  </h3>
                  <p className="text-gray-700 mt-1 ml-7">
                    Asegurar que todo el equipo comprenda las nuevas herramientas, procesos y metodologías implementadas.
                  </p>
                </div>
                
                <div className="bg-red-100 p-4 rounded-lg border border-red-200">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-red-600 mr-2" />
                    <h3 className="font-bold text-red-800">REUNIONES DE CAPACITACIÓN (PRESENCIALES)</h3>
                  </div>
                  <p className="text-gray-700 mt-2 ml-7">
                    Organizaré dos sesiones presenciales de capacitación intensiva los días 17 y 18 de abril. Estas reuniones serán fundamentales para asegurar que todo el equipo comprenda las nuevas herramientas, procesos y metodologías implementadas. Trabajaremos con casos prácticos y situaciones reales del negocio.
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className={`${colors[7]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Entrenamiento en herramientas digitales relevantes para cada área.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[7]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Desarrollo de pensamiento estratégico orientado al negocio digital.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[7]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Capacitación en atención al cliente a través de canales digitales.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[7]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Formación en análisis de datos para toma de decisiones.
                  </li>
                  <li className="flex items-start">
                    <div className={`${colors[7]} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    Talleres de creatividad y resolución de problemas.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* Testing phase information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-amber-200 shadow-sm"
      >
        <h2 className="text-2xl font-bold text-center text-amber-800 mb-4">Fase de Pruebas y Ajustes</h2>
        
        <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm mb-5">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center justify-center bg-amber-100 p-3 rounded-lg">
              <Clock className="h-10 w-10 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 text-lg">Días 19-34: Período de Pruebas</h3>
              <p className="text-gray-700">
                Durante estas dos semanas, se realizarán pruebas exhaustivas de todos los sistemas y procesos implementados. 
                Detectaremos errores, fallos o ineficiencias y realizaremos correcciones sobre la marcha. Este período es crucial 
                para asegurar que todos los elementos funcionen correctamente antes de la implementación final.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center justify-center bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800 text-lg">Día 39: Implementación Final</h3>
              <p className="text-gray-700">
                Para el día 39, todos los sistemas, procesos y metodologías estarán completamente implementados y funcionando 
                sin problemas. El equipo estará capacitado y operando bajo los nuevos estándares, y la transformación 
                digital de El Lounge estará completamente implementada y lista para generar resultados tangibles.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Resultados esperados */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-sm"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">Resultados Esperados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Incremento de la eficiencia operativa en al menos un 40%",
            "Aumento de engagement en redes sociales superior al 60%",
            "Crecimiento en ventas de al menos 25% en los siguientes 2 meses",
            "Reducción de tiempo de respuesta al cliente en un 70%",
            "Equipo totalmente capacitado y alineado con los objetivos digitales",
            "Sistemas y procesos digitales optimizados y documentados"
          ].map((result, index) => (
            <div key={index} className="flex items-start bg-white p-3 rounded-lg border border-gray-200">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{result}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="py-6 mt-12 border-t border-indigo-100 bg-gradient-to-r from-blue-50 to-indigo-50 w-full rounded-2xl"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-3">
            <Sparkles className="h-4 w-4 text-indigo-400 mr-2" />
            <span className="text-indigo-600 font-medium text-sm">Elevando negocios al siguiente nivel digital</span>
          </div>
          <p className="text-gray-500 text-sm">© 2025 - Deivipluss Todos los derechos reservados.</p>
          
          <div className="mt-6">
            <Link 
              href="/ktdrallounge" 
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al diagnóstico
            </Link>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default RoadmapElLounge;