const { Telegraf } = require('telegraf')
const dotenv = require('dotenv');

    dotenv.config()

const bot = new Telegraf(process.env.token);

bot.launch()

module.exports = { bot }