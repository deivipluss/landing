import React from "react";

const ContractTerms = () => {
  return (
    <div className="contract-terms overflow-y-auto max-h-96 mb-6 pr-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
      <h2 className="text-xl font-semibold mb-4">Términos y Condiciones de Servicios de Consultoría Digital</h2>
      
      <p className="mb-4">
        El presente documento constituye un acuerdo vinculante entre Deivis Contreras Cárdenas, 
        especialista en transformación digital (en adelante "El Consultor"), y la persona, 
        empresa u organización que contrata sus servicios (en adelante "El Cliente").
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">1. Servicios</h3>
      <p className="mb-4">
        El Consultor proveerá servicios de consultoría en transformación digital para negocios, 
        personas y organizaciones según lo acordado en la propuesta de servicios aceptada por 
        El Cliente. Estos servicios pueden incluir, pero no se limitan a: asesoramiento estratégico, 
        implementación de soluciones digitales, capacitación, y optimización de procesos mediante 
        herramientas digitales.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">2. Plazo y Horarios</h3>
      <p className="mb-4">
        La duración del servicio será determinada en el acuerdo específico entre las partes. 
        Los horarios de atención y disponibilidad se establecerán de mutuo acuerdo para garantizar 
        la efectividad del servicio.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">3. Honorarios y Forma de Pago</h3>
      <p className="mb-4">
        Los honorarios por los servicios se acordarán previamente y se detallarán en la propuesta 
        de servicios. El Cliente se compromete a pagar los montos establecidos en las fechas 
        acordadas. La forma de pago será especificada en el contrato particular.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">4. Confidencialidad</h3>
      <p className="mb-4">
        El Consultor se compromete a mantener la confidencialidad de toda la información 
        proporcionada por El Cliente durante y después del período de prestación de servicios. 
        No se divulgará ninguna información sin el consentimiento explícito de El Cliente.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">5. Propiedad Intelectual</h3>
      <p className="mb-4">
        Todo material, documentos, estrategias o planes desarrollados específicamente para 
        El Cliente durante el período de consultoría serán propiedad de El Cliente una vez 
        finalizado el pago completo de los servicios.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">6. Limitación de Responsabilidad</h3>
      <p className="mb-4">
        El Consultor proporcionará recomendaciones basadas en su experiencia profesional y 
        conocimientos actualizados, sin embargo, no garantiza resultados específicos que 
        dependan de factores externos o de la implementación por parte de El Cliente.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">7. Terminación del Contrato</h3>
      <p className="mb-4">
        Cualquiera de las partes podrá dar por terminado este acuerdo con un aviso previo de 
        14 días calendario. El Cliente deberá pagar por los servicios prestados hasta la fecha 
        efectiva de terminación.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">8. Ley Aplicable</h3>
      <p className="mb-4">
        Este acuerdo se regirá e interpretará de acuerdo con las leyes vigentes aplicables en 
        la jurisdicción donde El Consultor esté registrado legalmente.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">9. Modificaciones</h3>
      <p className="mb-4">
        Cualquier modificación a estos términos deberá realizarse por escrito y ser aceptada 
        por ambas partes.
      </p>

      <p className="mt-8 italic">
        Al aceptar estos términos y condiciones, El Cliente reconoce haber leído, entendido 
        y aceptado todas las condiciones establecidas en este documento.
      </p>
    </div>
  );
};

export default ContractTerms;
