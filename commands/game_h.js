const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    if((message.author.id === "413327742214471681") || (message.member.hasPermission('MANAGE_MESSAGES'))) {
    let game = new Discord.RichEmbed()
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter("Mauvais salon")
    .setTitle("Demande de partie dans un mauvais salon")
    .setDescription("Hey ce n'est pas ici que tu dois demander une partie mais plutôt dans #『🎯』demande-de-game")
    message.channel.send(game)
    message.delete()
    }
}

    module.exports.help = {
    name: "game"
  }