const dotenv = require('dotenv');
dotenv.config();

const { dorama1 } = require('../movie/1.js')
const { dorama2 } = require('../movie/2.js')


function answerMessage(ctx) {
    const message = ctx.message.text;
    const videoFileId = ctx.message.video;
    if (videoFileId) {
        ctx.telegram.sendMessage(process.env.adminId, `Yuborilgan video nomi: ${ctx.message.caption}, \n file_id: ${ctx.message.video.file_id}`)
    }

    switch (message) {
        case '/start':
            ctx.reply(`Assalomu aleykum botdan foydalanishingiz mumkin. Dorama kodlarini @Dr_eam_dub kanalidan olishingiz mumkin.`)
            break;
        case '1':
            dorama1(ctx)
            break;
        case '2':
            dorama2(ctx)
            break;
        default:
            ctx.reply('Bunday kodli dorama topilmadi. Dorama kodlarini @Dr_eam_dub kanalidan olishingiz mumkin.');
            break;
    }
}

module.exports = { answerMessage };
