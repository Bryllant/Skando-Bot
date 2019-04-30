const Discord = require('discord.js')
module.exports.run = async (bot, message) => {
    var embed = new Discord.RichEmbed()
    .setDescription("Maintenance")
    .setTimestamp()
    .setColor("#008000")
    .addField("Commandes en maintenance", "=> fortnite \n => ping \n => setup-stats")
    message.channel.send(embed)
}
module.exports.help = {
    name: "maintenance"
  }
