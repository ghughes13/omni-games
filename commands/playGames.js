import { Client, Message } from "discord.js";
import { findMultipleUsers, findUser } from "../util/apiFunctions.js";
import getOwnedGames from "./getOwnedGames.js";

const client = new Client();

const playGames = (message) => {
  if (!message.mentions.users.first())
    return message.channel.send(`You have not mentioned users.`);

  const userArray = message.mentions.users.array();
  var playerArray = [];
  playerArray[userArray.length] = message.author.id; //stores the id of the user who runs the play command

  for (let i = 0; i < userArray.length; i++) {
    playerArray[i] = userArray[i].id;
  }

  const logUsers = (users) => {
    let playerGamesArray = [];

    if (playerArray.length !== users.length) {
      message.channel.send(`Please set up your Steam ID`);
    } else {
      console.log(playerArray.length);
      for (let j = 0; j < playerArray.length; j++) {
        playerGamesArray.push(getOwnedGames(users[j].steamId));
        console.log(playerGamesArray);
      }
    }
  };

  findMultipleUsers(playerArray, logUsers);
};

export default playGames;
