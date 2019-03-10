const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    if((message.author.id === "413327742214471681") || (message.member.hasPermission('MANAGE_MESSAGES'))) {
    let game = new Discord.RichEmbed()
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter("Mauvais salon")
    .setTitle("Tu parles dans le mauvais salon")
    .setDescription("Normalement tu ne dois pas parler de ce sujet ici, si tu veux des informations complémentaires sur les salons va dans 『❓』faq")
    message.channel.send(game)
    message.delete()
}
}
    module.exports.help = {
    name: "salon"
  }