const Discord = require('discord.js')

module.exports.run = async (bot, message, guild, channel) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return;

    var premaj = new Discord.RichEmbed()
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter("annonce de maj")
    .addField("Maj du serveur", "La mise a jour du serveur arrive dans une minute !")

    var maj = new Discord.RichEmbed()
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter("début de maj")
    .addField("Maj du serveur", "Le serveur est en cours de mise a jour!")

    message.delete()

    information = bot.guilds.get("469111638835068928").channels.find(`name`, "『🔒』modos");
    general = bot.guilds.get("469111638835068928").channels.find(`name`, "beta-du-bot");
    information.send(premaj).then(message => message.delete(60000));
    information.send("<&505313884073099275> <&506179552914047006>").then(message => message.delete(60000))
    

   await general.send("La maj commence dans **60** secondes").then(message => {
      setTimeout(() => {

        message.edit("La maj commence dans **50** secondes");
      }, 10000);
  
      setTimeout(() => {

        message.edit("La maj commence dans **40** secondes");
      }, 10000);
  
      setTimeout(() => {

        message.edit("La maj commence dans **30** secondes");
      }, 10000);
  
      setTimeout(() => {

        message.edit("La maj commence dans **20** secondes");
      }, 10000);
  
      setTimeout(() => {

        message.edit("La maj commence dans **10** secondes");
      }, 10000);
  
      setTimeout(() => {
        message.edit("Début de la mise a jour du serveur✅");
      }, 10000);
   
    }); 
    //METTRE LES @ L60/L64
    information.send(maj)
    information.send("<&505313884073099275> <&506179552914047006>")
    general.send(maj)
}
module.exports.help = {
    name: "maj"
  }

  //METTRE LES @ L60/L64
