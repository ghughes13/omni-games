import { Client } from "discord.js";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { createNewUser } from "../util/apiFunctions.js";

const client = new Client();

dotenv.config();

const setupCommand = (message, args) => {
  const userSteamId = args[0];
  const userDiscordId = message.author.id;

  if (!args.length) {
    return message.channel.send(
      `Please enter Steam id as - !setup yoursteamid`
    );
  } else {
    if (isNaN(userSteamId)) {
      message.channel.send(userSteamId + " is not a number");
      return;
    }

    fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${userSteamId}`
    )
      .then((data) => data.json())
      .then((data) => {
        if (
          data &&
          data.response &&
          data.response.players &&
          data.response.players[0]
        ) {
          createNewUser(userDiscordId, userSteamId);
          message.channel.send(`Your Steam Id has been saved`);
        } else message.channel.send(`Please enter a valid Steam id`);
      })
      .catch((err) => {
        message.channel.send(`There was an error,so please try again`);
      });
  }
};
export default setupCommand;
