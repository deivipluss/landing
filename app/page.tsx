// app/page.tsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-gray-900">
      {/* Texto inicial con efecto de tipeo */}
      <h1 className="text-4xl font-bold text-blue-600">
        Hola, soy <span className="text-indigo-700">Deivis</span>
      </h1>
      <p className="text-lg mt-4">
        <Typewriter
          words={['Estoy listo para ayudarte', '¿Qué deseas hacer?']}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      {/* Botones de opciones */}
      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          Servicio 1
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          Servicio 2
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          Servicio 3
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
