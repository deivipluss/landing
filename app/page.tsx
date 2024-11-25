"use client";
import React from "react";
import { 
  FaCogs, 
  FaBrain, 
  FaRocket,
  FaUserTie,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaBehance,
  FaPinterest,
  FaSpotify
} from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { 
    href: "/", 
    icon: <FaCogs className="transition-transform duration-300 group-hover:rotate-180" />, 
    label: "Home" 
  },
  { 
    href: "/soluciones", 
    icon: <FaBrain className="transition-transform duration-300 group-hover:scale-110" />, 
    label: "Soluciones" 
  },
  { 
    href: "/novedades-tech", 
    icon: <FaRocket className="transition-transform duration-300 group-hover:scale-110" />, 
    label: "Tech News" 
  },
  { 
    href: "/contacto", 
    icon: <FaWhatsapp className="transition-transform duration-300 group-hover:rotate-12" />, 
    label: "Contacto" 
  },
];

const socialLinks = [
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/deivipluss" },
  { Icon: FaFacebook, href: "https://www.facebook.com/deivipluss" },
  { Icon: FaGithub, href: "https://www.github.com/deivipluss" },
  { Icon: FaBehance, href: "https://www.behance.net/deivipluss" },
  { Icon: FaPinterest, href: "https://www.pinterest.com/deivipluss" },
  { Icon: FaSpotify, href: "https://open.spotify.com/user/deivipluss" }
];

const ProfileCard: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-[#1A1A2E] p-6 md:p-8 rounded-xl flex flex-col items-center text-center space-y-4 md:space-y-6 shadow-glow h-[456px] md:h-[530px] w-[320px] md:w-[360px] mx-auto md:mb-12 overflow-hidden border border-[#4A90E2]/20"
  >
    <div className="w-[180px] md:w-[220px] h-[200px] md:h-[283px] bg-gradient-to-br from-[#FF5C5C] to-[#4A90E2] mb-2 md:mb-4 rounded-lg overflow-hidden animate-float">
      <img
        src="/imagenes/perfil.jpg"
        alt="Foto de perfil de Deivipluss"
        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
    <h2 className="text-white text-2xl md:text-3xl font-bold font-poppins">
      <span style={{ color: '#4A90E2' }}>Deivipluss</span>
    </h2>
    <p className="text-gray-300 mt-2 md:mt-4 text-sm md:text-base font-poppins font-light">
      De generación noventera, fanático tecnológico y poseedor de curiosidad infinita!
    </p>
    <div className="flex space-x-4 mt-2 md:mt-4 justify-center">
      {socialLinks.map(({ Icon, href }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer text-gray-300 hover:text-[#4A90E2] transition-colors duration-300"
        >
          <Icon className={`text-xl md:text-2xl`} />
        </motion.a>
      ))}
    </div>
  </motion.div>
);

const ProfessionalInfo: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="w-full max-w-[800px] px-4 md:px-0"
  >
    <div className="flex justify-center md:justify-start w-full mb-6 md:mb-8">
      <h1
        className="text-[40px] md:text-[80px] font-poppins font-black leading-none z-10 relative md:text-left text-center"
        style={{ letterSpacing: "-2px" }}
      >
        <span className="text-[#4A90E2] drop-shadow-glow">CONSULTOR </span>
        <span className="text-[#4A90E2] opacity-40">DIGITAL</span>
      </h1>
    </div>
    <p className="text-[#E1E1E1] opacity-80 text-[16px] text-center md:text-left px-4 md:px-0 -mt-2 font-poppins font-light">
      Transformo visiones complejas en soluciones innovadoras combinando mi talento, la tecnología y estrategias empresariales de vanguardia.
    </p>
    <div className="grid grid-cols-3 gap-6 md:gap-12 mt-8 px-4 md:px-0 w-full">
      {[
        { value: "+10", label: "AÑOS DE\nEXPERIENCIA" },
        { value: "+123", label: "CLIENTES\nASESORDOS" },
        { value: "+500", label: "PROYECTOS\nDIGITALES" }
      ].map(({ value, label }, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <p 
            className="text-[30px] md:text-[50px] font-poppins font-black text-[#4A90E2] leading-none" 
            style={{ letterSpacing: "-1px" }}
          >
            {value}
          </p>
          <p className="text-[11px] md:text-[13px] text-gray-400 leading-tight mt-2 font-poppins font-medium text-center md:text-left">
            {label}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden">
      <header className="flex justify-center py-6 mt-8 space-x-6 bg-[#1A1A2E]/80 backdrop-blur-lg shadow-glow rounded-full w-[90%] max-w-3xl mx-auto border border-[#4A90E2]/20">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className="group flex flex-col items-center"
          >
            <div className={`
              text-2xl mx-3
              text-[#FF5C5C]
              group-hover:text-[#4A90E2] transition-all duration-300
            `}>
              {item.icon}
            </div>
            <span className="text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors duration-300">
              {item.label}
            </span>
          </Link>
        ))}
      </header>

      <main className="flex-grow flex justify-center items-center p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl items-center mx-auto">
          <ProfileCard />
          <div className="space-y-8">
            <ProfessionalInfo />
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-[1000px] mt-16 px-4 md:px-0"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <Link href="/soluciones" className="w-full md:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-[#4A90E2] to-[#00F5D4] text-white p-6 rounded-xl relative shadow-glow h-[240px] flex items-center justify-center w-full overflow-hidden"
                  >
                    <div className="flex flex-col items-center justify-center text-center space-y-4 z-10">
                      <FaRocket className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity" />
                      <h3 className="text-xl font-bold tracking-wide">SOLUCIONES EMPRESARIALES</h3>
                      <div className="bg-white/20 px-6 py-2 rounded-full text-sm hover:bg-white/30 transition-all">
                        Descubrir más
                      </div>
                    </div>
                  </motion.div>
                </Link>
                <Link href="/contacto" className="w-full md:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-[#FF5C5C] to-[#FF914D] text-white p-6 rounded-xl relative shadow-glow h-[240px] flex items-center justify-center w-full overflow-hidden"
                  >
                    <div className="flex flex-col items-center justify-center text-center space-y-4 z-10">
                      <FaUserTie className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity" />
                      <h3 className="text-xl font-bold tracking-wide">SOLUCIONES FREELANCE</h3>
                      <div className="bg-white/20 px-6 py-2 rounded-full text-sm hover:bg-white/30 transition-all">
                        Descubrir más
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 text-gray-400 text-sm mt-auto border-t border-[#4A90E2]/20">
        © 2024 - Deivipluss. Todos los derechos reservados.
      </footer>

      <style jsx global>{`
        .drop-shadow-glow {
          text-shadow: 0 0 15px rgba(74, 144, 226, 0.5);
        }

        .shadow-glow {
          box-shadow: 0 0 25px rgba(74, 144, 226, 0.3);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;