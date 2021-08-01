const ping = (msg) => {
  console.log("hit ping");
  msg.channel.send(`pong`);
};

export default ping;
