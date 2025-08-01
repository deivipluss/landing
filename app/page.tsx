"use client";
import React, { useState, useEffect, useRef } from "react";
import ScrollToTopButton from '../components/ScrollToTopButton';
// Slider de servicios para la home
const serviceCards = [
  {
    title: "Gerencias 360°",
    desc: "Comunicación, operaciones y rentabilidad para el éxito empresarial.",
    icon: <FaUserTie className="text-2xl sm:text-3xl opacity-80 group-hover:opacity-100 transition-opacity" />,
    color: "from-[#4A90E2] to-[#00F5D4]",
    href: "/gerencias"
  },
  {
    title: "Redes de Membresía",
    desc: "OnlyFans · Loverfans · Fansly · Patreon",
    icon: <FaFire className="text-2xl sm:text-3xl opacity-80 group-hover:opacity-100 transition-opacity" />,
    color: "from-[#FF69B4] to-[#DB7093]",
    href: "/redes-membresia"
  },
  {
    title: "Gestión de Contenido",
    desc: "Estrategia y cobertura 360° multiplataforma.",
    icon: <FaStream className="text-2xl sm:text-3xl opacity-80 group-hover:opacity-100 transition-opacity text-[#22c55e] group-hover:text-[#16a34a]" />,
    color: "from-[#22c55e] to-[#14532d]",
    href: "/gestion-contenidos"
  },
  {
    title: "UX/UI & Desarrollo",
    desc: "Diseño de interfaces y desarrollo de software profesional.",
    icon: <FaCode className="text-2xl sm:text-3xl opacity-80 group-hover:opacity-100 transition-opacity" />,
    color: "from-[#3498DB] to-[#2980B9]",
    href: "/ux-desarrollo"
  },
  {
    title: "Funnels & Leads IA",
    desc: "Embudos de venta y captación automatizada de clientes.",
    icon: <FaChartLine className="text-2xl sm:text-3xl opacity-80 group-hover:opacity-100 transition-opacity" />,
    color: "from-[#00C9A7] to-[#4A90E2]",
    href: "/funnels-leads"
  },
  {
    title: "Entrenamiento Ejecutivo",
    desc: "Desarrollo de habilidades para la toma de decisiones estratégicas.",
    icon: <FaGraduationCap className="text-2xl sm:text-3xl opacity-80 group-hover:opacity-100 transition-opacity" />,
    color: "from-[#FFB75E] to-[#ED8F03]",
    href: "/entrenamiento-ejecutivo"
  }
];

