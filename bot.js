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

Наше маленькое сообщество очень радо тому, что ты
с нами!

Будет круто, если ты немного расскажешь о себе :)
Нам так будет интереснее вести беседу ;)

А еще ты можешь набрать /start для запуска полезного бота :)`)
})

// bot.help((ctx) => ctx.reply(COUNTRIES_LIST))

// bot.on('text', async (ctx) => {
//     try {
//         let data = await api.getReportsByCountries(ctx.message.text)
//         const formatData = `
//             Страна: ${data[0][0].country}
//             Случаи: ${data[0][0].cases}
//             Смертей: ${data[0][0].deaths}
//             Вылечились: ${data[0][0].recovered}
//         `
//         ctx.reply(formatData)
//     } catch {
//         ctx.reply('Ошибка, такой страны не существует')
//     }
    
// })

bot.launch()
console.log('запущено')