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

      Promise.all(arrayOfGamePromises).then((data) => {
        containsAll(data);
        function containsAll(data) {
          var output = [];
          var cntObj = {};
          var array, item, cnt;

          for (var i = 0; i < data.length; i++) {
            array = data[i];

            for (var j = 0; j < array.length; j++) {
              item = "-" + array[j];
              cnt = cntObj[item] || 0;

              if (cnt == i) {
                cntObj[item] = cnt + 1;
              }
            }
          }

          for (item in cntObj) {
            if (cntObj.hasOwnProperty(item) && cntObj[item] === data.length) {
              output.push(item.substring(1));
            }
          }
          console.log(output);
          if (output.length != 0) {
            let randomNumber = Math.floor(Math.random() * output.length - 1);
            message.channel.send(output[randomNumber]);
          } else {
            message.channel.send("You dont have any games in common ;(");
          }
        }
      });
    }
  };

  findMultipleUsers(playerArray, getPlayerGames);
};

export default playGames;
