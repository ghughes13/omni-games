import { Client } from "discord.js";
import testCommand from "./commands/testCommand.js";
import setupCommand from "./commands/setupCommand.js";
import helpCommand from "./commands/helpCommand.js"
import dotenv from "dotenv";


const client = new Client();
const PREFIX = "!";

dotenv.config();

client.on("ready", () => {
  console.log(`Bot is now Online...`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLocaleLowerCase();

  if (command === `ping`) {
    testCommand(message);
  }

  if (command === 'help') {
    helpCommand(message);
  }

  if (command === `setup`) {
    setupCommand(message, args);
  }
  
});

client.login(process.env.BOT_TOKEN);
