import { Client, Message } from "discord.js";
import { findMultipleUsers, findUser } from "../util/apiFunctions.js";

const client = new Client();

const playGames = (message) => {


     if (!message.mentions.users.first()) return message.channel.send(`You have not mentioned users.`); 

    const userArray =  message.mentions.users.array();
    var playerArray=[];
    playerArray[userArray.length]= message.author.id;
    for (let i=0; i<userArray.length; i++){
        playerArray[i] = userArray[i].id;
    }
    

};

export default playGames ;

