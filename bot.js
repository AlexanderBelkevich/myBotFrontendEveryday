require('dotenv').config()

const { Telegraf, Markup } = require('telegraf')

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
    if (ctx.update.message.text === 'Все задачи') {
        ctx.reply(`
            [Задача №1. Верстка чата](https://www.patreon.com/posts/zadacha-no-1-47152476)
        `, {reply_markup: 'markdown'})
    }
})

bot.launch()
console.log('запущено')