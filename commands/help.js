const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    var embed = new Discord.RichEmbed()
    .setDescription("Toutes mes commandes")
    .setTimestamp()
    .setColor("#008000")
    .setTitle("%help")
    .addField("Utilitaires (13)", "`botinfo` `bug` `createur` `fortnite` `invite` `ping` `server` `serverinfo` `serverlist` `suggestion` `uptime` `weather` `youtube`")
    .addField("Modération (13)", "`annonce` `ban` `clear` `embed` `game` `kick` `mp` `pub` `regle` `salon` `setup-stats` `setup` `sondage` ")
    .addField("Images (3)", "`cat` `dog` `pdp`")
    .addField("Fun (7)", "`ascii` `bingo` `juste-prix` `lettres-caches` `qr` `say` `virus`")
    message.channel.send(embed)
}
module.exports.help = {
    name: "help"
  }
