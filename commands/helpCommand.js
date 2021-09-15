const helpCommand = (msg) => {
  msg.channel.send(`
     1) !setup yoursteamid -> to setup your steam id (you need to setup your steam id before !play)\n2) !play @xyz @abc @pqr ... (dont mention yourself in the !play you will be added autoamtically) -> to get a commong steam game between the mentioned users 
    `);
};

export default helpCommand;
