 import { Client } from "discord.js";
 const client = new Client();

 const setupCommand = (message, args) => {
    
  
if (!args.length) {
    return message.channel.send(`Please enter Steam id as - !setup yoursteamid`);
  }
  else {
    if(isNaN(args[0])){
        message.channel.send(args[0] + " is not a number"); return
        }
    message.channel.send(`Your Steam Id has been saved`);
    const userSteamId = args[0];
    const userDiscordId = message.author.id ;
    
 }
}
  export default setupCommand;
 