require('dotenv').config()
// const COUNTRIES_LIST = require('./constants')

const { Telegraf, Markup } = require('telegraf')
// const api = require('covid19-api')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`
Привет, ${ctx.update.message.from.first_name}!

Наше маленькое сообщество очень радо тому, что ты
с нами!

С помощью кнопок ниже ты можешь получить интересующий
тебя контент :)
`, Markup.keyboard([
    ['Все задачи', 'Все разборы задач'],
]).resize()
))

bot.help((ctx) => ctx.reply(COUNTRIES_LIST))

bot.on('text', async (ctx) => {
    try {
        let data = await api.getReportsByCountries(ctx.message.text)
        const formatData = `
            Страна: ${data[0][0].country}
            Случаи: ${data[0][0].cases}
            Смертей: ${data[0][0].deaths}
            Вылечились: ${data[0][0].recovered}
        `
        ctx.reply(formatData)
    } catch {
        ctx.reply('Ошибка, такой страны не существует')
    }
    
})

bot.launch()
console.log('запущено')