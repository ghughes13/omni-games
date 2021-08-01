const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();

client.on("ready", () => {
  console.log("running");
});

client.login(process.env.BOT_TOKEN);
