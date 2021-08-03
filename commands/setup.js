 import { Client } from "discord.js";
 const client = new Client();
 const setup = (message, args) => {
    
if (!args.length) {
    return message.channel.send('You have not input steam id');
  }
  else {
    console.log(args[0]);
    if(isNaN(args[0])){
        message.channel.send(args[0] + " is not a number"); return
        }
    message.channel.send(`Your Steam Id has been saved`);
 }
}
  export default setup;