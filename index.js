const TelegramApi = require('node-telegram-bot-api');

const token = '6043573762:AAEZZkgnimY2cTq_g9rIwN4-YHHPN_XI37g';

const bot = new TelegramApi(token, {polling: true});



const start = () => {
    bot.setMyCommands([
        {command: '/start', description: "Начало общения с ботом"},
        {command: '/info', description: "Информация о пользователе"},
    ])
    bot.on("message", async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        // bot.sendMessage(chatId, `ты написал мне "${text}"`)
        if(text === '/start'){
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/60c/1dc/60c1dc7d-a677-3ce2-98b9-326d262e8ae5/3.webp')
            return bot.sendMessage(chatId, `Добро пожаловать в телеграм бот Рябова Виктора. Я пока мало что умею :). Можешь спросить что еще я умею. Напиши для этого: "Что еще ты умеешь?"`)
        }
        if(text === '/info'){
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/60c/1dc/60c1dc7d-a677-3ce2-98b9-326d262e8ae5/5.webp')
            return bot.sendMessage(chatId, `Я все про тебя знаю): Имя: ${msg.from.first_name}, Фамилия: ${msg.from.last_name}, адишник: ${msg.from.id}, Бот ли ты: ${msg.from.is_bot}, Ник: ${msg.from.username},`)
        }
        if (text === 'Что еще ты умеешь?'){
            return bot.sendMessage(chatId, `Я знаю, что тебя зовут ${msg.from.first_name} ${msg.from.last_name}. Можешь конечно спросить что я умею еще. Напиши "что еще?"`)
        }
        if (text === 'что еще?'){
            await bot.sendSticker(chatId, `https://tlgrm.ru/_/stickers/60c/1dc/60c1dc7d-a677-3ce2-98b9-326d262e8ae5/2.webp`);
            return bot.sendMessage(chatId, `На этом пока все))`);
        }
        return bot.sendMessage(chatId, `Видимо ты вводишь команду, которую я пока не понимаю. Сорян`)
    })
}

start();
