module.exports.run = async (bot, message) => {
    var embed = new Discord.RichEmbed()
    .setDescription("Maintenance")
    .setTimestamp()
    .setColor("#008000")
    .addField("Commandes en maintenance", "fortnite \n weather \n sondage \n setup-stats \n")
    message.channel.send(embed)
}
module.exports.help = {
    name: "maintenance"
  }
