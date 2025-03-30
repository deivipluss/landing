"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle,
  X,
  ChevronRight,
  Zap,
  Calendar,
  Star,
  Shield,
  Search,
  DollarSign,
  Sparkles,
  Users,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function DiagnosticoDigital() {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 w-full max-w-6xl mx-auto">
      {/* Título */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Diagnóstico Digital - El Lounge
        </h1>
      </div>

      {/* Texto explicativo del flujo */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center w-full max-w-2xl mb-2">
        <h3 className="text-blue-800 font-semibold mb-1">
          Camino de Evolución Digital
        </h3>
        <p className="text-sm text-gray-700">
          Ruta estratégica para transformar contenido en valor tangible a través
          de cada etapa
        </p>
      </div>

      {/* Flowchart principal */}
      <div className="flex flex-wrap items-center justify-center gap-2 relative w-full px-4 md:px-8">
        {/* Contenido - Completado */}
        <Card className="p-3 min-w-[120px] md:min-w-40 text-center border-2 border-green-500 bg-green-50 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-2">
            <div className="font-semibold text-gray-800 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 hidden md:inline" />
              Contenido
            </div>
            <div className="text-xs text-green-600 mt-1 md:hidden">Superado</div>
          </CardContent>
        </Card>

        <div className="mx-2 hidden md:block">
          <ChevronRight className="text-green-500 h-6 w-6" />
        </div>

        {/* Comunidad - En curso */}
        <Card className="p-3 min-w-[120px] md:min-w-40 text-center border-2 border-yellow-500 bg-yellow-50 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-2">
            <div className="font-semibold text-gray-800 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 hidden md:inline" />
              Comunidad
            </div>
            <div className="text-xs text-yellow-600 mt-1 md:hidden">En curso</div>
          </CardContent>
        </Card>

        <div className="mx-2 hidden md:block">
          <X className="text-red-500 h-6 w-6 animate-pulse" />
        </div>

        {/* Social Media - Pendiente */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Card className="p-3 min-w-[120px] md:min-w-40 text-center border-2 border-red-400 bg-red-50 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-2">
              <div className="font-semibold text-gray-800">Social Media</div>
              <div className="text-xs text-red-600 mt-1 md:hidden">Error</div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mx-2 hidden md:block">
          <ChevronRight className="text-red-500 h-6 w-6" />
        </div>

        {/* Software - Pendiente */}
        <Card className="p-3 min-w-[120px] md:min-w-40 text-center border-2 border-blue-400 bg-blue-50 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-2">
            <div className="font-semibold text-gray-800">Software</div>
            <div className="text-xs text-blue-600 mt-1 md:hidden">En espera</div>
          </CardContent>
        </Card>
      </div>

      {/* Bloqueo destacado */}
      <div className="flex items-center bg-red-50 px-4 py-3 rounded-lg border border-red-200 mt-4 w-full max-w-xl">
        <AlertCircle className="text-red-500 h-5 w-5 mr-2 flex-shrink-0" />
        <span className="text-red-600 font-medium text-sm md:text-base">
          Bloqueo crítico al tratar de pasar de Comunidad a Social Media
        </span>
      </div>

      {/* Resultados */}
      <Card className="w-full max-w-3xl border border-green-200 bg-gradient-to-r from-green-50 to-blue-50 mt-6">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <Zap className="text-yellow-500 h-5 w-5 mr-2" />
            <h3 className="font-bold text-lg text-gray-800">Resultados 2024</h3>
          </div>
          <div className="flex flex-wrap justify-between gap-2 text-sm mb-4">
            <div className="bg-white p-3 rounded-lg shadow flex-1 min-w-[120px] text-center">
              <div className="text-green-600 font-semibold text-lg">5.2M</div>
              <div className="font-bold text-xs text-green-600">MILLONES</div>
              <div className="text-gray-600 mt-1">Visualizaciones</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow flex-1 min-w-[120px] text-center">
              <div className="text-blue-600 font-semibold text-lg">2.4M</div>
              <div className="font-bold text-xs text-blue-600">MILLONES</div>
              <div className="text-gray-600 mt-1">Alcance</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow flex-1 min-w-[120px] text-center">
              <div className="text-purple-600 font-semibold text-lg">569.7K</div>
              <div className="font-bold text-xs text-purple-600">MILES</div>
              <div className="text-gray-600 mt-1">Vistas</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow flex-1 min-w-[120px] text-center">
              <div className="text-orange-600 font-semibold text-lg">123%</div>
              <div className="font-bold text-xs text-orange-600">PORCENTAJE</div>
              <div className="text-gray-600 mt-1">Crecimiento</div>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">
              ¡Es hora de evolucionar estos números!
            </h4>
            <p className="text-gray-700 text-sm">
              Estos datos son solo el comienzo. Transformémoslos en{" "}
              <span className="font-semibold text-green-600">
                ingresos reales
              </span>
              ,
              <span className="font-semibold text-purple-600">
                {" "}
                comunidad fanática
              </span>
              ,
              <span className="font-semibold text-blue-600">
                {" "}
                engagement sostenible
              </span>{" "}
              y
              <span className="font-semibold text-orange-600">
                {" "}
                amplificación exponencial de tu marca
              </span>
              . Es momento de{" "}
              <span className="font-semibold text-indigo-600">innovar</span> y
              convertirte en una
              <span className="font-semibold text-pink-600">
                {" "}
                marca inimitable
              </span>{" "}
              en tu sector. ¡El momento de dar el siguiente paso es ahora!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ANALICEMOS LA REALIDAD */}
      <div className="w-full max-w-3xl mt-2 text-center">
        <div className="flex items-center justify-center mb-2">
          <Search className="text-red-600 h-6 w-6 mr-2" />
          <h2 className="text-xl font-bold text-red-600 uppercase tracking-wider">
            ANALICEMOS LA REALIDAD
          </h2>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
      </div>

      {/* Recurso Humano Disponible */}
      <Card className="w-full max-w-3xl border border-blue-200 bg-white mt-2">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <Users className="text-blue-500 h-5 w-5 mr-2" />
            <h3 className="font-bold text-lg text-gray-800">
              Recurso Humano Disponible
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Funciona bien */}
            <div className="space-y-2">
              <h4 className="font-semibold text-green-600 flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-1" /> Funciona bien
              </h4>
              <ul className="bg-green-50 p-3 rounded-lg border border-green-200 text-sm">
                <li className="mb-1 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Community Manager
                </li>
                <li className="mb-1 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Diseñador Gráfico
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Editor de Video
                </li>
              </ul>
            </div>

            {/* Funciona más o menos */}
            <div className="space-y-2">
              <h4 className="font-semibold text-yellow-600 flex items-center text-sm">
                <AlertCircle className="h-4 w-4 mr-1" /> Funciona más o menos
              </h4>
              <ul className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-sm">
                <li className="mb-1 flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  Fotógrafo
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  Videógrafo
                </li>
              </ul>
            </div>

            {/* Funciona de forma mecánica */}
            <div className="space-y-2">
              <h4 className="font-semibold text-red-600 flex items-center text-sm">
                <X className="h-4 w-4 mr-1" /> Funciona mecánicamente
              </h4>
              <ul className="bg-red-50 p-3 rounded-lg border border-red-200 text-sm">
                <li className="mb-1 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Moderadores
                </li>
                <li className="mb-1 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Área de Planificación
                </li>
                <li className="mb-1 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Atención al Cliente
                </li>
                <li className="mb-1 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Área Bartender
                </li>
                <li className="mb-1 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Área Escenario
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Área Música/DJs
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Problemas y Soluciones en columnas paralelas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-8">
        {/* Columna Problemas */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center justify-center">
            <X className="h-5 w-5 mr-2" /> Problemas Detectados
          </h2>
          <div className="space-y-4">
            {/* Todos los problemas con estilo uniforme */}
            <Card className="border-2 border-red-400 bg-red-50 hover:bg-red-100 transition-colors shadow-md">
              <CardContent className="p-4 flex items-center justify-center">
                <span className="text-gray-900 font-semibold">
                  Reuniones ineficientes
                </span>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-400 bg-red-50 hover:bg-red-100 transition-colors shadow-md">
              <CardContent className="p-4 flex items-center justify-center">
                <span className="text-gray-900 font-semibold">
                  Ausencia de visión estratégica global en el entorno digital
                </span>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-400 bg-red-50 hover:bg-red-100 transition-colors shadow-md">
              <CardContent className="p-4 flex items-center justify-center">
                <span className="text-gray-900 font-semibold">
                  Deficiencias en fomentar cultura de trabajo colaborativo
                </span>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-400 bg-red-50 hover:bg-red-100 transition-colors shadow-md">
              <CardContent className="p-4 flex items-center justify-center">
                <span className="text-gray-900 font-semibold">
                  Protocolos de ejecución inexistentes
                </span>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-400 bg-red-50 hover:bg-red-100 transition-colors shadow-md">
              <CardContent className="p-4 flex items-center justify-center">
                <span className="text-gray-900 font-semibold">
                  Objetivos no medibles ni estratégicos
                </span>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-400 bg-red-50 hover:bg-red-100 transition-colors shadow-md">
              <CardContent className="p-4 flex items-center justify-center">
                <span className="text-gray-900 font-semibold">
                  Equipo no comprometido más allá de tareas mecánicas
                </span>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-red-400 bg-red-50 hover:bg-red-100 transition-colors shadow-md">
              <CardContent className="p-4 flex items-center justify-center">
                <span className="text-gray-900 font-semibold">
                  Disfunción en los programas de fidelización y retención de clientes
                </span>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-400 bg-red-50 hover:bg-red-100 transition-colors shadow-md">
              <CardContent className="p-4 flex items-center justify-center">
                <span className="text-gray-900 font-semibold">
                  Disfunción en programas de sociedades comerciales con otros negocios
                </span>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-400 bg-red-50 hover:bg-red-100 transition-colors shadow-md">
              <CardContent className="p-4 flex items-center justify-center">
                <span className="text-gray-900 font-semibold">
                  Disfunción en el programa de ofertas, descuentos y promociones
                </span>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Columna Soluciones */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-green-600 mb-4 flex items-center justify-center">
            <CheckCircle className="h-5 w-5 mr-2" /> Plan de Soluciones
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Realizaré una auditoría completa",
                desc: "Evaluaré el estado actual digital e interno",
              },
              {
                title: "Implantaré cultura organizativa y colaborativa",
                desc: "Definiré roles, valores y prácticas educativas",
              },
              {
                title: "Estableceré procesos operativos y comerciales",
                desc: "Optimizados y a medida de la empresa",
              },
              {
                title: "Orientaré la cultura empresarial hacia la modernidad",
                desc: "Fomentando innovación, inclusión y valores green con enfoque comercial",
              },
              {
                title: "Fijaré objetivos medibles",
                desc: "Crearé metas concretas para ingresos y engagement",
              },
              {
                title: "Construiré bases digitales sólidas",
                desc: "Desarrollaré un ecosistema digital profesional",
              },
              {
                title: "Capacitaré a todo el equipo",
                desc: "Implementaré formación en habilidades digitales",
              },
            ].map((solution, i) => (
              <Card
                key={i}
                className="border-green-200 bg-green-50 hover:bg-green-100 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="font-semibold text-green-700 flex items-center">
                    <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                      {i + 1}
                    </span>
                    {solution.title}
                  </div>
                  <div className="text-gray-700 text-sm mt-1 ml-9">
                    {solution.desc}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Resultados en 35 días */}
      <Card className="w-full max-w-6xl border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50 mt-8">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Calendar className="text-purple-600 h-5 w-5 mr-2" />
            <h3 className="font-bold text-xl text-purple-800">
              Resultados en 35 días
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Card className="border border-purple-200 bg-white shadow-md mb-6">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-purple-700 flex items-center uppercase">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    Gestión Operativa/Comercial
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Discoteca con todos los sistemas funcionando en
                        sincronía
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Logística, planificación y producción integradas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Mozas, mozos, seguridad, barra, escenario y demás
                        informados del día a día del negocio, incluye información
                        básica, ofertas del día, promos vigentes y demás datos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Shows planificados con antelación y detalle completo
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Plan de emergencia y contingencia para cada evento
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-purple-200 bg-white shadow-md">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-purple-700 flex items-center uppercase">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    Gestión de Personal
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Todas las áreas participan en la creación de contenido
                        digital
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        DJs, artistas y bartenders integrados en la estrategia
                        de marca
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Roles definidos con claridad para cada miembro del
                        equipo
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Responsabilidades claras y medibles para cada área
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border border-purple-200 bg-white shadow-md mb-6">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-purple-700 flex items-center uppercase">
                    Gestión de Recursos Multimedia
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Fotógrafo y videógrafo integrados en estrategia digital
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Amplificación de rendimiento en redes sociales
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Contenido de calidad profesional generado constantemente
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Calendarización de contenidos con garantía 100% de
                        cumplimiento
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Moderación activa en todas las redes, comentarios y
                        chats
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Gestión integral de WhatsApp, grupos y canales activos
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-purple-200 bg-white shadow-md">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-purple-700 flex items-center uppercase">
                    <Shield className="h-4 w-4 mr-2 text-blue-500" />
                    Gestión de Seguridad Digital
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Administración de activos digitales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Software y cuentas compradas registradas a correo
                        corporativo
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Registro de dominio en internet</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Verificación del perfil Meta para mayor seguridad
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Biblioteca digital de la marca en la nube para almacenar
                        archivos multimedia
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* PROCESOS 100% FUNCIONALES */}
          <Card className="border-2 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg mt-6">
            <CardContent className="p-5">
              <h4 className="font-bold text-emerald-800 flex items-center justify-center text-lg uppercase mb-3">
                <Sparkles className="h-5 w-5 mr-2 text-yellow-500" />
                Procesos 100% Funcionales
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      La planificación funciona con precisión y eficiencia
                    </span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      La logística opera sin contratiempos ni retrasos
                    </span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      La producción alcanza estándares profesionales
                    </span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      El contenido en internet genera resultados medibles
                    </span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Los objetivos se cumplen y superan expectativas
                    </span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Personal capacitado y entrenado para la nueva metodología
                    </span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Software de seguimiento para marcar progreso y avances
                    </span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Monitoreo constante para informes a gerencia
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LISTO PARA SOCIAL MEDIA */}
          <Card className="border-3 border-blue-500 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 shadow-xl mt-6">
            <CardContent className="p-5">
              <div className="flex items-center justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-extrabold text-blue-800 text-xl uppercase">
                  Listo para el siguiente paso: SOCIAL MEDIA
                </h4>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-3">
                <p className="text-gray-800 text-center">
                  Con las bases organizadas y los procesos funcionando de manera
                  óptima,
                  <span className="font-bold text-blue-700">
                    {" "}
                    ahora es el momento perfecto{" "}
                  </span>
                  para avanzar hacia una estrategia de Social Media que
                  multiplique tu impacto.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" /> Riesgo Minimizado
                  </h5>
                  <p className="text-gray-700">
                    Tu inversión está protegida por procesos sólidos y un equipo
                    preparado que garantiza resultados.
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <Star className="h-4 w-4 mr-2" /> Estrategia Personalizada
                  </h5>
                  <p className="text-gray-700">
                    Desarrollaremos tácticas específicas para tu audiencia que
                    generarán engagement real y conversiones.
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" /> Crecimiento
                    Exponencial
                  </h5>
                  <p className="text-gray-700">
                    Prepárate para ver cómo tu presencia digital se amplifica y
                    genera resultados tangibles para tu negocio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Propuesta de Inversión */}
      <Card className="w-full max-w-3xl mt-8 border-2 border-yellow-300 bg-gradient-to-r from-amber-50 to-yellow-50 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-amber-800 mb-3">
              Propuesta de Inversión
            </h3>

            <div className="bg-white p-4 rounded-lg border border-yellow-200 w-full max-w-md mb-4">
              <div className="text-3xl font-bold text-amber-600 mb-1">
                $1,000 USD
              </div>
              <p className="text-gray-600 text-sm">
                Implementación completa del plan estratégico
              </p>
            </div>

            {/* Lógica e información del descuento */}
            <DiscountSection />
          </div>
        </CardContent>
      </Card>

      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2025 - Deivipluss. ¡Todos los derechos reservados!
      </footer>
    </div>
  );
}

