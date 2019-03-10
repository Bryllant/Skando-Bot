const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    if((message.author.id === "413327742214471681") || (message.member.hasPermission('MANAGE_MESSAGES'))) {
    let pub = new Discord.RichEmbed()
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter("pub")
    .setTitle("Publicité interdite")
    .setDescription("Dans ce serveur que la pub de serveur ou de vidéo est interdite que ce soit en mp ou dans un channel du serveur")
    message.channel.send(pub)
    message.delete()
}
}

    module.exports.help = {
    name: "pub"
  }