const ServiceSlider: React.FC = () => {
  const [slide, setSlide] = useSliderState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    updateIsDesktop();
    window.addEventListener('resize', updateIsDesktop);
    return () => window.removeEventListener('resize', updateIsDesktop);
  }, []);

  // Autoplay solo en desktop y cuando no hay interacción del usuario
  useEffect(() => {
    if (isDesktop && isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setSlide((prev) => (prev + 1) % Math.ceil(serviceCards.length / 2));
      }, 3500);
      return () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      };
    } else {
      if (!isDesktop) setSlide(0);
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    }
  }, [isDesktop, isAutoplay]);

  // Slider sólo en desktop
  if (!isDesktop) {
    // Móvil: mostrar todas las tarjetas apiladas
    return (
      <div className="flex flex-col gap-4 sm:gap-6">
        {serviceCards.map((card) => (
          <Link href={card.href} className="w-full" key={card.title}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className={`bg-gradient-to-br ${card.color} text-white p-4 sm:p-5 rounded-xl relative shadow-glow h-[170px] sm:h-[190px] flex items-center justify-center w-full overflow-hidden`}
            >
              <div className="flex flex-col items-center justify-center text-center space-y-2 z-10">
                {card.icon}
                <h3 className="text-lg font-bold tracking-wide">{card.title}</h3>
                <p className="text-xs opacity-80 font-poppins font-medium leading-tight">{card.desc}</p>
                <div className="bg-white/20 px-4 py-1.5 rounded-full text-xs hover:bg-white/30 transition-all">
                  Descubrir más
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    );
  }

  // Desktop: slider con 3 slides de 2 tarjetas cada uno
  const totalSlides = 3;
  const handlePrev = () => {
    setIsAutoplay(false);
    setSlide((slide - 1 + totalSlides) % totalSlides);
  };
  const handleNext = () => {
    setIsAutoplay(false);
    setSlide((slide + 1) % totalSlides);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          width: `${totalSlides * 100}%`,
          transform: `translateX(-${slide * (100 / totalSlides)}%)`,
        }}
      >
        {/* Tres slides de 2 tarjetas cada uno */}
        {[0, 1, 2].map((slideIndex) => (
          <div key={slideIndex} className="flex w-1/3 gap-6 px-1">
            {serviceCards.slice(slideIndex * 2, (slideIndex * 2) + 2).map((card) => (
              <Link href={card.href} className="w-1/2" key={card.title}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`bg-gradient-to-br ${card.color} text-white p-4 sm:p-5 rounded-xl relative shadow-glow h-[170px] sm:h-[190px] flex items-center justify-center w-full overflow-hidden group`}
                  style={{ transformOrigin: 'center' }}
                >
                  <div className="flex flex-col items-center justify-center text-center space-y-2 z-10">
                    {card.icon}
                    <h3 className="text-lg font-bold tracking-wide">{card.title}</h3>
                    <p className="text-xs opacity-80 font-poppins font-medium leading-tight">{card.desc}</p>
                    <div className="bg-white/20 px-4 py-1.5 rounded-full text-xs hover:bg-white/30 transition-all">
                      Descubrir más
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ))}
      </div>
      {/* Controles del slider */}
      <div className="flex justify-center mt-4 gap-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoplay(false);
              setSlide(index);
            }}
            className={`w-3 h-3 rounded-full ${slide === index ? 'bg-[#4A90E2]' : 'bg-gray-400/40'} hover:opacity-100 transition`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
import { useState as useSliderState } from "react";
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
  FaSpotify,
  FaArrowUp,
  FaBuilding,
  FaFire,
  FaStream,
  FaCode,
  FaChartLine,
  FaGraduationCap
} from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from "next/image";

const navItems = [
  { 
    href: "/", 
    icon: <FaCogs className="transition-transform duration-300 group-hover:rotate-180" />, 
    label: "Home" 
  },
  { 
    href: "#solutions", 
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
    className="bg-[#1A1A2E] p-4 sm:p-6 rounded-xl flex flex-col items-center text-center space-y-3 shadow-glow h-auto w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] mx-auto overflow-hidden border border-[#4A90E2]/20"
  >
    <div className="w-[120px] h-[150px] sm:w-[140px] sm:h-[175px] md:w-[160px] md:h-[200px] bg-gradient-to-br from-[#FF5C5C] to-[#4A90E2] mb-2 rounded-lg overflow-hidden animate-float">
      <Image
        src="/imagenes/perfil.jpg"
        alt="Foto de perfil de Deivipluss"
        width={160}
        height={200}
        priority={true}
        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
    <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold font-poppins">
      <span style={{ color: '#4A90E2' }}>Deivipluss</span>
    </h2>
    <p className="text-gray-300 text-xs sm:text-sm font-poppins font-light">
      De generación noventera, con maníaco fanatismo tecnológico, curiosidad infinita y alto profesionalismo para competir en mercados de clase mundial!.
    </p>
    <div className="flex space-x-2 justify-center">
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
          <Icon className="text-base sm:text-lg md:text-xl" />
        </motion.a>
      ))}
    </div>
  </motion.div>
);

