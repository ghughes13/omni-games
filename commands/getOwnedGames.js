import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const getOwnedGames = (steamId) => {
  return new Promise((resolve) => {
    fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${steamId}&format=json&include_appinfo=true`
    )
      .then((data) => data.json())
      .then((data) => {
        var obj = [];
        for (let i = 0; i <= data.response.game_count; i++) {
          if (
            data &&
            data.response &&
            data.response.games &&
            data.response.games[i] &&
            data.response.games[i].name
          ) {
            obj[i] = data.response.games[i].name;
          }
        }
        resolve(obj);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

export default getOwnedGames;