function DiscountSection() {
  const [timeLeft, setTimeLeft] = useState("");
  const [discount, setDiscount] = useState(1000);
  const [debugInfo, setDebugInfo] = useState("");

  useEffect(() => {
    // Ajustar manualmente la zona horaria para asegurar que estamos en UTC
    // La fecha objetivo ahora es: 30.03.2025 a las 16:00 UTC (equivalente a 11:00 AM -5 UTC)
    // Estamos compensando la diferencia de 5 horas que estás experimentando
    const targetDateUTC = Date.UTC(2025, 2, 30, 16, 0, 0);
    
    const calculateNextEvent = () => {
      const nowUTC = Date.now();
      
      // Si la fecha objetivo ya pasó, calcular el próximo intervalo de 12 horas
      if (nowUTC >= targetDateUTC) {
        const twelveHoursInMs = 12 * 60 * 60 * 1000;
        const elapsedSinceTarget = nowUTC - targetDateUTC;
        const intervalsPassed = Math.floor(elapsedSinceTarget / twelveHoursInMs);
        return targetDateUTC + (intervalsPassed + 1) * twelveHoursInMs;
      } else {
        // Si la fecha objetivo aún no ha llegado, usar esa fecha directamente
        return targetDateUTC;
      }
    };
    
    let nextEventTime = calculateNextEvent();
    
    const updateCountdown = () => {
      const nowUTC = Date.now();
      const diff = nextEventTime - nowUTC;
      
      // Depuración para verificar las fechas y tiempos
      const debugNextEvent = new Date(nextEventTime).toUTCString();
      const debugCurrentTime = new Date(nowUTC).toUTCString();
      const debugDiffHours = Math.floor(diff / (1000 * 60 * 60));
      const debugDiffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setDebugInfo(`Próximo evento: ${debugNextEvent}
Hora actual: ${debugCurrentTime}
Diferencia: ${debugDiffHours}h ${debugDiffMinutes}m`);
      
      if (diff <= 0) {
        setDiscount((prev) => Math.max(prev - 100, 0));
        nextEventTime = calculateNextEvent();
        setTimeout(updateCountdown, 100);
        return;
      }
      
      // Cálculo simple y directo del tiempo restante
      const totalHours = Math.floor(diff / (1000 * 60 * 60));
      const totalMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const totalSeconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(
        `${String(totalHours).padStart(2, "0")}:${String(totalMinutes).padStart(2, "0")}:${String(totalSeconds).padStart(2, "0")}`
      );
    };
    
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="bg-green-50 p-4 rounded-lg border border-green-200 w-full max-w-md mb-4 relative">
      <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        ¡Tiempo limitado!
      </div>
      <div className="text-lg font-semibold text-green-700 mb-1">
        ¡OFERTA ESPECIAL HOY!
      </div>
      <div className="text-3xl font-bold text-green-600">
        Descuento de S/{discount}
      </div>
      <p className="text-gray-600 text-sm mt-1">
        Aprovecha antes de que el descuento disminuya
      </p>
      <div className="mt-4 text-center flex items-center justify-center">
        <span className="text-red-600 font-bold text-sm mr-2">
          ¡El tiempo corre!
        </span>
        <div className="text-red-500 font-mono text-sm bg-red-100 px-2 py-1 rounded-md flex items-center">
          <span className="inline-block w-7 text-center">
            {timeLeft.split(":")[0]}
          </span>
          <span className="animate-pulse">:</span>
          <span className="inline-block w-7 text-center">
            {timeLeft.split(":")[1]}
          </span>
          <span className="animate-pulse">:</span>
          <span className="inline-block w-7 text-center animate-pulse">
            {timeLeft.split(":")[2]}
          </span>
        </div>
      </div>
      
      {/* Información de depuración visible solo en desarrollo */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-2 p-2 bg-black/10 rounded text-xs text-left whitespace-pre-wrap">
          {debugInfo}
        </div>
      )}
      
      {/* Nota sobre zona horaria */}
      <div className="mt-2 text-center text-xs text-gray-500">
        Tiempo mostrado en UTC
      </div>
    </div>
  );
}

