require('dotenv').config()

const { Telegraf, Markup, reply_markup } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`
С помощью кнопок ниже ты можешь получить интересующий
тебя контент :)
`, Markup.keyboard([
    ['Все задачи', 'Все разборы задач'],
]).resize()
))

bot.on('new_chat_members', (ctx) => {
    console.log(ctx.update.message.new_chat_member)
    ctx.reply(`
Привет, ${ctx.update.message.new_chat_member.username}!

Наше маленькое сообщество очень радо тому, что ты с нами!

Будет круто, если ты немного расскажешь о себе :)
Нам так будет интереснее вести беседу ;)

А еще ты можешь набрать /start для запуска полезного бота :)`)
})

// bot.help((ctx) => ctx.reply(COUNTRIES_LIST))

bot.on('text', async (ctx) => {
    console.log(ctx.update.message.text)
    if (ctx.update.message.text === 'Все задачи') {
        console.log('ну ок же')
        ctx.reply(`
<a href="https://www.patreon.com/posts/zadacha-no-1-47152476"><b>Задача №1</b>. Верстка чата</a>
<a href="https://www.patreon.com/posts/zadacha-no-2-47571187"><b>Задача №2</b>. Калькулятор стоимости доставки (до 22.02.2021)</a>
        `, {parse_mode: 'HTML'})
    }
    if (ctx.update.message.text === 'Все разборы задач') {
        console.log('ну ок же')
        ctx.reply(`
<a href="https://youtu.be/aNM02KvjLu0"><b>Разбор задачи №1</b> от 14.02.2021</a>
        `, {parse_mode: 'HTML'})
    }
})

bot.launch()
console.log('запущено')