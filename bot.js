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

bot.start((ctx) => ctx.reply(
    `
С помощью кнопок ниже ты можешь получить интересующий тебя контент.
Не стесняйся по ним жмякать :)
`,
Markup.keyboard([
    ['Все задачи', 'Все разборы задач'],
]).resize()
  )
);


bot.on('text', async (ctx) => {
    if (ctx.update.message.text === 'Все задачи') {
        ctx.telegram.sendMessage(ctx.update.message.from.id,`
<a href="https://www.patreon.com/posts/zadacha-no-1-47152476"><b>Задача №1</b>. Верстка чата</a>
<a href="https://www.patreon.com/posts/zadacha-no-2-47571187"><b>Задача №2</b>. Калькулятор стоимости доставки (до 22.02.2021)</a>
<a href="https://www.patreon.com/posts/zadacha-no-3-47942592"><b>Задача №3</b>. Административная панель (до 6.03.2021)</a>
<a href="https://www.patreon.com/posts/zadacha-no-4-s-48528041"><b>Задача №4</b>. Работа с Google Maps (до 18.03.2021)</a>
<a href="https://www.patreon.com/posts/zadacha-5-page-48654184"><b>Задача №5</b>. Верстка Landing Page (до 22.03.2021)</a>
<a href="https://www.patreon.com/posts/zadacha-no-6-49058357"><b>Задача №6</b>. Pomodoro-таймер (до 01.04.2021)</a>
        `, {parse_mode: 'HTML'})
    }
    if (ctx.update.message.text === 'Все разборы задач') {
        ctx.telegram.sendMessage(ctx.update.message.from.id,`
<a href="https://youtu.be/aNM02KvjLu0"><b>Разбор задачи №1</b> от 14.02.2021</a>
<a href="https://youtu.be/jf7jTFiWo_c"><b>Разбор задачи №2</b> от 24.02.2021</a>
<a href="https://www.youtube.com/watch?v=onTPRUmWF64"><b>Разбор задачи №3</b> от 11.03.2021</a>
<a href="https://www.youtube.com/watch?v=g83UDIOmXpY"><b>Разбор задачи №4</b> от 19.03.2021</a>
<a href="https://www.youtube.com/watch?v=VWfDwe3scjc"><b>Разбор задачи №5</b> от 26.03.2021</a>
        `, {parse_mode: 'HTML', disable_web_page_preview: true})
    }
})
bot.launch();
console.log('Бот запущен');