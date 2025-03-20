// Código para Google Apps Script:

function doPost(e) {
  // Asegúrate de reemplazar este ID con el ID real de tu hoja de cálculo de Google Sheets
  var spreadsheetId = 'TU_ID_DE_HOJA_DE_CALCULO_AQUI'; 
  
  try {
    var sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Configura los encabezados CORS para permitir solicitudes desde cualquier origen
    var headers = {
      'Access-Control-Allow-Origin': '*', // Permite solicitudes desde cualquier origen
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    
    // Registrar los parámetros recibidos para depuración
    Logger.log("Parámetros recibidos: " + JSON.stringify(e.parameter));
    
    // Si es una solicitud OPTIONS (preflight), respondemos solo con los encabezados
    if (e.parameter && e.parameter.method === 'OPTIONS') {
      return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }
    
    // Verificar si e.parameter existe
    if (!e.parameter) {
      throw new Error("No se recibieron parámetros");
    }
    
    // Obtener los datos del formulario con verificación de existencia
    var timestamp = e.parameter.timestamp || new Date().toLocaleString();
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var company = e.parameter.company || 'No especificado';
    var phone = e.parameter.phone || 'No especificado';
    var dniOrRuc = e.parameter.dniOrRuc || 'No especificado'; // Asegurarse de que el parámetro exista
    var accepted = e.parameter.accepted || 'false'; // Asegurarse de que el parámetro exista
    
    // Añadir una nueva fila con los datos
    sheet.appendRow([timestamp, name, email, company, phone, dniOrRuc, accepted]); // Asegurarse de que los datos se agreguen correctamente
    
    // Devolver una respuesta de éxito con los encabezados CORS
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'success',
        'message': 'Datos guardados correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
      
  } catch(error) {
    // Registrar el error para depuración
    Logger.log("Error: " + error.toString());
    
    // Devolver una respuesta de error con los encabezados CORS
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'error': error.toString(),
        'parameters': e.parameter || 'No parameters received'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

function doGet(e) {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  return ContentService
    .createTextOutput("El servicio está funcionando correctamente")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}

function doOptions(e) {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
