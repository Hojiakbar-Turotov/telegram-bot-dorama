const { bot } = require('../commands/bot.js')

const movies = {
    f_1: {
        q_1: `BAACAgIAAxkBAAOUZo4janvRhZkya00ZpCYXzqLgLH0AAsw5AALAKZhJ3WfSXDPNjNY1BA`,
        q_2: `BAACAgIAAxkBAAOzZo4pxivMTtiD0U2lXfR-6HQT2ZsAAmY4AAJD7qlJKZyuqriBE7Q1BA`,
        q_3: `BAACAgIAAxkBAAO0Zo4pxumRR0uqGRGDYUp1gTpCbHEAAnc4AAJD7qlJY8kkEiL-tnc1BA`,
        q_4: `BAACAgIAAxkBAAO1Zo4pxsKMiH-g3Y96Y-D_TpvDm7gAAuAyAAJD7rFJlUMvPCWoLzs1BA`,
        q_5: `BAACAgIAAxkBAAO2Zo4pxko2a_l63TjaZc4-RkRA1GYAAv4yAAJD7rFJOcd0Urslzj01BA`,
        q_6: `BAACAgIAAxkBAAO3Zo4pxh51U4rMZNG-tjfReM9V3gwAApsyAAJD7rlJonHC4Hoetqw1BA`,
        q_7: `BAACAgIAAxkBAAO6Zo4pxjxJua9Mh--8ZWD1Hg3GSvkAAos1AAJ7OMBJIkFiLU2KkgM1BA`,
        q_8: `BAACAgIAAxkBAAO5Zo4pxtFX7MSWJq8NtgABrIF_DvNtAAI5NQACezjASQWMQ607KgWoNQQ`,
        q_9: `BAACAgIAAxkBAAIBDWaOMR8QGWE49kxnLMKB1NuNoX1wAAKLNQACezjASSJBYi1NipIDNQQ`,
        q_10: `BAACAgIAAxkBAAO7Zo4pxsLXDFyD4NeGLxw2d_AJOrwAAiw6AAJ7OMBJsHIAAV9ovCsmNQQ`,
        q_11: `BAACAgIAAxkBAAO8Zo4pxpog7cwVuLNHC3Xvhqr150wAApM6AAJ7OMBJu36c1Ei00fA1BA`,
        q_12: `BAACAgIAAxkBAAO9Zo4pxgqDlmXC-K1KWLtPcPBzMhwAArA9AAJ6SMhJnHAeobVyxSA1BA`,
        q_13: `BAACAgIAAxkBAAO-Zo4pxnI_zcWRHkem-3YlQFT4rwsAAidBAAJ6SMhJwYMbnHs4cwg1BA`,
        q_14: `BAACAgIAAxkBAAO_Zo4pxrIO2pqsRqwNtxNngWNdqawAAoBBAAJ6SMhJoGrp5k-Pytg1BA`,
        q_15: `BAACAgIAAxkBAAPAZo4pxohv1En_R-XNfIkreRBH3wcAAkRCAAJ6SMhJVPQeKknjlSA1BA`,
        q_16: `BAACAgIAAxkBAAPBZo4pxk3Ukz7ZKr9l6IbE9oRXpVIAAtA5AAIQJtBJ32Q21AE21OI1BA`,
    },
    f_2: {
        q_1: `BAACAgIAAxkBAAOnZo4pPHUhgvZMfn68m2Q_T2NYAnoAAtgwAALmf_BL20iSKc9JP_k1BA`,
        q_2: `BAACAgIAAxkBAAPCZo4pxvA47WxgYxD_Sgw8joMs2O4AAv8wAALmf_BLj9o51vwuYW41BA`,
        q_3: `BAACAgIAAxkBAAPEZo4pxgF3slK2fZAUCAsx8PnLQJsAAgsxAALmf_BLJt65cQR-CmQ1BA`,
        q_4: `BAACAgIAAxkBAAIBHGaOMfeAHdU9lRll0z-lWG1ZdTXOAAIcMQAC5n_wS-nGWVR-YzcaNQQ`,
        q_5: `BAACAgIAAxkBAAPGZo4pxkjgRhvywsuNC0u3I20xW1UAAicxAALmf_BLYrR-aJTj5zM1BA`,
        q_6: `BAACAgIAAxkBAAPHZo4pxqzfM52ZPcRYfRXt61URUcYAAigxAALmf_BLBCaDk69BYUg1BA`,
        q_7: `BAACAgIAAxkBAAPIZo4pxiN5-uCarjwC1ZkRKW5POdgAAmoxAALmf_BL61Z1ImpeWC01BA`,
        q_8: `BAACAgIAAxkBAAPJZo4pxvEyRA6lBU6GlI8VnPLTY2EAAmgxAALmf_BL01dwvhQ07ms1BA`,
        q_9: `BAACAgIAAxkBAAPKZo4pxkhMEwG6Byf9i_ALMcNOU20AAqkxAALmf_BLEEb4rNQK_EA1BA`,
        q_10: `BAACAgIAAxkBAAPLZo4pxusNpVEl-fg7lBs6v-t2knYAAq8xAALmf_BLAikUPuWbva81BA`,
        q_11: `BAACAgIAAxkBAAPMZo4pxoYLaQg0ecgE7AI2BrcbAAFAAAK2MQAC5n_wS9odY9lkTK82NQQ`,
        q_12: `BAACAgIAAxkBAAPNZo4pxrZbvZ6hFT99GgmtVweoXEAAArsxAALmf_BLWlURYUJ6Nuw1BA`,
    }
}

