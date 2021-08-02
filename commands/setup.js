import { Client, User } from "discord.js";
const client = new Client();
const setup = (message) => {
    
    message.channel.send("Please enter your steamID");

    client.on("message", (message) =>{
      if(!message.author.id === User) return;
      const userInput = message.content
      console.log(userInput);
    })

  };
  
  export default setup;
  