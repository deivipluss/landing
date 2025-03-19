"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";

export default function ApiTestPage() {
  const [testResult, setTestResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const testGoogleSheetsConnection = async () => {
    setLoading(true);
    setTestResult("");
    
    try {
      const response = await fetch('/api/google-sheets-proxy');
      const data = await response.json();
      
      setTestResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setTestResult(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  const sendTestData = async () => {
    setLoading(true);
    setTestResult("");
    
    try {
      const testData = {
        name: "Usuario de Prueba",
        email: "test@example.com",
        company: "Empresa de Prueba",
        phone: "123456789"
      };
      
      const response = await fetch('/api/google-sheets-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });
      
      const data = await response.json();
      setTestResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setTestResult(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header decorativo */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 h-2"></div>
      
      <Container className="py-12">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Prueba de API de Google Sheets Pluss
          </h1>
          
          <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <button
                onClick={testGoogleSheetsConnection}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded disabled:opacity-70 flex-1"
              >
                {loading ? "Probando..." : "Probar Conexión"}
              </button>
              
              <button
                onClick={sendTestData}
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded disabled:opacity-70 flex-1"
              >
                {loading ? "Enviando..." : "Enviar Datos de Prueba"}
              </button>
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Resultado:</h3>
              {testResult ? (
                <pre className="bg-gray-100 dark:bg-slate-700 p-4 rounded-md overflow-auto max-h-96 text-sm">
                  {testResult}
                </pre>
              ) : (
                <p className="text-gray-500 italic">Ejecuta una prueba para ver los resultados</p>
              )}
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </Container>
      
      {/* Footer decorativo */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 h-1 mt-auto"></div>
    </main>
  );
}
