import { Client, User } from "discord.js";
import testCommand from "./commands/testCommand.js";
import dotenv from "dotenv";

const client = new Client();
const PREFIX = "!";

dotenv.config();

client.on("ready", () => {
  console.log(`Running...`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLocaleLowerCase();

  if (command === `ping`) {
    testCommand(message);
  }

  if (command === `setup`) {
    message.channel.send("Please enter your steamID");

    client.on("message", (message) =>{
      if(!message.author.id === User) return;
      const userInput = message.content
      console.log(userInput);
    })
  }
  
});

client.login(process.env.BOT_TOKEN);
