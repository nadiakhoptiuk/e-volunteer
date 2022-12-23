import axios from 'axios';
axios.defaults.baseURL = '';
axios.defaults.params = {};

const TOKEN = process.env.NEXT_TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.NEXT_TELEGRAM_CHAT_ID;
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export async function sendMessage(text) {
  const data = await axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text,
  });
  return data;
}
