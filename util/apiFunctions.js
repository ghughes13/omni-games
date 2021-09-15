import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch(() => console.error("Unable to connect to DB"));

mongoose.connection.on("connected", () => {});

const Schema = mongoose.Schema;

const omniGamesSchemas = new Schema({
  discordId: String,
  steamId: String,
});

const omniGamesModel = mongoose.model("omniGamesSchemas", omniGamesSchemas);

const createNewUser = (discordId, steamId) => {
  const newUserMap = new omniGamesModel({
    discordId: discordId,
    steamId: steamId,
  });

  newUserMap.save((err) => {
    if (err) {
      console.error(err);
    }
  });
};

const findUser = (discordId) => {
  omniGamesModel
    .find({ discordId: discordId }) //discordId type should === String
    .exec()
    .then((data) => data)
    .catch((err) => {
      console.error(err);
    });
};

const findMultipleUsers = (discordIds, callback) => {
  omniGamesModel
    .find({ discordId: { $in: [...discordIds] } }) //Each discordId in discordIds should === String
    .exec()
    .then((data) => callback(data))
    .catch((err) => {
      console.error(err);
    });
};

export { createNewUser, findUser, findMultipleUsers };