const ProfessionalInfo: React.FC<{ className?: string }> = ({ className }) => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className={`w-full max-w-[800px] px-4 md:px-0 ${className}`}
  >
    <div className="flex flex-col justify-center w-full mb-4 sm:mb-6 md:mb-8 lg:items-start">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-black leading-none z-10 relative text-center lg:text-left"
        style={{ letterSpacing: "-2px" }}
      >
        <span className="text-[#4A90E2] drop-shadow-glow">CONSULTOR</span>
      </h1>
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-black leading-none z-10 relative text-center lg:text-left mt-2"
        style={{ letterSpacing: "-2px" }}
      >
        <span className="text-[#4A90E2] opacity-40">DIGITAL</span>
      </h1>
    </div>
    <p className="text-[#E1E1E1] opacity-80 text-sm sm:text-base md:text-lg text-center lg:text-left px-4 md:px-0 -mt-2 font-poppins font-light">
      Transformo visiones complejas en soluciones innovadoras combinando mi talento, la tecnología y estrategias empresariales de vanguardia.
    </p>
    <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-12 mt-6 sm:mt-8 mb-8 sm:mb-10 lg:mb-6 px-4 md:px-0 w-full">
      {[
        { value: "+10", label: "AÑOS DE\nEXPERIENCIA" },
        { value: "+180", label: "CLIENTES\nASESORADOS" },
        { value: "+500", label: "PROYECTOS\nCOMPLETADOS" }
      ].map(({ value, label }, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <p 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-poppins font-black text-[#4A90E2] leading-none"
            style={{ letterSpacing: "-1px" }}
          >
            {value}
          </p>
          <p className="text-[10px] sm:text-[11px] md:text-[13px] text-gray-400 leading-tight mt-2 font-poppins font-medium text-center">
            {label}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const App: React.FC = () => {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mediaQuery.matches);
    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    const handleScroll = () => {
      const nav = document.querySelector('header');
      if (nav) {
        setShowBackToTop(window.scrollY > nav.clientHeight);
      }
      if (mainRef.current) {
        const { bottom } = mainRef.current.getBoundingClientRect();
        const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        setShowFooter(scrolledToBottom || bottom <= window.innerHeight);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        if (href === '#solutions') {
          element.classList.add(isDesktop ? 'highlight-desktop' : 'highlight-mobile');
          setTimeout(() => {
            element.classList.remove('highlight-desktop', 'highlight-mobile');
          }, 1000);
        }
      }
    } else {
      router.push(href);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] bg-gradient-to-b from-[#0D0C1D] to-[#1A1A2E] flex flex-col overflow-hidden relative">
      <div className="container mx-auto px-4 pt-16 sm:pt-20 md:pt-24 lg:pt-32 flex flex-col items-center min-h-screen">
        <header className="flex justify-center py-3 sm:py-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12 space-x-3 sm:space-x-4 bg-[#1A1A2E]/80 backdrop-blur-lg shadow-glow rounded-full w-full max-w-3xl mx-auto border border-[#4A90E2]/20">
          {navItems.map((item) => (
            <div 
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className={`
                text-xl sm:text-2xl mx-2 sm:mx-3
                text-[#FF5C5C]
                group-hover:text-[#4A90E2] transition-all duration-300
              `}>
                {item.icon}
              </div>
              <span className="text-[10px] sm:text-xs text-[#FF5C5C] group-hover:text-[#4A90E2] transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </header>

        <main ref={mainRef} className="flex-grow flex justify-center items-center py-4 sm:py-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 w-full max-w-7xl items-center">
            <div className="flex justify-center lg:justify-end items-center">
              <ProfileCard />
            </div>
            <div className="space-y-6 sm:space-y-8 lg:space-y-8 flex flex-col items-center lg:items-start w-full">
              <ProfessionalInfo className="mt-4 sm:mt-6 lg:mt-0" />
              <motion.div 
                id="solutions"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full mt-6 sm:mt-8 lg:mt-4 highlight"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-black leading-none z-10 relative text-center lg:hidden mb-4" style={{ letterSpacing: "-2px" }}>
                  <span className="text-[#4A90E2] drop-shadow-glow">SOLUCIONES</span>
                </h2>
                {/* Slider de servicios: 4 tarjetas, 2 por slide */}
                <ServiceSlider />
              </motion.div>
            </div>
          </div>
        </main>

        {/* Botón ScrollToTop reutilizable */}
        <ScrollToTopButton />

        <footer className={`bg-[#1A1A2E]/80 backdrop-blur-lg text-center py-6 sm:py-8 text-gray-400 text-xs sm:text-sm mt-12 sm:mt-16 border-t border-[#4A90E2]/20 w-full transition-opacity duration-300 ${showFooter ? 'opacity-100' : 'opacity-0'}`}>
          © 2025 - @Deivipluss Todos los derechos reservados.
        </footer>
      </div>
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

        @keyframes highlight-desktop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes highlight-mobile {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .highlight-desktop {
          animation: highlight-desktop 1s ease-in-out;
        }

        .highlight-mobile {
          animation: highlight-mobile 1s ease-in-out;
        }

        @media (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
          .container {
            display: flex;
            flex-direction: column;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .lg\\:justify-end {
            justify-content: center;
          }

          .lg\\:items-start {
            align-items: center;
          }
        }

        @media (orientation: landscape) {
          .container {
            min-height: auto;
            padding-top: 2rem;
            padding-bottom: 1rem;
          }

          header {
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding-top: 1.5rem;
            padding-bottom: 1rem;
          }

          main {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          .grid {
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) and (orientation: landscape) {
          .container {
            min-height: auto;
          }

          .profile-card-container {
            transform: scale(0.9);
            transform-origin: top center;
          }

          .professional-info-container {
            transform: scale(0.95);
            transform-origin: top center;
          }
        }
      `}</style>
    </div>
  );
};

export default App;