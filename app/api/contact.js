import axios from 'axios';

const WHATSAPP_API_URL = 'https://graph.facebook.com/v12.0/51989843709/messages';
const ACCESS_TOKEN = 'EAAO4PAdWXGsBOZB762fB0NakQksIay5SdZB3pfI37it4kjVuD4hPx7pvS0tQryJMhLboxbZBJ1BFIh1OAPPHCVpW2ZAJPbZCk3i40GXrmH11Auvrg91n6jZB77oOVMdcAGMVn609jMvjCHxJ3OEOClBqsHbt8hbqjCLTypZCVcZAEmYHZAfPxDDBnbxhPXQcmxph4Kpdi8DJiCjJPCDOG6hZBLtCCkCMkZD';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message, selectedService } = req.body;

  try {
    const response = await axios.post(WHATSAPP_API_URL, {
      messaging_product: 'whatsapp',
      to: 'RECIPIENT_PHONE_NUMBER',
      type: 'template',
      template: {
        name: 'YOUR_TEMPLATE_NAME',
        language: {
          code: 'YOUR_LANGUAGE_CODE'
        },
        components: [
          {
            type: 'body',
            parameters: [
              { type: 'text', text: name },
              { type: 'text', text: email },
              { type: 'text', text: message },
              { type: 'text', text: selectedService }
            ]
          }
        ]
      }
    }, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json({ message: 'Mensaje enviado exitosamente' });
  } catch (error) {
    console.error('Error enviando mensaje a WhatsApp:', error);
    res.status(500).json({ message: 'Error enviando mensaje' });
  }
}
