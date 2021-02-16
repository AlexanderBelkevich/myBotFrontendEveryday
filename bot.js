require('dotenv').config();
const { Telegraf, Markup, reply_markup } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.on('new_chat_members', (ctx) => {
//     ctx.reply(`
// Привет, ${ctx.update.message.new_chat_member.username}!

// Наше маленькое сообщество очень радо тому, что ты с нами!

// Будет круто, если ты немного расскажешь о себе.
// Нам так будет интереснее вести беседу!

// А еще ты можешь набрать /start для запуска полезного бота.`)
// })

bot.start((ctx) => {
    
    // console.log(ctx)
  ctx.telegram.reply(
    `
С помощью кнопок ниже ты можешь получить интересующий тебя контент.
Не стесняйся по ним жмякать :)
`
// Markup.keyboard([
//     ['Все задачи', 'Все разборы задач'],
// ]).resize()
//   )
);

bot.on('text', (ctx) => {
    if (ctx.update.message.text === 'Все задачи') {
        ctx.telegram.sendMessage(ctx.update.message.from.id,`
<a href="https://www.patreon.com/posts/zadacha-no-1-47152476"><b>Задача №1</b>. Верстка чата</a>
<a href="https://www.patreon.com/posts/zadacha-no-2-47571187"><b>Задача №2</b>. Калькулятор стоимости доставки (до 22.02.2021)</a>
        `, {parse_mode: 'HTML'})
    }
    if (ctx.update.message.text === 'Все разборы задач') {
        ctx.telegram.sendMessage(ctx.update.message.from.id,`
<a href="https://youtu.be/aNM02KvjLu0"><b>Разбор задачи №1</b> от 14.02.2021</a>
        `, {parse_mode: 'HTML', disable_web_page_preview: true})
    }
})
bot.launch();
console.log('Бот запущен');