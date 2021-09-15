import { Client } from "discord.js";
import setupCommand from "./commands/setupCommand.js";
import helpCommand from "./commands/helpCommand.js";
import getOwnedGames from "./commands/getOwnedGames.js";
import playGames from "./commands/playGames.js";
import dotenv from "dotenv";

const client = new Client();
const PREFIX = "!";

dotenv.config();

client.on("ready", () => {
  console.log(`Bot is now Online....`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLocaleLowerCase();

  if (command === "help") {
    helpCommand(message);
  }

  if (command === `setup`) {
    setupCommand(message, args);
  }

  if (command === `check`) {
    getOwnedGames();
  }
  if (command === "play") {
    playGames(message);
  }
});

client.login(process.env.BOT_TOKEN);
