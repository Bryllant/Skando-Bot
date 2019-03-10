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
    information.send("<@&505313884073099275> <@&506179552914047006>").then(message => message.delete(60000))

    .then(information.send(maj))
    .then(information.send("<@&505313884073099275> <@&506179552914047006>"))
    .then(general.send(maj))


};

module.exports.help = {
    name: "maj"
  }
