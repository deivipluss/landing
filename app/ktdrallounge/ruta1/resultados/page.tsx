"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  ClipboardCheck, 
  Download,
  CheckCircle,
  XCircle,
  AlertTriangle,
  HelpCircle,
  Server,
  Globe,
  Users,
  Wifi,
  HardDrive,
  Database,
  Shield,
  Mail,
  Instagram,
  Activity,
  DollarSign,
  BarChart,
  ChevronDown,
  ChevronUp,
  FileText,
  Printer,
  Share2,
  Sparkles
} from "lucide-react";

// Tipos de datos
interface AuditItem {
  name: string;
  status: "ok" | "warning" | "critical" | "unknown";
  notes: string;
}

interface AuditSection {
  section: string;
  items: AuditItem[];
}

const ResultadosAuditoria: React.FC = () => {
  // Datos simulados que vendrían de Google Sheets
  const [auditData, setAuditData] = useState<AuditSection[]>([
    {
      section: "Infraestructura Tecnológica",
      items: [
        { name: "Hardware", status: "warning", notes: "Equipo principal en buen estado, pero dispositivos de back-office requieren actualización. Se recomienda renovar las 2 computadoras de administración y adquirir una tableta para el personal de piso." },
        { name: "Conectividad y Redes", status: "critical", notes: "Conexión WiFi inestable, afecta la experiencia del cliente. Modem antiguo y sin mantenimiento. Recomendación: contratar un servicio empresarial con garantía de ancho de banda y adquirir router profesional con múltiples puntos de acceso." },
        { name: "Software y Licencias", status: "warning", notes: "Algunas aplicaciones sin licencia. Se requiere regularizar y optar por soluciones con soporte adecuado para el tipo de negocio." },
        { name: "Gestión Operativa (ERP/CRM/POS)", status: "ok", notes: "Sistema POS instalado y funcionando correctamente. Potencial para integrar con otras soluciones digitales." },
        { name: "Almacenamiento y Seguridad", status: "critical", notes: "No existe respaldo de datos ni sistemas de seguridad. Urgente implementar respaldos en la nube y protocolos básicos de seguridad." },
      ],
    },
    {
      section: "Ecosistema Digital",
      items: [
        { name: "Dominio Web", status: "warning", notes: "Dominio registrado pero no a nombre de la empresa. Requiere transferencia y renovación para prevenir pérdida de propiedad." },
        { name: "Correos Electrónicos", status: "critical", notes: "No cuentan con correos corporativos. Todo se maneja por cuentas personales, lo que afecta la profesionalidad y seguridad." },
        { name: "Presencia en Redes Sociales", status: "warning", notes: "Perfiles sin verificar y con publicaciones inconsistentes. Buen número de seguidores pero interacción limitada." },
        { name: "Perfiles en Plataformas de Reseñas", status: "ok", notes: "Buena presencia en Google Maps y TripAdvisor. Calificación promedio de 4.2/5. Oportunidad para mejorar con respuestas a comentarios." },
        { name: "Posibles Infracciones Digitales", status: "ok", notes: "No se detectaron infracciones de propiedad intelectual o problemas legales digitales." },
        { name: "Retroalimentación de Clientes", status: "warning", notes: "Comentarios mixtos, destacan problemas en tiempos de respuesta online y coordinación de reservas. Flujo de respuesta inexistente." },
      ],
    },
    {
      section: "Procesos Comerciales",
      items: [
        { name: "Customer Journey", status: "critical", notes: "No existe un mapeo claro del recorrido del cliente. Inconsistencias desde el primer contacto hasta seguimiento post-venta." },
        { name: "Estrategias de Captación", status: "warning", notes: "Marketing actual basado principalmente en promociones eventuales sin estrategia definida. Potencial para implementar campañas estructuradas." },
        { name: "Canales de Venta", status: "warning", notes: "Limitados a presencial y redes sociales. No hay integración con plataformas de delivery o sistema centralizado de reservas." },
        { name: "Eficiencia Operativa", status: "ok", notes: "Buena organización del personal en horas pico. Oportunidad para mejorar con digitalización de procesos." },
        { name: "Rendimiento del Equipo", status: "ok", notes: "Personal comprometido y con buena actitud. Requiere capacitación en herramientas digitales." },
        { name: "Oferta y Promociones", status: "warning", notes: "Promociones creativas pero sin estrategia de medición de efectividad. No existe un sistema para analizar qué funciona mejor." },
      ],
    },
  ]);

  // Estado para controlar qué secciones están expandidas
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    "Infraestructura Tecnológica": true,
    "Ecosistema Digital": true,
    "Procesos Comerciales": true,
  });

  // Contadores para resumen
  const [summary, setSummary] = useState({
    total: 0,
    ok: 0,
    warning: 0,
    critical: 0,
    unknown: 0
  });

  useEffect(() => {
    // Calcular estadísticas
    let total = 0;
    let ok = 0;
    let warning = 0;
    let critical = 0;
    let unknown = 0;

    auditData.forEach(section => {
      section.items.forEach(item => {
        total++;
        if (item.status === "ok") ok++;
        if (item.status === "warning") warning++;
        if (item.status === "critical") critical++;
        if (item.status === "unknown") unknown++;
      });
    });

    setSummary({ total, ok, warning, critical, unknown });
  }, [auditData]);

  // Función para alternar expansión de secciones
  const toggleSection = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  // Iconos para cada sección
  const sectionIcons: { [key: string]: React.ReactNode } = {
    "Infraestructura Tecnológica": <Server className="h-6 w-6 text-blue-500" />,
    "Ecosistema Digital": <Globe className="h-6 w-6 text-indigo-500" />,
    "Procesos Comerciales": <Users className="h-6 w-6 text-green-500" />,
  };

  // Iconos para cada estado
  const statusIcons: { [key: string]: React.ReactNode } = {
    "ok": <CheckCircle className="h-5 w-5 text-green-500" />,
    "warning": <AlertTriangle className="h-5 w-5 text-amber-500" />,
    "critical": <XCircle className="h-5 w-5 text-red-500" />,
    "unknown": <HelpCircle className="h-5 w-5 text-gray-400" />,
  };

  // Colores para cada estado
  const statusColors: { [key: string]: string } = {
    "ok": "bg-green-100 text-green-800 border-green-200",
    "warning": "bg-amber-100 text-amber-800 border-amber-200",
    "critical": "bg-red-100 text-red-800 border-red-200",
    "unknown": "bg-gray-100 text-gray-800 border-gray-200",
  };

  // Iconos específicos para cada ítem
  const itemIcons: { [key: string]: React.ReactNode } = {
    "Hardware": <HardDrive className="h-5 w-5" />,
    "Conectividad y Redes": <Wifi className="h-5 w-5" />,
    "Software y Licencias": <Database className="h-5 w-5" />,
    "Almacenamiento y Seguridad": <Shield className="h-5 w-5" />,
    "Dominio Web": <Globe className="h-5 w-5" />,
    "Correos Electrónicos": <Mail className="h-5 w-5" />,
    "Presencia en Redes Sociales": <Instagram className="h-5 w-5" />,
    "Customer Journey": <Activity className="h-5 w-5" />,
    "Canales de Venta": <DollarSign className="h-5 w-5" />,
    "Oferta y Promociones": <BarChart className="h-5 w-5" />,
  };

  // Calcular el porcentaje de salud digital
  const healthScore = Math.round((summary.ok / summary.total) * 100);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Back navigation */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link href="/ktdrallounge/ruta1" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium group">
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="border-b border-transparent group-hover:border-blue-600">Volver a la Hoja de Ruta</span>
        </Link>
      </motion.div>
      
      {/* Header */}
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
          RESULTADOS DE AUDITORÍA DIGITAL
        </motion.h1>
        <motion.p 
          className="text-gray-600 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El Lounge | Abril 2025
        </motion.p>
      </motion.div>
      
      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-200"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Resumen del Estado Digital</h2>
            <p className="text-gray-600">
              Análisis completo realizado el 3 de abril, 2025
            </p>
          </div>
          
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg font-medium flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              PDF
            </button>
            <button className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg font-medium flex items-center">
              <Printer className="h-4 w-4 mr-2" />
              Imprimir
            </button>
            <button className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg font-medium flex items-center">
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-bold text-indigo-800 mb-4">Salud Digital</h3>
            
            <div className="flex items-center gap-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={healthScore > 60 ? "#4ADE80" : healthScore > 30 ? "#FBBF24" : "#F87171"}
                    strokeWidth="3"
                    strokeDasharray={`${healthScore}, 100`}
                    style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold text-gray-800">{healthScore}%</span>
                  <span className="text-xs text-gray-500">Salud General</span>
                </div>
              </div>
              
              <div className="space-y-2 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium flex items-center">
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    Elementos OK
                  </span>
                  <span className="text-gray-900 font-bold">{summary.ok}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium flex items-center">
                    <div className="h-3 w-3 bg-amber-500 rounded-full mr-2"></div>
                    Requieren Atención
                  </span>
                  <span className="text-gray-900 font-bold">{summary.warning}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    Estado Crítico
                  </span>
                  <span className="text-gray-900 font-bold">{summary.critical}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recomendaciones Clave</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="p-1 rounded-full bg-red-100 mr-2 mt-0.5">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-gray-700">Mejorar urgentemente la conectividad de red para clientes y operaciones.</span>
              </li>
              <li className="flex items-start">
                <div className="p-1 rounded-full bg-red-100 mr-2 mt-0.5">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-gray-700">Implementar sistema profesional de correos corporativos y respaldos.</span>
              </li>
              <li className="flex items-start">
                <div className="p-1 rounded-full bg-amber-100 mr-2 mt-0.5">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                </div>
                <span className="text-gray-700">Regularizar registro de dominio web y perfiles sociales a nombre de la empresa.</span>
              </li>
              <li className="flex items-start">
                <div className="p-1 rounded-full bg-amber-100 mr-2 mt-0.5">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                </div>
                <span className="text-gray-700">Desarrollar estrategia de marketing digital medible y consistente.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      
      {/* Detailed Results */}
      <div className="space-y-6">
        {auditData.map((section, index) => (
          <motion.div 
            key={section.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6 border-l-4"
            style={{ 
              borderLeftColor: 
                section.items.filter(i => i.status === "critical").length > 0 
                  ? "#EF4444" 
                  : section.items.filter(i => i.status === "warning").length > 0 
                    ? "#F59E0B" 
                    : "#10B981" 
            }}
          >
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(section.section)}
            >
              <div className="flex items-center">
                {sectionIcons[section.section]}
                <h2 className="text-xl font-bold text-gray-800 ml-2">{section.section}</h2>
                
                <div className="flex ml-4 space-x-2">
                  {section.items.filter(i => i.status === "ok").length > 0 && (
                    <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {section.items.filter(i => i.status === "ok").length}
                    </div>
                  )}
                  {section.items.filter(i => i.status === "warning").length > 0 && (
                    <div className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full flex items-center">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {section.items.filter(i => i.status === "warning").length}
                    </div>
                  )}
                  {section.items.filter(i => i.status === "critical").length > 0 && (
                    <div className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full flex items-center">
                      <XCircle className="h-3 w-3 mr-1" />
                      {section.items.filter(i => i.status === "critical").length}
                    </div>
                  )}
                </div>
              </div>
              
              {expandedSections[section.section] ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
            </div>
            
            {expandedSections[section.section] && (
              <div className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <div 
                    key={item.name}
                    className={`p-4 rounded-lg border ${statusColors[item.status]}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full bg-white/50 mr-3`}>
                          {itemIcons[item.name] || <ClipboardCheck className="h-5 w-5" />}
                        </div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                      </div>
                      
                      <div className={`px-3 py-1 rounded-full flex items-center text-sm font-medium`}>
                        {statusIcons[item.status]}
                        <span className="ml-1.5">
                          {item.status === "ok" ? "Correcto" : item.status === "warning" ? "Requiere Atención" : item.status === "critical" ? "Estado Crítico" : "Sin Evaluar"}
                        </span>
                      </div>
                    </div>
                    
                    {item.notes && (
                      <div className="mt-3 ml-12 text-gray-700">
                        <p>{item.notes}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200"
      >
        <h2 className="text-xl font-bold text-indigo-800 mb-4">Próximos Pasos</h2>
        
        <div className="space-y-4">
          <div className="bg-white/70 p-4 rounded-lg border border-indigo-100 flex">
            <div className="p-2 rounded-full bg-indigo-100 mr-3 flex-shrink-0">
              <span className="font-bold text-indigo-600">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-900">Presentación de Resultados</h3>
              <p className="text-gray-700">Programaremos una reunión para discutir estos hallazgos en detalle y resolver cualquier duda sobre las recomendaciones.</p>
            </div>
          </div>
          
          <div className="bg-white/70 p-4 rounded-lg border border-indigo-100 flex">
            <div className="p-2 rounded-full bg-indigo-100 mr-3 flex-shrink-0">
              <span className="font-bold text-indigo-600">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-900">Plan de Implementación</h3>
              <p className="text-gray-700">Elaboraremos un plan detallado para abordar cada punto crítico, con plazos y responsables para cada acción.</p>
            </div>
          </div>
          
          <div className="bg-white/70 p-4 rounded-lg border border-indigo-100 flex">
            <div className="p-2 rounded-full bg-indigo-100 mr-3 flex-shrink-0">
              <span className="font-bold text-indigo-600">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-900">Seguimiento y Evaluación</h3>
              <p className="text-gray-700">Estableceremos métricas claras para medir el progreso y realizaremos evaluaciones periódicas para asegurar mejoras continuas.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <Link
            href="/ktdrallounge/ruta1"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-sm hover:shadow-md transition-all flex items-center"
          >
            Continuar con la Hoja de Ruta
            <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
          </Link>
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
        </div>
      </motion.footer>
    </div>
  );
};

export default ResultadosAuditoria;
