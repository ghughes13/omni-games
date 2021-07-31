const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "!";

client.on('ready', () => {
  console.log(`Hi, i'm omni bot`);
});

// client.on("message", msg =>{
//   if (msg.author.bot) return;
//   if(msg.content"hey") {
//     msg.reply("stop disturbing me dude")
//   }
// })



 client.on("message", message =>{
   if ( !message.content.startsWith(PREFIX) || message.author.bot) return;

   const args = message.content.slice(PREFIX.length).trim().split(/ +/);
   const command = args.shift().toLocaleLowerCase();

   if (command === `ping`) {
     const taggedUser = message.mentions.users.first();
     message.channel.send(`this stupid guy just pinged you twice : ${taggedUser}`);
     return ;
   }
   

 });



require("dotenv").config();
client.login(process.env.BOT_TOKEN);