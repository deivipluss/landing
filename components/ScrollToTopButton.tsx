"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-4 p-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg z-50"
      aria-label="Ir arriba"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
