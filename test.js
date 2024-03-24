const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token obtained from BotFather
const token = '6458087750:AAHfey42yyHAJk3lmXb12XJCOeQlf9u3x7M';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Respond to the received message
  bot.sendMessage(chatId, `You said: ${messageText}`);
});

