// Exportamos la función para que pueda ser utilizada por otros componentes
export const submitFormData = async (formData) => {
  try {
    console.log('Enviando datos al proxy API:', formData);
    
    const response = await fetch('/api/google-sheets-proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    console.log('Respuesta del proxy API:', data);
    
    if (!response.ok) {
      throw new Error(data.error || 'Error al enviar el formulario');
    }
    
    return data;
  } catch (error) {
    console.error('Error al enviar datos mediante proxy:', error.message);
    throw error;
  }
};