"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check,
  Clock,
  AlertTriangle,
  CheckCircle,
  Sparkles,
  Music,
  Utensils,
  Camera,
  Glass,
  Mic,
  Shield,
  ChevronRight,
  FileText,
  Printer,
  Share2,
  Search,
  Star,
  ArrowUpRight,
  PieChart,
  BarChart,
  Target,
  Zap
} from "lucide-react";

// Datos de análisis de procesos
const processData = [
  {
    area: "DJ'S",
    icon: <Music className="h-5 w-5" />,
    color: "bg-blue-500",
    badgeColor: "bg-blue-100 text-blue-700",
    prioridad1: [
      { title: "Estrés y ansiedad como distractores", action: "Sesiones de lectura ligera, videojuegos, live stream" },
      { title: "Ensayos antes de eventos relevantes", action: "Se implementa calendarización de ensayos" },
      { title: "Problemas con copyright", action: "Se usan bibliotecas libres o se contrata Epidemic Sound" },
    ],
    prioridad2: [
      { title: "Pedidos musicales hasta 30% de aforo", action: "Probar software para la experiencia" },
      { title: "Mejora de equipo de sonido", action: "Analizar y planificar mejora a mediano plazo" },
      { title: "Luces sincronizadas con sonido", action: "Analizar y planificar mejora a mediano plazo" },
    ]
  },
  {
    area: "MOZOS",
    icon: <Utensils className="h-5 w-5" />,
    color: "bg-amber-500",
    badgeColor: "bg-amber-100 text-amber-700",
    prioridad1: [
      { title: "Falta de procesos y comunicación", action: "Implementar protocolo de inducción" },
      { title: "Deficiente proceso de atención", action: "Reestructurar proceso de atención" },
      { title: "Distribución en zonas mejora eficiencia", action: "Reanalizar distribución del equipo" },
      { title: "Demora con vasos y hielos", action: "Evaluar recursos en cada despacho" },
      { title: "Carta no adaptada a universitarios", action: "Crear productos accesibles y promociones" },
      { title: "Productos con cócteles", action: "Crear cócteles en la carta" },
    ],
    prioridad2: [
      { title: "Uso de software de gestión", action: "Analizar y planificar implementación" },
    ]
  },
  {
    area: "MULTIMEDIA",
    icon: <Camera className="h-5 w-5" />,
    color: "bg-purple-500",
    badgeColor: "bg-purple-100 text-purple-700",
    prioridad1: [
      { title: "Falta de equipamiento", action: "Equipar con luces, rebote y micrófonos" },
      { title: "Desorganización de sesiones", action: "Crear flujo de trabajo con roles y planificación" },
      { title: "Problemas con copyright", action: "Suscripción a Epidemic Sound" },
    ],
    prioridad2: []
  },
  {
    area: "BARTENDER",
    icon: <Glass className="h-5 w-5" />,
    color: "bg-red-500",
    badgeColor: "bg-red-100 text-red-700",
    prioridad1: [
      { title: "Falta de cristalería en barra", action: "Analizar e implementar control de inventario" },
      { title: "Poco enfoque en coctelería", action: "Jerarquizar cócteles en planeamiento y marketing" },
      { title: "Falta de insumos", action: "Asegurar insumos con inventario y justificación" },
      { title: "Reducción de carta", action: "Optimizar carta para mejorar experiencia y rotación" },
    ],
    prioridad2: []
  },
  {
    area: "ESCENARIO",
    icon: <Mic className="h-5 w-5" />,
    color: "bg-emerald-500",
    badgeColor: "bg-emerald-100 text-emerald-700",
    prioridad1: [
      { title: "Improvisación en shows", action: "Sistema de planificación y ejecución con objetivos" },
      { title: "Descoordinación DJ's", action: "Inducción para colaboración" },
      { title: "Falta de originalidad/vestuario", action: "Planificación con show de mediano-alto estándar" },
      { title: "Desuso de pantallas", action: "Implementar uso como operación integrada" },
    ],
    prioridad2: []
  },
  {
    area: "SEGURIDAD",
    icon: <Shield className="h-5 w-5" />,
    color: "bg-indigo-500",
    badgeColor: "bg-indigo-100 text-indigo-700",
    prioridad1: [
      { title: "Falta de identificación visible", action: "Implementar chalecos o distintivos" },
      { title: "No se registran incidencias", action: "Protocolos para apuntar ocurrencias a mano" },
      { title: "Frío en el trabajo", action: "Proveer bebidas calientes durante turnos nocturnos" },
    ],
    prioridad2: [
      { title: "Ampliación de casilleros", action: "Evaluar y planificar a mediano plazo" },
      { title: "Detección con metales", action: "Evaluar y planificar implementación" },
    ]
  }
];

