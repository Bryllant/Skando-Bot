
module.exports.run = async (bot, message) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete();
  
    message.channel.send("**Activation du virus Token.exe ⚠**").then(message => {
      setTimeout(() => {

        message.edit("░░░░░░░░░░ 0%");
      }, 1000);
  
      setTimeout(() => {

        message.edit("▓▓░░░░░░░░ 20%");
      }, 1500);
  
      setTimeout(() => {

        message.edit("▓▓▓▓░░░░░░ 40%");
      }, 2000);
  
      setTimeout(() => {

        message.edit("▓▓▓▓▓▓░░░░ 60%");
      }, 2500);
  
      setTimeout(() => {

        message.edit("▓▓▓▓▓▓▓▓░░ 80%");
      }, 3000);
  
      setTimeout(() => {

        message.edit("▓▓▓▓▓▓▓▓▓▓ 100%");
      }, 3500);
  
      setTimeout(() => {
        message.edit("Activation du  virus avec succès ✅");
      }, 3500);
  
      setTimeout(() => {
        message.edit(
          `Bravo !!! Vous vous êtes fait Troll par ${message.author.username}`
        );
      }, 3500);
    });
  };

module.exports.help = {
    name: "virus"
  }