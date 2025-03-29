"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle,
  X,
  ChevronRight,
  Zap,
  Search,
} from "lucide-react";

export default function DiagnosticoDigital() {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 w-full max-w-6xl mx-auto">
      {/* Título */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Diagnóstico Digital - El Lounge</h1>
      </div>

      {/* Texto explicativo del flujo */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center w-full max-w-2xl mb-2">
        <h3 className="text-blue-800 font-semibold mb-1">Camino de Evolución Digital</h3>
        <p className="text-sm text-gray-700">
          Ruta estratégica para transformar contenido en valor tangible a través de cada etapa
        </p>
      </div>

      {/* Flowchart principal */}
      <div className="flex flex-wrap items-center justify-center gap-2 relative w-full px-4 md:px-8">
        {/* Contenido - Completado */}
        <Card className="p-3 min-w-[120px] md:min-w-40 text-center border-2 border-green-500 bg-green-50 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-2">
            <div className="font-semibold text-gray-800 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Contenido
            </div>
          </CardContent>
        </Card>

        <div className="mx-2">
          <ChevronRight className="text-green-500 h-6 w-6" />
        </div>

        {/* Comunidad - Completado */}
        <Card className="p-3 min-w-[120px] md:min-w-40 text-center border-2 border-green-500 bg-green-50 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-2">
            <div className="font-semibold text-gray-800 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Comunidad
            </div>
          </CardContent>
        </Card>

        <div className="mx-2">
          <X className="text-red-500 h-6 w-6 animate-pulse" />
        </div>

        {/* Social Media - Pendiente */}
        <Card className="p-3 min-w-[120px] md:min-w-40 text-center border-2 border-red-400 bg-red-50 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-2">
            <div className="font-semibold text-gray-800">Social Media</div>
          </CardContent>
        </Card>

        <div className="mx-2">
          <ChevronRight className="text-red-500 h-6 w-6" />
        </div>

        {/* Software - Pendiente */}
        <Card className="p-3 min-w-[120px] md:min-w-40 text-center border-2 border-red-400 bg-red-50 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-2">
            <div className="font-semibold text-gray-800">Software</div>
          </CardContent>
        </Card>
      </div>

      {/* Bloqueo destacado */}
      <div className="flex items-center bg-red-50 px-4 py-3 rounded-lg border border-red-200 mt-4 w-full max-w-xl">
        <AlertCircle className="text-red-500 h-5 w-5 mr-2 flex-shrink-0" />
        <span className="text-red-600 font-medium text-sm md:text-base">Bloqueo crítico: Comunidad → Social Media</span>
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
              <div className="text-gray-600">Visualizaciones</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow flex-1 min-w-[120px] text-center">
              <div className="text-blue-600 font-semibold text-lg">2.4M</div>
              <div className="text-gray-600">Alcance</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow flex-1 min-w-[120px] text-center">
              <div className="text-purple-600 font-semibold text-lg">569.7K</div>
              <div className="text-gray-600">Vistas</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow flex-1 min-w-[120px] text-center">
              <div className="text-orange-600 font-semibold text-lg">123% + 123%</div>
              <div className="text-gray-600">Crecimiento</div>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">¡Es hora de evolucionar estos números!</h4>
            <p className="text-gray-700 text-sm">
              Estos datos son solo el comienzo. Transformémoslos en{" "}
              <span className="font-semibold text-green-600">ingresos reales</span>,
              <span className="font-semibold text-purple-600"> comunidad fanática</span>,
              <span className="font-semibold text-blue-600"> engagement sostenible</span> y
              <span className="font-semibold text-orange-600"> amplificación exponencial de tu marca</span>. Es momento
              de <span className="font-semibold text-indigo-600">innovar</span> y convertirte en una
              <span className="font-semibold text-pink-600"> marca inimitable</span> en tu sector. ¡El momento de dar el
              siguiente paso es ahora!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ANALICEMOS LA REALIDAD */}
      <div className="w-full max-w-3xl mt-2">
        <div className="flex items-center justify-center mb-2">
          <Search className="text-red-600 h-6 w-6 mr-2" />
          <h2 className="text-xl font-bold text-red-600 uppercase tracking-wider">ANALICEMOS LA REALIDAD</h2>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
      </div>
    </div>
  );
}