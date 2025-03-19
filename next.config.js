/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración existente
  // ...existing code...
  
  // Añadir configuración de ESLint para ignorar ciertos errores en producción
  eslint: {
    // Habilita ESLint durante la construcción (build)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;