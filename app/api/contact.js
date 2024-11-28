import axios from 'axios';

const WHATSAPP_API_URL = 'https://graph.facebook.com/v12.0/YOUR_PHONE_NUMBER_ID/messages';
const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message, selectedService } = req.body;

  try {
    await axios.post(WHATSAPP_API_URL, {
      messaging_product: 'whatsapp',
      to: '51989843709',
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
