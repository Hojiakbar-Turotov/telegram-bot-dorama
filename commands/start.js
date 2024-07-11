const { bot } = require('./bot');
const { Markup } = require('telegraf')
const User = require('../db/User')
const { answerMessage } = require('./message.js')

const joinChannelButton = Markup.inlineKeyboard([
    [Markup.button.url(`Kanalga a'zo bo'lish`, 'https://t.me/Dr_eam_dub')],
    [Markup.button.callback(`Tekshirish`, `joinChannelStatus`)]
])

bot.on('message', async (ctx) => {
    const channel = `@Dr_eam_dub`
    const chatMember = await ctx.telegram.getChatMember(channel, ctx.from.id);
    const isSubscribed = ["administrator", "member", "owner", "creator"].includes(chatMember.status)
    const newUserData = {
        telegram_id: ctx.from.id,
        username: ctx.from.username,
        first_name: ctx.from.first_name,
        last_name: ctx.from.last_name,
        language_code: ctx.from.language_code
    }
    if (isSubscribed) {
        const isExist = await User.findOne({ telegram_id: ctx.from.id })
        if (isExist) { return answerMessage(ctx) }
        const newUser = await User.create(newUserData)
        if (!newUser) {
            return ctx.reply('Error')
        }
        return answerMessage(ctx)
    } else {
        return ctx.reply(`Kanalga a'zo bo'ling 😎😎😎`, joinChannelButton)
    }
})

bot.on('callback_query', async (ctx) => {
    const callbackData = ctx.callbackQuery.data;
    switch (callbackData) {
        case 'joinChannelStatus':
            const channel = `@Dr_eam_dub`
            const chatMember = await ctx.telegram.getChatMember(channel, ctx.from.id);
            const isSubscribed = ["administrator", "member", "owner", "creator"].includes(chatMember.status)
            if (isSubscribed) {
                ctx.deleteMessage();
                return ctx.reply(`Assalomu aleykum botdan foydalanishingiz mumkin. Dorama kodlarini @Dr_eam_dub kanalidan olishingiz mumkin.`)
            } else {
                ctx.deleteMessage();
                return ctx.reply(`Kanalga a'zo bo'ling 😡😡😡`, joinChannelButton)
            }
            break;
    }
})