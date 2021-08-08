import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://OmniBotBuilder:${process.env.DBPASS}${process.env.DBUSER}.kx2vg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .catch(() => console.error("Unable to connect to DB"));

mongoose.connection.on("connected", () => {});

const Schema = mongoose.Schema;

const omniGamesSchema = new Schema({
  discordId: Number,
  steamId: Number,
});

const omniGamesModel = mongoose.model("omniGamesSchema", omniGamesSchema);

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

export { createNewUser };
