"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaHome, FaBrain, FaTrophy, FaWhatsapp } from 'react-icons/fa';

const MainNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: <FaHome className="text-2xl" />,
    },
    {
      name: "Soluciones",
      href: "/#solutions",
      icon: <FaBrain className="text-2xl" />,
    },
    {
      name: "Blog",
      href: "/novedades-tech",
      icon: <FaTrophy className="text-2xl" />, // Usando FaTrophy como en la home original
    },
    {
      name: "Contacto",
      href: "/contacto",
      icon: <FaWhatsapp className="text-2xl" />,
    },
  ];

  // Verificar la ruta activa, considerando también fragmentos de URL
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/#solutions') {
      return pathname === '/' && typeof window !== 'undefined' && window.location.hash === '#solutions';
    }
    // Comprobar que pathname y href existan antes de usar startsWith
    return pathname && href && href !== '/' && href !== '/#solutions' && pathname.startsWith(href.split('#')[0]);
  };

  return (
    <nav className="fixed bottom-8 left-0 right-0 z-50 flex justify-center">
      <div className="flex space-x-8 py-4 px-8 rounded-full bg-gradient-to-r from-blue-900/90 to-indigo-900/90 backdrop-blur-md shadow-xl">
        {navItems.map((item) => (
          <Link href={item.href} key={item.name}>
            <motion.div
              className={`flex flex-col items-center ${
                isActive(item.href) ? 'text-white' : 'text-blue-300'
              } hover:text-white transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNavigation;