const inlineKeyboard = {
    f_1: [
        [
            { text: '1-Fasl', callback_data: 'fasl_1' },
            { text: '2-Fasl', callback_data: 'fasl_2' }
        ],
        [
            { text: '1', callback_data: 'f_1_q_1' },
            { text: '2', callback_data: 'f_1_q_2' },
            { text: '3', callback_data: 'f_1_q_3' },
            { text: '4', callback_data: 'f_1_q_4' },
            { text: '5', callback_data: 'f_1_q_5' },
        ],
        [
            { text: '6', callback_data: 'f_1_q_6' },
            { text: '7', callback_data: 'f_1_q_7' },
            { text: '8', callback_data: 'f_1_q_8' },
            { text: '9', callback_data: 'f_1_q_9' },
            { text: '10', callback_data: 'f_1_q_10' },
        ], [
            { text: '11', callback_data: 'f_1_q_11' },
            { text: '12', callback_data: 'f_1_q_12' },
            { text: '13', callback_data: 'f_1_q_13' },
            { text: '14', callback_data: 'f_1_q_14' },
            { text: '15', callback_data: 'f_1_q_15' },
            { text: '16', callback_data: 'f_1_q_16' },
        ]
    ],
    f_2: [
        [
            { text: '1-Fasl', callback_data: 'fasl_1' },
            { text: '2-Fasl', callback_data: 'fasl_2' }
        ],
        [
            { text: '1', callback_data: 'f_2_q_1' },
            { text: '2', callback_data: 'f_2_q_2' },
            { text: '3', callback_data: 'f_2_q_3' },
            { text: '4', callback_data: 'f_2_q_4' },
            { text: '5', callback_data: 'f_2_q_5' },
            { text: '6', callback_data: 'f_2_q_6' },
        ],
        [
            { text: '7', callback_data: 'f_2_q_7' },
            { text: '8', callback_data: 'f_2_q_8' },
            { text: '9', callback_data: 'f_2_q_9' },
            { text: '10', callback_data: 'f_2_q_10' },
            { text: '11', callback_data: 'f_2_q_11' },
            { text: '12', callback_data: 'f_2_q_12' },
        ]
    ]
};

async function dorama1(ctx) {
    ctx.replyWithVideo(movies.f_1.q_1, {
        caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 1-qism`,
        reply_markup: {
            inline_keyboard: inlineKeyboard.f_1
        }
    })

    bot.on('callback_query', (ctx) => {
        const callbackData = ctx.callbackQuery.data;
        ctx.deleteMessage();
        switch (callbackData) {
            case 'fasl_1':
                ctx.replyWithVideo(movies.f_1.q_1, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 1-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_1':
                ctx.replyWithVideo(movies.f_1.q_1, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 1-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_2':
                ctx.replyWithVideo(movies.f_1.q_2, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 2-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_3':
                ctx.replyWithVideo(movies.f_1.q_3, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 3-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_4':
                ctx.replyWithVideo(movies.f_1.q_4, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 4-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_5':
                ctx.replyWithVideo(movies.f_1.q_5, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 5-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_6':
                ctx.replyWithVideo(movies.f_1.q_6, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 6-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_7':
                ctx.replyWithVideo(movies.f_1.q_7, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 7-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_8':
                ctx.replyWithVideo(movies.f_1.q_8, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 8-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_9':
                ctx.replyWithVideo(movies.f_1.q_9, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 9-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_10':
                ctx.replyWithVideo(movies.f_1.q_10, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 10-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_11':
                ctx.replyWithVideo(movies.f_1.q_11, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 11-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_12':
                ctx.replyWithVideo(movies.f_1.q_12, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 12-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_13':
                ctx.replyWithVideo(movies.f_1.q_13, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 13-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_14':
                ctx.replyWithVideo(movies.f_1.q_14, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 14-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_15':
                ctx.replyWithVideo(movies.f_1.q_15, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 15-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'f_1_q_16':
                ctx.replyWithVideo(movies.f_1.q_16, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 1-Fasl \n 16-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_1
                    }
                })
                break;
            case 'fasl_2':
                ctx.replyWithVideo(movies.f_2.q_1, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 1-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_1':
                ctx.replyWithVideo(movies.f_2.q_1, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 1-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_2':
                ctx.replyWithVideo(movies.f_2.q_2, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 2-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_3':
                ctx.replyWithVideo(movies.f_2.q_3, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 3-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_4':
                ctx.replyWithVideo(movies.f_2.q_4, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 4-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_5':
                ctx.replyWithVideo(movies.f_2.q_5, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 5-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_6':
                ctx.replyWithVideo(movies.f_2.q_6, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 6-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_7':
                ctx.replyWithVideo(movies.f_2.q_7, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 7-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_8':
                ctx.replyWithVideo(movies.f_2.q_8, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 8-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_9':
                ctx.replyWithVideo(movies.f_2.q_9, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 9-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_10':
                ctx.replyWithVideo(movies.f_2.q_10, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 10-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_11':
                ctx.replyWithVideo(movies.f_2.q_11, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 11-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            case 'f_2_q_12':
                ctx.replyWithVideo(movies.f_2.q_12, {
                    caption: `Toʻqqiz dumli tulki haqida afsona 🦊 \n 2-Fasl \n 12-qism`,
                    reply_markup: {
                        inline_keyboard: inlineKeyboard.f_2
                    }
                })
                break;
            default: {
                ctx.reply('Hatolik')
            }
        }
    })
}





module.exports = { dorama1 };