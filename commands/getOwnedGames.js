import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const getOwnedGames = () => {
const steamId = `76561198244441968`;
    var listOfGames = [];

    fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${steamId}&format=json&include_appinfo=true`
    )
      .then((data) => data.json())
      .then(
        (data) => {
          for (let i = 0; i <= data.response.game_count; i++) {
            if (
              data &&
              data.response &&
              data.response.games &&
              data.response.games[i] &&
              data.response.games[i].name
            ) {
              let obj = data.response.games[i].name;
              listOfGames.push(obj);
            }
          }
        }

      );
    }

export default getOwnedGames;