const AnalisisProcesos: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string>(processData[0].area);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"area" | "issues">("area");

  // Animación para elementos
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

  // Filtrar y ordenar los datos
  const filteredData = processData
    .filter(item => item.area.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "area") {
        return a.area.localeCompare(b.area);
      } else {
        const aIssues = (a.prioridad1?.length || 0) + (a.prioridad2?.length || 0);
        const bIssues = (b.prioridad1?.length || 0) + (b.prioridad2?.length || 0);
        return bIssues - aIssues;
      }
    });

  const currentAreaData = processData.find(item => item.area === activeArea) || processData[0];
  const totalIssues = processData.reduce((acc, area) => {
    return acc + (area.prioridad1?.length || 0) + (area.prioridad2?.length || 0);
  }, 0);
  const urgentIssues = processData.reduce((acc, area) => {
    return acc + (area.prioridad1?.length || 0);
  }, 0);
  const recommendedIssues = processData.reduce((acc, area) => {
    return acc + (area.prioridad2?.length || 0);
  }, 0);

  // Cálculo de eficiencia esperada post-implementación
  const efficiencyImprovement = 45; // porcentaje estimado de mejora

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
          ANÁLISIS DE PROCESOS OPERATIVOS
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

      {/* Summary Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-200"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Resumen de Hallazgos</h2>
            <p className="text-gray-600">
              Análisis completo de procesos operativos - Abril, 2025
            </p>
          </div>
          
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg font-medium flex items-center transition-colors">
              <FileText className="h-4 w-4 mr-2" />
              PDF
            </button>
            <button className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg font-medium flex items-center transition-colors">
              <Printer className="h-4 w-4 mr-2" />
              Imprimir
            </button>
            <button className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg font-medium flex items-center transition-colors">
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl-lg">
              100%
            </div>
            <h3 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
              <PieChart className="h-5 w-5 mr-2 text-indigo-600" />
              Áreas Analizadas
            </h3>
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center text-indigo-700 text-2xl font-bold shadow-inner">
                {processData.length}
              </div>
              <div className="flex flex-col">
                <p className="text-gray-700 text-sm">Departamentos críticos para la experiencia del cliente</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs px-2 py-1 rounded-bl-lg">
              Total
            </div>
            <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-amber-600" />
              Hallazgos Totales
            </h3>
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 h-16 w-16 rounded-full flex items-center justify-center text-amber-700 text-2xl font-bold shadow-inner">
                {totalIssues}
              </div>
              <div className="flex flex-col">
                <p className="text-gray-700 text-sm">Oportunidades de mejora en todos los departamentos</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg">
              Urgente
            </div>
            <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-red-600" />
              Prioridad Alta
            </h3>
            <div className="flex items-center gap-4">
              <div className="bg-red-100 h-16 w-16 rounded-full flex items-center justify-center text-red-700 text-2xl font-bold shadow-inner">
                {urgentIssues}
              </div>
              <div className="flex flex-col">
                <p className="text-gray-700 text-sm">Requieren implementación inmediata</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg">
              Estimado
            </div>
            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-green-600" />
              Mejora Esperada
            </h3>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center text-green-700 text-2xl font-bold shadow-inner">
                {efficiencyImprovement}%
              </div>
              <div className="flex flex-col">
                <p className="text-gray-700 text-sm">Incremento en eficiencia operativa post-implementación</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Department filtering and tabs */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-gray-800">Análisis por Departamento</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar área..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600 w-full md:w-auto">
              <span>Ordenar por:</span>
              <button
                onClick={() => setSortBy("area")}
                className={`px-3 py-1 rounded-lg ${sortBy === "area" ? "bg-indigo-100 text-indigo-700 font-medium" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                Área
              </button>
              <button
                onClick={() => setSortBy("issues")}
                className={`px-3 py-1 rounded-lg ${sortBy === "issues" ? "bg-indigo-100 text-indigo-700 font-medium" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                Hallazgos
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="flex space-x-2">
            {filteredData.map((item) => (
              <motion.button
                key={item.area}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveArea(item.area)}
                className={`px-4 py-2 rounded-lg font-medium flex items-center whitespace-nowrap transition-all ${
                  activeArea === item.area 
                    ? "bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-sm" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                <div className={`w-7 h-7 rounded-full ${item.color} flex items-center justify-center mr-2 shadow-inner`}>
                  {item.icon}
                </div>
                <span>{item.area}</span>
                <div className={`ml-2 ${item.badgeColor} text-xs px-1.5 py-0.5 rounded-full font-normal`}>
                  {(item.prioridad1?.length || 0) + (item.prioridad2?.length || 0)}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          key={activeArea}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-red-800 flex items-center gap-2">
                <Check className="h-5 w-5" />
                Prioridad 1 
                <span className="text-sm font-normal bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                  {currentAreaData.prioridad1?.length || 0}
                </span>
              </h3>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Se Ejecuta Inmediatamente
              </span>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-red-100 shadow-sm h-[calc(100%-60px)] overflow-auto">
              <div className="space-y-4">
                {currentAreaData.prioridad1?.length > 0 ? (
                  currentAreaData.prioridad1.map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 bg-red-50/50 rounded-lg border border-red-100 hover:shadow-sm transition-all duration-200"
                    >
                      <h4 className="text-base font-semibold text-gray-800 mb-1 flex items-center">
                        <span className="inline-block w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs flex items-center justify-center mr-2">{index + 1}</span>
                        {item.title}
                      </h4>
                      <div className="flex items-start pl-8">
                        <ChevronRight className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{item.action}</p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-32 text-gray-400">
                    <AlertTriangle className="h-10 w-10 mb-2" />
                    <p className="text-center italic">No hay elementos de prioridad 1 para esta área.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-amber-800 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Prioridad 2
                <span className="text-sm font-normal bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                  {currentAreaData.prioridad2?.length || 0}
                </span>
              </h3>
              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                Se Recomienda Implementar
              </span>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-amber-100 shadow-sm h-[calc(100%-60px)] overflow-auto">
              <div className="space-y-4">
                {currentAreaData.prioridad2 && currentAreaData.prioridad2.length > 0 ? (
                  currentAreaData.prioridad2.map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 bg-amber-50/50 rounded-lg border border-amber-100 hover:shadow-sm transition-all duration-200"
                    >
                      <h4 className="text-base font-semibold text-gray-800 mb-1 flex items-center">
                        <span className="inline-block w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs flex items-center justify-center mr-2">{index + 1}</span>
                        {item.title}
                      </h4>
                      <div className="flex items-start pl-8">
                        <ChevronRight className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{item.action}</p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-32 text-gray-400">
                    <AlertTriangle className="h-10 w-10 mb-2" />
                    <p className="text-center italic">No hay elementos de prioridad 2 para esta área.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Beneficios esperados */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
      >
        <h2 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
          <Star className="h-5 w-5 mr-2 text-indigo-600" />
          Beneficios Esperados de la Implementación
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/80 p-4 rounded-lg border border-indigo-100 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-100 rounded-full -mt-10 -mr-10 flex items-center justify-center">
              <Zap className="h-6 w-6 text-indigo-500 ml-3 mb-3" />
            </div>
            <h3 className="font-semibold text-indigo-900 mb-2 text-lg">Mejora Operativa</h3>
            <p className="text-gray-700 z-10">Optimización de procesos clave que incrementará la eficiencia del personal en cada área específica, reduciendo tiempos muertos y mejorando la experiencia del cliente.</p>
            <div className="mt-auto pt-3">
              <div className="text-sm text-indigo-700 font-semibold mt-2 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +45% eficiencia estimada
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg border border-indigo-100 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-100 rounded-full -mt-10 -mr-10 flex items-center justify-center">
              <Utensils className="h-6 w-6 text-indigo-500 ml-3 mb-3" />
            </div>
            <h3 className="font-semibold text-indigo-900 mb-2 text-lg">Experiencia Mejorada</h3>
            <p className="text-gray-700 z-10">Una experiencia más fluida y de mayor calidad para los clientes, desde el momento de entrada hasta su salida del local, con servicios mejor coordinados y personalizados.</p>
            <div className="mt-auto pt-3">
              <div className="text-sm text-indigo-700 font-semibold mt-2 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +30% satisfacción estimada
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg border border-indigo-100 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-100 rounded-full -mt-10 -mr-10 flex items-center justify-center">
              <PieChart className="h-6 w-6 text-indigo-500 ml-3 mb-3" />
            </div>
            <h3 className="font-semibold text-indigo-900 mb-2 text-lg">Incremento en Ventas</h3>
            <p className="text-gray-700 z-10">Gracias a la optimización de la carta, mejor atención, ambientación y servicios mejorados, se espera un aumento significativo en el consumo por mesa y en la rotación de clientes.</p>
            <div className="mt-auto pt-3">
              <div className="text-sm text-indigo-700 font-semibold mt-2 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +25% ingresos estimados
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Implementation Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200"
      >
        <h2 className="text-xl font-bold text-indigo-800 mb-4">Cronograma de Implementación</h2>
        
        <div className="space-y-4">
          <div className="bg-white/70 p-4 rounded-lg border border-indigo-100 flex hover:shadow-md transition-all duration-300">
            <div className="p-2 rounded-full bg-indigo-100 mr-3 flex-shrink-0">
              <span className="font-bold text-indigo-600">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-900 flex items-center">
                Corto Plazo (7-14 días)
                <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">En progreso</span>
              </h3>
              <p className="text-gray-700 mt-1">Implementación de todas las mejoras clasificadas como Prioridad 1, comenzando por aquellas que no requieren inversión significativa.</p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "35%" }}></div>
                </div>
                <span className="ml-2">35%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 p-4 rounded-lg border border-indigo-100 flex hover:shadow-md transition-all duration-300">
            <div className="p-2 rounded-full bg-indigo-100 mr-3 flex-shrink-0">
              <span className="font-bold text-indigo-600">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-900 flex items-center">
                Mediano Plazo (15-30 días)
                <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">Pendiente</span>
              </h3>
              <p className="text-gray-700 mt-1">Implementación de mejoras de Prioridad 1 que requieren alguna inversión o preparación. Análisis y planificación de elementos de Prioridad 2.</p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-gray-400 h-1.5 rounded-full" style={{ width: "0%" }}></div>
                </div>
                <span className="ml-2">0%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 p-4 rounded-lg border border-indigo-100 flex hover:shadow-md transition-all duration-300">
            <div className="p-2 rounded-full bg-indigo-100 mr-3 flex-shrink-0">
              <span className="font-bold text-indigo-600">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-900 flex items-center">
                Largo Plazo (30-60 días)
                <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">Pendiente</span>
              </h3>
              <p className="text-gray-700 mt-1">Implementación progresiva de elementos de Prioridad 2, evaluación de resultados de las primeras implementaciones y ajustes necesarios.</p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-gray-400 h-1.5 rounded-full" style={{ width: "0%" }}></div>
                </div>
                <span className="ml-2">0%</span>
              </div>
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

export default AnalisisProcesos;