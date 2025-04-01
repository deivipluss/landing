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
  Bell
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
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const icons = [
    <ClipboardCheck key="audit" className="h-6 w-6 text-blue-500" />,
    <CalendarIcon2 key="planning" className="h-6 w-6 text-teal-500" />,
    <Users key="culture" className="h-6 w-6 text-green-500" />,
    <Settings key="processes" className="h-6 w-6 text-purple-500" />,
    <Leaf key="modern" className="h-6 w-6 text-emerald-500" />,
    <BarChart2 key="metrics" className="h-6 w-6 text-amber-500" />,
    <Database key="digital" className="h-6 w-6 text-indigo-500" />,
    <BookOpen key="training" className="h-6 w-6 text-red-500" />
  ];

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      {/* Back navigation */}
      <div className="mb-6">
        <Link href="/ktdrallounge" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Diagnóstico Digital
        </Link>
      </div>
      
      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
          Hoja de Ruta - Transformación Digital de El Lounge
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Plan estratégico para implementar en 35 días y transformar completamente 
          la operación digital y comercial de El Lounge.
        </p>
      </motion.div>
      
      {/* Timeline visualization */}
      <div className="relative mb-16 hidden md:block">
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>
        <div className="flex justify-between absolute w-full" style={{ top: "-12px" }}>
          {[1, 2, 3, 4, 5, 6, 7].map((step, index) => (
            <motion.div 
              key={step}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="h-6 w-6 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center text-xs font-bold text-purple-700"
            >
              {step}
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between absolute w-full mt-2">
          {["Días 1-3", "Días 4-6", "Días 7-9", "Días 10-11", "Días 12-13", "Días 14-15", "Días 16-20"].map((days, index) => (
            <div key={days} className="text-xs text-gray-600 text-center" style={{ width: "14%", marginLeft: index === 0 ? "-10px" : index === 6 ? "10px" : "0" }}>
              {days}
            </div>
          ))}
        </div>
      </div>
      
      {/* Roadmap sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {/* Section 1 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 border border-gray-300 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start">
            <div className="mr-4 bg-blue-100 p-3 rounded-full">
              {icons[0]}
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center flex-wrap">
                <h2 className="text-2xl font-semibold text-gray-800">1. Auditoría Completa</h2>
                <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-700 font-medium mt-1 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2-3 de abril, 2025</span>
                </div>
              </div>
              <p className="text-gray-700 my-2">
                Objetivo: Realizaré un análisis profundo del ecosistema digital y operatividad comercial de <i>El Lounge</i> para identificar bloqueos y oportunidades de mejora.
              </p>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-blue-700">Análisis de Infraestructura Tecnológica</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2 ml-2">
                    <li>Evaluación del estado y capacidad del hardware utilizado en el negocio.</li>
                    <li>Diagnóstico de conectividad y redes.</li>
                    <li>Verificación del software y activos digitales adquiridos por la empresa.</li>
                    <li>Revisión de software de gestión operativa (ERP, CRM, POS, etc.).</li>
                    <li>Verificación de almacenamiento y seguridad de datos.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-blue-700">Análisis del Ecosistema Digital</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2 ml-2 space-y-2">
                    <li>Registro de todas las cuentas digitales de la empresa.</li>
                    
                    <li>Verificación de disponibilidad de dominio.</li>
                    
                    <li>Comprobación de disponibilidad de correos electrónicos.</li>
                    
                    <li>Verificación de todas las cuentas sociales registradas a nombre del negocio.</li>
                    
                    <li>Diagnóstico de presencia en redes sociales.</li>
                    
                    <li>Verificación de infracciones del negocio en redes sociales o registros de internet.</li>
                    
                    <li>Evaluación del feedback y comentarios de clientes en internet (Google, TripAdvisor, redes sociales, etc).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-blue-700">Análisis de Procesos Comerciales y Recurso Humano</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2 ml-2">
                    <li>Mapeo del customer journey.</li>
                    <li>Evaluación de estrategias de captación y fidelización.</li>
                    <li>Revisión de canales de venta y reservas.</li>
                    <li>Diagnóstico de eficiencia operativa del equipo.</li>
                    <li>Evaluación del compromiso y efectividad del recurso humano.</li>
                    <li>Análisis de la oferta vigente, promociones y evaluación de la carta de productos.</li>
                  </ul>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-300 shadow-sm">
                  <div className="flex items-center justify-center mb-2">
                    <Video className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-bold text-blue-800 uppercase tracking-wider">PRIMERA REUNIÓN (VIRTUAL)</h3>
                  </div>
                  <p className="text-gray-700">
                    Al finalizar esta etapa, realizaré una reunión virtual con todos los líderes de equipo para presentarme, compartir los hallazgos iniciales y establecer las expectativas del proceso. Incluiré a los líderes de barra, escenario, atención al cliente, seguridad y demás áreas clave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 border border-gray-300 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start">
            <div className="mr-4 bg-teal-100 p-3 rounded-full">
              {icons[1]}
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center flex-wrap">
                <h2 className="text-2xl font-semibold text-gray-800">2. Metodologías para la Planificación</h2>
                <div className="flex items-center bg-teal-100 px-3 py-1 rounded-full text-sm text-teal-700 font-medium mt-1 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>4-5 de abril, 2025</span>
                </div>
              </div>
              
              <ul className="list-disc list-inside text-gray-600 mt-2 ml-2">
                <li>Calendarización de contenido en redes sociales con objetivos claros y medibles.</li>
                <li>Establecimiento de protocolos de producción de contenido de alta calidad.</li>
                <li>Metodologías para moderación efectiva de comunidades digitales.</li>
                <li>Optimización de presencia en redes sociales para maximizar alcance e interacción.</li>
                <li>Desarrollo de flujos de trabajo para gestión de solicitudes y consultas en línea.</li>
                <li>Planificación estratégica de campañas digitales alineadas con eventos físicos.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 3 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 border border-gray-300 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start">
            <div className="mr-4 bg-green-100 p-3 rounded-full">
              {icons[2]}
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center flex-wrap">
                <h2 className="text-2xl font-semibold text-gray-800">3. Implantación de Cultura Organizativa y Colaborativa</h2>
                <div className="flex items-center bg-green-100 px-3 py-1 rounded-full text-sm text-green-700 font-medium mt-1 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>6 de abril, 2025</span>
                </div>
              </div>
              
              <div className="bg-green-50 p-3 rounded-md my-3 border border-green-300">
                <div className="flex items-center mb-1">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-green-800">SEGUNDA REUNIÓN (PRESENCIAL) - 6 DE ABRIL</h3>
                </div>
                <p className="text-gray-700">
                  Realizaré una sesión presencial con los líderes de cada equipo para profundizar en su rol dentro del proceso de optimización, eficiencia empresarial y transformación digital. El objetivo será lograr que cada líder comprenda claramente cómo su área contribuye al ecosistema digital completo.
                </p>
              </div>
              
              <ul className="list-disc list-inside text-gray-600 mt-2 ml-2">
                <li>Definiré roles operativos, adicionales y/o digitales en cada área de operación.</li>
                <li>Crearé protocolos de comunicación interna utilizando herramientas como Trello, Notion, WhatsApp, entre otras.</li>
                <li>Fomentaré la necesidad de adaptarse a la modernidad y digitalización, tanto como individuos como en la empresa, para mantener una cultura de innovación continua.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Third Meeting */}
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-300 shadow-sm my-4">
          <div className="flex items-center justify-center mb-2">
            <MessageSquare className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="text-lg font-bold text-purple-800 uppercase tracking-wider">TERCERA REUNIÓN (PRESENCIAL) - 8 DE ABRIL</h3>
          </div>
          <p className="text-gray-700">
            Previo al establecimiento de procesos operativos, realizaré una reunión presencial con todos los líderes para validar las propuestas de mejora y asegurar que se adapten a la realidad operativa de El Lounge. Presentaré un borrador de los procesos y recogeré feedback para su implementación efectiva.
          </p>
        </div>

        {/* Section 4 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 border border-gray-300 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start">
            <div className="mr-4 bg-purple-100 p-3 rounded-full">
              {icons[3]}
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center flex-wrap">
                <h2 className="text-2xl font-semibold text-gray-800">4. Establecimiento de Procesos Operativos y Comerciales</h2>
                <div className="flex items-center bg-purple-100 px-3 py-1 rounded-full text-sm text-purple-700 font-medium mt-1 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>8 de abril, 2025</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 mt-2 ml-2">
                <li>Implementaré metodologías para planificación de eventos y promociones.</li>
                <li>Crearé un sistema de registro de clientes y bases de datos.</li>
                <li>Estableceré un flujo de atención al cliente eficiente.</li>
                <li>Definiré procesos para la gestión de eventos y promociones especiales.</li>
                <li>Crearé protocolos de respuesta rápida para situaciones críticas o emergencias.</li>
                <li>Introduciré buenas prácticas post-venta y de post-atención al cliente.</li>
                <li>Implementaré metodologías efectivas de seguimiento al cliente y conversión de prospectos.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Fourth Meeting */}
        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-300 shadow-sm my-4">
          <div className="flex items-center justify-center mb-2">
            <Video className="h-5 w-5 text-emerald-600 mr-2" />
            <h3 className="text-lg font-bold text-emerald-800 uppercase tracking-wider">CUARTA REUNIÓN (VIRTUAL) - 8 DE ABRIL</h3>
          </div>
          <p className="text-gray-700">
            Organizaré una sesión virtual para revisar el progreso alcanzado hasta el momento y alinear la visión empresarial con las prácticas modernas. Esta reunión servirá como punto intermedio para evaluar la adaptación del equipo y realizar ajustes necesarios en la implementación.
          </p>
        </div>

        {/* Section 5 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 border border-gray-300 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start">
            <div className="mr-4 bg-emerald-100 p-3 rounded-full">
              {icons[4]}
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center flex-wrap">
                <h2 className="text-2xl font-semibold text-gray-800">5. Orientación de la Cultura Empresarial hacia la Modernidad</h2>
                <div className="flex items-center bg-emerald-100 px-3 py-1 rounded-full text-sm text-emerald-700 font-medium mt-1 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>8 de abril, 2025</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 mt-2 ml-2">
                <li>Introduciré prácticas eco-friendly y sostenibles en la operación diaria.</li>
                <li>Adaptaré estrategias de marketing digital responsables y conscientes.</li>
                <li>Fomentaré un ambiente de trabajo que valore la innovación y el pensamiento creativo.</li>
                <li>Implementaré políticas de responsabilidad social empresarial.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 6 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 border border-gray-300 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start">
            <div className="mr-4 bg-amber-100 p-3 rounded-full">
              {icons[5]}
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center flex-wrap">
                <h2 className="text-2xl font-semibold text-gray-800">6. Fijación de Objetivos Medibles</h2>
                <div className="flex items-center bg-amber-100 px-3 py-1 rounded-full text-sm text-amber-700 font-medium mt-1 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>9-10 de abril, 2025</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 mt-2 ml-2">
                <li>Definiré indicadores clave de rendimiento (KPIs) para engagement.</li>
                <li>Fijaré instrumentos de medición para monitorear el progreso.</li>
                <li>Estableceré metas realistas pero ambiciosas para cada área del negocio.</li>
                <li>Implementaré sistemas de seguimiento para medir las actividades del equipo de cara a la eficiencia y rentabilidad.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 7 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500 border border-gray-300 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start">
            <div className="mr-4 bg-indigo-100 p-3 rounded-full">
              {icons[6]}
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center flex-wrap">
                <h2 className="text-2xl font-semibold text-gray-800">7. Construcción de Bases Digitales Sólidas</h2>
                <div className="flex items-center bg-indigo-100 px-3 py-1 rounded-full text-sm text-indigo-700 font-medium mt-1 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>11 de abril, 2025</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 mt-2 ml-2">
                <li>Optimizaré perfiles en redes sociales y plataformas de atención al cliente.</li>
                <li>Implementaré herramientas de automatización para tareas repetitivas.</li>
                <li>Realizaré el registro formal de dominio a nombre de la empresa.</li>
                <li>Configuración de correo electrónico corporativo para comunicaciones oficiales.</li>
                <li>Actualizaré los perfiles sociales con los nuevos datos corporativos.</li>
                <li>Verificaré los perfiles de empresa en Meta para aumentar la confiabilidad.</li>
                <li>Estableceré una nube propia de la empresa para almacenamiento seguro de archivos digitales.</li>
                <li>Aseguraré que el software y otros activos digitales adquiridos estén bajo un registro propio y formal.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 8 */}
        <motion.section 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 border border-gray-300 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start">
            <div className="mr-4 bg-red-100 p-3 rounded-full">
              {icons[7]}
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center flex-wrap">
                <h2 className="text-2xl font-semibold text-gray-800">8. Capacitación del Equipo</h2>
                <div className="flex items-center bg-red-100 px-3 py-1 rounded-full text-sm text-red-700 font-medium mt-1 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>13-14 de abril, 2025</span>
                </div>
              </div>
              
              <div className="bg-red-50 p-3 rounded-md my-3 border border-red-300">
                <div className="flex items-center mb-1">
                  <MessageSquare className="h-5 w-5 text-red-600 mr-2" />
                  <h3 className="font-bold text-red-800">REUNIONES DE CAPACITACIÓN (PRESENCIALES)</h3>
                </div>
                <p className="text-gray-700">
                  Organizaré dos sesiones presenciales de capacitación intensiva los días 13 y 14 de abril. Estas reuniones serán fundamentales para asegurar que todo el equipo comprenda las nuevas herramientas, procesos y metodologías implementadas. Trabajaremos con casos prácticos y situaciones reales del negocio.
                </p>
              </div>
              
              <ul className="list-disc list-inside text-gray-600 mt-2 ml-2">
                <li>Entrenamiento en herramientas digitales relevantes para cada área.</li>
                <li>Desarrollo de pensamiento estratégico orientado al negocio digital.</li>
                <li>Capacitación en atención al cliente a través de canales digitales.</li>
                <li>Formación en análisis de datos para toma de decisiones.</li>
                <li>Talleres de creatividad y resolución de problemas.</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* Calendario completo de implementación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-4">Calendario de Implementación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-lg border border-indigo-200">
            <h3 className="font-semibold text-indigo-700 mb-2">Primera Semana</h3>
            <ul className="text-sm space-y-1">
              <li className="flex items-center"><span className="font-semibold mr-2">2-3 abril:</span> Auditoría Completa</li>
              <li className="flex items-center"><span className="font-semibold mr-2">4-5 abril:</span> Metodologías para la Planificación</li>
              <li className="flex items-center"><span className="font-semibold mr-2">6 abril:</span> Cultura Organizativa + Segunda Reunión</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg border border-indigo-200">
            <h3 className="font-semibold text-indigo-700 mb-2">Segunda Semana</h3>
            <ul className="text-sm space-y-1">
              <li className="flex items-center"><span className="font-semibold mr-2">8 abril:</span> Procesos Operativos + Tercera y Cuarta Reunión + Cultura Empresarial</li>
              <li className="flex items-center"><span className="font-semibold mr-2">9-10 abril:</span> Fijación de Objetivos</li>
              <li className="flex items-center"><span className="font-semibold mr-2">11 abril:</span> Bases Digitales Sólidas</li>
              <li className="flex items-center"><span className="font-semibold mr-2">13-14 abril:</span> Capacitación del Equipo</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Resultados esperados */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-4">Resultados Esperados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Incremento de la eficiencia operativa en al menos un 40%</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Aumento de engagement en redes sociales superior al 60%</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Crecimiento en ventas de al menos 25% en los siguientes 2 meses</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Reducción de tiempo de respuesta al cliente en un 70%</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Equipo totalmente capacitado y alineado con los objetivos digitales</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Sistemas y procesos digitales optimizados y documentados</p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-300"
      >
        <p className="text-gray-700">
          Este plan implementado entre el 2 y el 14 de abril de 2025 establecerá las bases sólidas para la transformación digital de <i>El Lounge</i>, 
          asegurando un negocio moderno, eficiente y preparado para escalar en el entorno digital.
        </p>
        <div className="mt-4">
          <Link 
            href="/ktdrallounge" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al diagnóstico
          </Link>
        </div>
      </motion.footer>
    </div>
  );
};

export default RoadmapElLounge;
