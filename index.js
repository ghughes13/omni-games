import { Client, User } from "discord.js";
import testCommand from "./commands/testCommand.js";
import setup from "./commands/setup.js";
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
    setup(message);
  }
  
});

client.login(process.env.BOT_TOKEN);
