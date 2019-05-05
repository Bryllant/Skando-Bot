const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    if(message.member.hasPermission('MANAGE_MESSAGES')) {
    let pub = new Discord.RichEmbed()
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter("general")
    .setTitle("Tu parles dans le mauvais salon")
    .setDescription("Pour les discussions sans thème précis il faut aller dans #『👍』général-abonnés")
    message.channel.send(pub)
    message.delete()
}
}

    module.exports.help = {
    name: "general"
  }
