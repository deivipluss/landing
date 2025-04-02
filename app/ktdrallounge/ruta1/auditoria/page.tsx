"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  ClipboardCheck, 
  Database,
  Save,
  Send,
  Check,
  AlertCircle,
  Wifi,
  Server,
  HardDrive,
  Shield,
  Globe,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Smartphone,
  Users,
  DollarSign,
  Activity,
  Eye,
  BarChart
} from "lucide-react";

// Simulación de datos que se conectarían con Google Sheets
interface AuditData {
  section: string;
  items: {
    name: string;
    status: "ok" | "warning" | "critical" | "unknown";
    notes: string;
  }[];
}

const AuditoriaElLounge: React.FC = () => {
  // Estado para almacenar los datos de la auditoría
  const [auditData, setAuditData] = useState<AuditData[]>([
    {
      section: "Infraestructura Tecnológica",
      items: [
        { name: "Hardware", status: "unknown", notes: "" },
        { name: "Conectividad y Redes", status: "unknown", notes: "" },
        { name: "Software y Licencias", status: "unknown", notes: "" },
        { name: "Gestión Operativa (ERP/CRM/POS)", status: "unknown", notes: "" },
        { name: "Almacenamiento y Seguridad", status: "unknown", notes: "" },
      ],
    },
    {
      section: "Ecosistema Digital",
      items: [
        { name: "Dominio Web", status: "unknown", notes: "" },
        { name: "Correos Electrónicos", status: "unknown", notes: "" },
        { name: "Presencia en Redes Sociales", status: "unknown", notes: "" },
        { name: "Perfiles en Plataformas de Reseñas", status: "unknown", notes: "" },
        { name: "Posibles Infracciones Digitales", status: "unknown", notes: "" },
        { name: "Retroalimentación de Clientes", status: "unknown", notes: "" },
      ],
    },
    {
      section: "Procesos Comerciales",
      items: [
        { name: "Customer Journey", status: "unknown", notes: "" },
        { name: "Estrategias de Captación", status: "unknown", notes: "" },
        { name: "Canales de Venta", status: "unknown", notes: "" },
        { name: "Eficiencia Operativa", status: "unknown", notes: "" },
        { name: "Rendimiento del Equipo", status: "unknown", notes: "" },
        { name: "Oferta y Promociones", status: "unknown", notes: "" },
      ],
    },
  ]);

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Función para actualizar el estado de un ítem
  const updateItemStatus = (sectionIndex: number, itemIndex: number, status: "ok" | "warning" | "critical" | "unknown") => {
    const newData = [...auditData];
    newData[sectionIndex].items[itemIndex].status = status;
    setAuditData(newData);
  };

  // Función para actualizar las notas de un ítem
  const updateItemNotes = (sectionIndex: number, itemIndex: number, notes: string) => {
    const newData = [...auditData];
    newData[sectionIndex].items[itemIndex].notes = notes;
    setAuditData(newData);
  };

  // Simulación de envío a Google Sheets
  const handleSubmit = () => {
    setIsSending(true);
    
    // Aquí iría la lógica de conexión con Google Sheets API
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      
      // Aquí se podría redirigir a la página de resultados
      setTimeout(() => {
        window.location.href = "/ktdrallounge/ruta1/resultados";
      }, 2000);
    }, 1500);
  };

  // Iconos para cada sección
  const sectionIcons: { [key: string]: React.ReactNode } = {
    "Infraestructura Tecnológica": <Server className="h-6 w-6 text-blue-500" />,
    "Ecosistema Digital": <Globe className="h-6 w-6 text-indigo-500" />,
    "Procesos Comerciales": <Users className="h-6 w-6 text-green-500" />,
  };

  // Iconos para cada estado
  const statusIcons: { [key: string]: React.ReactNode } = {
    "ok": <Check className="h-5 w-5 text-green-500" />,
    "warning": <AlertCircle className="h-5 w-5 text-amber-500" />,
    "critical": <AlertCircle className="h-5 w-5 text-red-500" />,
    "unknown": <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>,
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
          AUDITORÍA DIGITAL - EL LOUNGE
        </motion.h1>
        <motion.p 
          className="text-gray-600 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Formulario para registro de hallazgos y evaluación del estado actual digital del negocio.
        </motion.p>
      </motion.div>
      
      {/* Audit Form */}
      <div className="space-y-8 mb-16">
        {auditData.map((section, sectionIndex) => (
          <motion.div 
            key={section.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + sectionIndex * 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-indigo-500"
          >
            <div className="flex items-center mb-4">
              {sectionIcons[section.section]}
              <h2 className="text-xl font-bold text-gray-800 ml-2">{section.section}</h2>
            </div>
            
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={item.name} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex flex-wrap md:flex-nowrap items-start gap-4">
                    <div className="flex items-center min-w-[250px]">
                      <div className="p-2 rounded-full bg-gray-100 mr-3">
                        {itemIcons[item.name] || <ClipboardCheck className="h-5 w-5 text-gray-600" />}
                      </div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 md:gap-4">
                      {["ok", "warning", "critical", "unknown"].map((status) => (
                        <button
                          key={status}
                          onClick={() => updateItemStatus(sectionIndex, itemIndex, status as any)}
                          className={`
                            px-3 py-2 rounded-lg flex items-center border
                            ${item.status === status 
                              ? statusColors[status] 
                              : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}
                          `}
                        >
                          {statusIcons[status]}
                          <span className="ml-2 font-medium capitalize">
                            {status === "ok" ? "Correcto" : 
                             status === "warning" ? "Atención" : 
                             status === "critical" ? "Crítico" : "Sin evaluar"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <textarea
                      placeholder="Notas sobre este elemento..."
                      value={item.notes}
                      onChange={(e) => updateItemNotes(sectionIndex, itemIndex, e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      rows={2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center"
      >
        <button
          onClick={handleSubmit}
          disabled={isSending || isSent}
          className={`
            px-8 py-4 rounded-xl font-medium text-lg flex items-center shadow-md
            ${isSent 
              ? "bg-green-600 text-white" 
              : "bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"}
          `}
        >
          {isSending ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Enviando...
            </>
          ) : isSent ? (
            <>
              <Check className="h-5 w-5 mr-2" />
              Enviado
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Enviar Resultados
            </>
          )}
        </button>
      </motion.div>
      
      {/* Instrucciones para el auditor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-200"
      >
        <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
          <ClipboardCheck className="h-5 w-5 mr-2" />
          Instrucciones para el Auditor
        </h3>
        <ul className="space-y-2 text-blue-900">
          <li className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
              <Check className="h-4 w-4 text-blue-700" />
            </div>
            <span>Evalúa cada elemento con el estado correspondiente: <strong>Correcto</strong> (funciona bien), <strong>Atención</strong> (requiere mejoras), <strong>Crítico</strong> (necesita solución urgente), o déjalo como <strong>Sin evaluar</strong>.</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
              <Check className="h-4 w-4 text-blue-700" />
            </div>
            <span>Añade notas detalladas que ayuden a entender la situación actual y las recomendaciones.</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
              <Check className="h-4 w-4 text-blue-700" />
            </div>
            <span>Una vez completado, envía los resultados para generar el informe que se presentará al cliente.</span>
          </li>
        </ul>
      </motion.div>
      
      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="py-6 mt-12 border-t border-indigo-100 bg-gradient-to-r from-blue-50 to-indigo-50 w-full rounded-2xl"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2025 - Deivipluss Todos los derechos reservados.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default AuditoriaElLounge;
