const nodemailer = require('nodemailer');

async function testEmail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Servidor SMTP de Gmail
    port: 587, // Puerto para STARTTLS
    secure: false, // STARTTLS requiere secure=false
    auth: {
      user: 'deivipluss@gmail.com', // Tu correo de Gmail
      pass: 'rhgi uuii poio giou', // Contraseña de aplicación generada en Gmail
    },
  });

  try {
    // Verificar conexión con el transportador
    await transporter.verify();
    console.log('Transportador configurado correctamente.');
  } catch (error) {
    console.error('Error al verificar el transportador:', error);
  }
}

testEmail();
