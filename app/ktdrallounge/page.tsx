"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle,
  X,
  ChevronRight,
  Zap,
  Clock,
  Users,
  Calendar,
  Star,
  Shield,
  Search,
  DollarSign,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import HomeNavigation from "@/components/HomeNavigation";

export default function DiagnosticoDigital() {
  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto px-4 flex-1 relative">
        <HomeNavigation />

        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/5 filter blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-purple-600/5 filter blur-[120px] pointer-events-none"></div>

        {/* Contenido */}
        <div className="flex flex-col items-center p-6 space-y-6 w-full max-w-6xl mx-auto relative z-10">
          {/* Título */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Diagnóstico Digital - El Lounge</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Análisis estratégico para la transformación digital de tu negocio
            </p>
          </motion.div>

          {/* Texto explicativo del flujo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#1A1A2E]/50 border border-blue-500/20 rounded-lg p-4 text-center w-full max-w-2xl mb-4"
          >
            <h3 className="text-blue-400 font-semibold mb-1">Camino de Evolución Digital</h3>
            <p className="text-gray-300 text-sm">
              Ruta estratégica para transformar contenido en valor tangible a través de cada etapa
            </p>
          </motion.div>

          {/* Flowchart principal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 relative w-full px-4 md:px-8 my-6"
          >
            {/* Contenido - Completado */}
            <Card className="p-3 min-w-[120px] md:min-w-40 text-center bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border-2 border-green-500/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-2">
                <div className="font-semibold text-white flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Contenido
                </div>
              </CardContent>
            </Card>

            <div className="mx-2">
              <ChevronRight className="text-green-500 h-6 w-6" />
            </div>

            {/* Comunidad - Completado */}
            <Card className="p-3 min-w-[120px] md:min-w-40 text-center bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border-2 border-green-500/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-2">
                <div className="font-semibold text-white flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Comunidad
                </div>
              </CardContent>
            </Card>

            <div className="mx-2">
              <X className="text-red-500 h-6 w-6 animate-pulse" />
            </div>

            {/* Social Media - Pendiente */}
            <Card className="p-3 min-w-[120px] md:min-w-40 text-center bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border-2 border-red-400/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-2">
                <div className="font-semibold text-white">Social Media</div>
              </CardContent>
            </Card>

            <div className="mx-2">
              <ChevronRight className="text-red-500 h-6 w-6" />
            </div>

            {/* Software - Pendiente */}
            <Card className="p-3 min-w-[120px] md:min-w-40 text-center bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 border-2 border-red-400/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-2">
                <div className="font-semibold text-white">Software</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bloqueo destacado */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center bg-gradient-to-r from-red-900/30 to-red-800/20 px-4 py-3 rounded-lg border border-red-500/30 mt-4 w-full max-w-xl"
          >
            <AlertCircle className="text-red-500 h-5 w-5 mr-2 flex-shrink-0" />
            <span className="text-red-400 font-medium text-sm md:text-base">Bloqueo crítico: Comunidad → Social Media</span>
          </motion.div>

          {/* Resultados */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Card className="w-full max-w-3xl border border-blue-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 mt-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="text-yellow-500 h-5 w-5 mr-2" />
                  <h3 className="font-bold text-lg text-white">Resultados 2024</h3>
                </div>
                <div className="flex flex-wrap justify-between gap-3 text-sm mb-6">
                  <div className="bg-[#0D0C1D]/60 p-4 rounded-lg shadow border border-green-500/20 flex-1 min-w-[120px] text-center">
                    <div className="text-green-400 font-semibold text-lg">5.2M</div>
                    <div className="text-gray-400">Visualizaciones</div>
                  </div>
                  <div className="bg-[#0D0C1D]/60 p-4 rounded-lg shadow border border-blue-500/20 flex-1 min-w-[120px] text-center">
                    <div className="text-blue-400 font-semibold text-lg">2.4M</div>
                    <div className="text-gray-400">Alcance</div>
                  </div>
                  <div className="bg-[#0D0C1D]/60 p-4 rounded-lg shadow border border-purple-500/20 flex-1 min-w-[120px] text-center">
                    <div className="text-purple-400 font-semibold text-lg">569.7K</div>
                    <div className="text-gray-400">Vistas</div>
                  </div>
                  <div className="bg-[#0D0C1D]/60 p-4 rounded-lg shadow border border-orange-500/20 flex-1 min-w-[120px] text-center">
                    <div className="text-orange-400 font-semibold text-lg">123% + 123%</div>
                    <div className="text-gray-400">Crecimiento</div>
                  </div>
                </div>
                <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold text-blue-400 mb-2">¡Es hora de evolucionar estos números!</h4>
                  <p className="text-gray-300 text-sm">
                    Estos datos son solo el comienzo. Transformémoslos en{" "}
                    <span className="font-semibold text-green-400">ingresos reales</span>,
                    <span className="font-semibold text-purple-400"> comunidad fanática</span>,
                    <span className="font-semibold text-blue-400"> engagement sostenible</span> y
                    <span className="font-semibold text-orange-400"> amplificación exponencial de tu marca</span>. Es momento
                    de <span className="font-semibold text-indigo-400">innovar</span> y convertirte en una
                    <span className="font-semibold text-pink-400"> marca inimitable</span> en tu sector. ¡El momento de dar el
                    siguiente paso es ahora!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* ANALICEMOS LA REALIDAD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full max-w-3xl mt-8"
          >
            <div className="flex items-center justify-center mb-3">
              <Search className="text-red-400 h-6 w-6 mr-2" />
              <h2 className="text-xl font-bold text-red-400 uppercase tracking-wider">ANALICEMOS LA REALIDAD</h2>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-red-500/30 to-purple-500/30 rounded-full"></div>
          </motion.div>

          {/* Recurso Humano Disponible */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Card className="w-full max-w-3xl border border-blue-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 mt-4">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="text-blue-400 h-5 w-5 mr-2" />
                  <h3 className="font-bold text-lg text-white">Recurso Humano Disponible</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Funciona bien */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-400 flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2" /> Funciona bien
                    </h4>
                    <ul className="bg-green-900/20 p-4 rounded-lg border border-green-500/20 text-sm">
                      <li className="mb-2 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Community Manager</span>
                      </li>
                      <li className="mb-2 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Diseñador Gráfico</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Editor de Video</span>
                      </li>
                    </ul>
                  </div>

                  {/* Funciona más o menos */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-yellow-400 flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" /> Funciona más o menos
                    </h4>
                    <ul className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/20 text-sm">
                      <li className="mb-2 flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Fotógrafo</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Videógrafo</span>
                      </li>
                    </ul>
                  </div>

                  {/* Funciona de forma mecánica */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-red-400 flex items-center text-sm">
                      <X className="h-4 w-4 mr-2" /> Funciona mecánicamente
                    </h4>
                    <ul className="bg-red-900/20 p-4 rounded-lg border border-red-500/20 text-sm">
                      <li className="mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Moderadores</span>
                      </li>
                      <li className="mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Área de Planificación</span>
                      </li>
                      <li className="mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Atención al Cliente</span>
                      </li>
                      <li className="mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Área Bartender</span>
                      </li>
                      <li className="mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Área Escenario</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Área Música/DJs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Problemas y Soluciones en columnas paralelas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-10"
          >
            {/* Columna Problemas */}
            <div>
              <h2 className="text-xl font-bold text-red-400 mb-5 flex items-center">
                <X className="h-5 w-5 mr-2" /> Problemas Detectados
              </h2>
              <div className="space-y-4">
                {/* Problema destacado - Reuniones ineficientes */}
                <Card className="border border-red-500/30 bg-gradient-to-br from-red-900/20 to-[#1A1A2E]/40 hover:border-red-500/50 transition-all duration-300 shadow-lg">
                  <CardContent className="p-4 flex items-start">
                    <Clock className="text-red-400 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-semibold">Reuniones ineficientes</span>
                      <p className="text-gray-400 text-sm mt-1">Mucho acuerdo, casi nada de resultados concretos</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Otros problemas */}
                <Card className="border border-red-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 hover:border-red-500/40 transition-all duration-300">
                  <CardContent className="p-4 flex items-start">
                    <div className="text-red-400 mr-3 mt-0.5">•</div>
                    <span className="text-gray-300">Ausencia de visión estratégica global en el entorno digital</span>
                  </CardContent>
                </Card>
                <Card className="border border-red-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 hover:border-red-500/40 transition-all duration-300">
                  <CardContent className="p-4 flex items-start">
                    <div className="text-red-400 mr-3 mt-0.5">•</div>
                    <span className="text-gray-300">Deficiencias en fomentar cultura de trabajo colaborativo</span>
                  </CardContent>
                </Card>
                <Card className="border border-red-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 hover:border-red-500/40 transition-all duration-300">
                  <CardContent className="p-4 flex items-start">
                    <div className="text-red-400 mr-3 mt-0.5">•</div>
                    <span className="text-gray-300">Protocolos de ejecución inexistentes</span>
                  </CardContent>
                </Card>
                <Card className="border border-red-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 hover:border-red-500/40 transition-all duration-300">
                  <CardContent className="p-4 flex items-start">
                    <div className="text-red-400 mr-3 mt-0.5">•</div>
                    <span className="text-gray-300">Objetivos no medibles ni estratégicos</span>
                  </CardContent>
                </Card>
                <Card className="border border-red-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 hover:border-red-500/40 transition-all duration-300">
                  <CardContent className="p-4 flex items-start">
                    <div className="text-red-400 mr-3 mt-0.5">•</div>
                    <span className="text-gray-300">Equipo no comprometido más allá de tareas mecánicas</span>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Columna Soluciones */}
            <div>
              <h2 className="text-xl font-bold text-green-400 mb-5 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" /> Plan de Soluciones
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Realizaré una auditoría completa", desc: "Evaluaré el estado actual digital e interno" },
                  { title: "Estableceré procesos claros", desc: "Definiré roles, valores y prácticas educativas" },
                  { title: "Fijaré objetivos medibles", desc: "Crearé metas concretas para ingresos y engagement" },
                  { title: "Construiré bases digitales sólidas", desc: "Desarrollaré un ecosistema digital profesional" },
                  { title: "Capacitaré a todo el equipo", desc: "Implementaré formación en habilidades digitales" },
                ].map((solution, i) => (
                  <Card key={i} className="border border-green-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 hover:border-green-500/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="font-semibold text-white flex items-center">
                        <span className="bg-green-900/40 text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm border border-green-500/30">
                          {i + 1}
                        </span>
                        {solution.title}
                      </div>
                      <div className="text-gray-400 text-sm mt-1 ml-9">{solution.desc}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Resultados en 35 días */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Card className="w-full max-w-6xl border-2 border-purple-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 mt-10">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Calendar className="text-purple-400 h-5 w-5 mr-2" />
                  <h3 className="font-bold text-xl text-white">Resultados en 35 días</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Card className="border border-purple-500/20 bg-gradient-to-br from-[#0D0C1D]/80 to-[#1A1A2E]/40 shadow-lg mb-6">
                      <CardContent className="p-5">
                        <h4 className="font-semibold text-purple-400 flex items-center uppercase">
                          <Star className="h-4 w-4 mr-2 text-yellow-400" />
                          Gestión Operativa
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Discoteca con todos los sistemas funcionando en sincronía</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Logística, planificación y producción integradas</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">
                              Mozas, mozos, seguridad, barra, escenario y demás informados del día a día del negocio, incluye
                              información básica, ofertas del día, promos vigentes y demás datos
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Shows planificados con antelación y detalle completo</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Plan de emergencia y contingencia para cada evento</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border border-purple-500/20 bg-gradient-to-br from-[#0D0C1D]/80 to-[#1A1A2E]/40 shadow-lg">
                      <CardContent className="p-5">
                        <h4 className="font-semibold text-purple-400 flex items-center uppercase">
                          <Star className="h-4 w-4 mr-2 text-yellow-400" />
                          Gestión de Personal
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Todas las áreas participan en la creación de contenido digital</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">DJs, artistas y bartenders integrados en la estrategia de marca</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Roles definidos con claridad para cada miembro del equipo</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Responsabilidades claras y medibles para cada área</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="border border-purple-500/20 bg-gradient-to-br from-[#0D0C1D]/80 to-[#1A1A2E]/40 shadow-lg mb-6">
                      <CardContent className="p-5">
                        <h4 className="font-semibold text-purple-400 flex items-center uppercase">
                          <Star className="h-4 w-4 mr-2 text-yellow-400" />
                          Gestión de Recursos Multimedia
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Fotógrafo y videógrafo integrados en estrategia digital</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Amplificación de rendimiento en redes sociales</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Contenido de calidad profesional generado constantemente</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Calendarización de contenidos con garantía 100% de cumplimiento</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Moderación activa en todas las redes, comentarios y chats</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Gestión integral de WhatsApp, grupos y canales activos</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border border-purple-500/20 bg-gradient-to-br from-[#0D0C1D]/80 to-[#1A1A2E]/40 shadow-lg">
                      <CardContent className="p-5">
                        <h4 className="font-semibold text-purple-400 flex items-center uppercase">
                          <Shield className="h-4 w-4 mr-2 text-blue-400" />
                          Gestión de Seguridad Digital
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Administración de activos digitales</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Software y cuentas compradas registradas a correo corporativo</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Registro de dominio en internet</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Verificación del perfil Meta para mayor seguridad</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">Biblioteca digital de la marca en la nube para almacenar archivos multimedia</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* PROCESOS 100% FUNCIONALES */}
                <Card className="border-2 border-green-500/30 bg-gradient-to-r from-green-900/20 to-[#1A1A2E]/40 shadow-lg mt-6">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-green-400 flex items-center justify-center text-lg uppercase mb-4">
                      <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
                      Procesos 100% Funcionales
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <p className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">La planificación funciona con precisión y eficiencia</span>
                        </p>
                        <p className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">La logística opera sin contratiempos ni retrasos</span>
                        </p>
                        <p className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">La producción alcanza estándares profesionales</span>
                        </p>
                        <p className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">El contenido en internet genera resultados medibles</span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Los objetivos se cumplen y superan expectativas</span>
                        </p>
                        <p className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Personal capacitado y entrenado para la nueva metodología</span>
                        </p>
                        <p className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Software de seguimiento para marcar progreso y avances</span>
                        </p>
                        <p className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Monitoreo constante para informes a gerencia</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>

          {/* Inversión */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <Card className="w-full max-w-3xl mt-10 border-2 border-yellow-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <DollarSign className="h-10 w-10 text-yellow-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-3">Inversión para tu Transformación Digital</h3>

                  <div className="bg-[#0D0C1D]/60 p-5 rounded-lg border border-yellow-500/20 w-full max-w-md mb-5">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">$1,000 USD</div>
                    <p className="text-gray-400 text-sm">Implementación completa del plan estratégico</p>
                  </div>

                  <div className="bg-green-900/20 p-5 rounded-lg border border-green-500/20 w-full max-w-md mb-5">
                    <div className="text-lg font-semibold text-green-400 mb-1">¡OFERTA ESPECIAL HOY!</div>
                    <div className="text-2xl font-bold text-green-400">Descuento de S/1,000</div>
                    <p className="text-gray-400 text-sm mt-1">Si completas la transacción hoy mismo</p>
                  </div>

                  <button className="bg-gradient-to-r from-yellow-600 to-amber-700 hover:from-yellow-500 hover:to-amber-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-yellow-600/20 transition-all duration-300 mt-2 flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Asegurar mi Transformación Digital
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mb-12"
          >
            <Card className="w-full max-w-3xl mt-8 border-2 border-blue-500/20 bg-gradient-to-br from-[#1A1A2E]/80 to-[#1A1A2E]/40">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">¿Listo para transformar tu estrategia digital?</h3>
                <p className="text-gray-300 mb-5">
                  Implementemos juntos este plan de acción para superar los bloqueos actuales
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-600/20 transition-all duration-300">
                  Iniciar Transformación
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2025 - Deivipluss. ¡Todos los derechos reservados!
      </footer>
    </div>
  );
}

