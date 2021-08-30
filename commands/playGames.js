import { findMultipleUsers } from "../util/apiFunctions.js";
import getOwnedGames from "./getOwnedGames.js";

const playGames = (message) => {
  if (!message.mentions.users.first()) {
    return message.channel.send(`You have not mentioned users.`);
  }

  const userArray = message.mentions.users.array();
  let playerArray = [];
  playerArray[userArray.length] = message.author.id;

  for (let i = 0; i < userArray.length; i++) {
    playerArray[i] = userArray[i].id;
  }

  const getPlayerGames = async (users) => {
    if (playerArray.length !== users.length) {
      message.channel.send(`Please set up your Steam ID`);
    } else {
      let arrayOfGamePromises = [];

      for (let j = 0; j < playerArray.length; j++) {
        arrayOfGamePromises.push(getOwnedGames(users[j].steamId));
      }

      Promise.all(arrayOfGamePromises).then((data) => console.log(data));
    }
  };

  findMultipleUsers(playerArray, getPlayerGames);
};

export default playGames;
