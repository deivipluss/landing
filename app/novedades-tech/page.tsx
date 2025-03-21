"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import HomeNavigation from "@/components/HomeNavigation";

export default function NovedadesTechPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Header decorativo */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 h-2"></div>
      
      {/* Utilizamos el componente HomeNavigation directamente sin contenedores adicionales */}
      <HomeNavigation />
      
      <Container className="py-12 md:py-20">
      </Container>
      
      {/* Footer decorativo */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 h-1 mt-auto"></div>
    </main>
  );
}
