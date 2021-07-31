const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hi, i'm omni bot`);
});
require("dotenv").config();

client.login(process.env.BOT_TOKEN);