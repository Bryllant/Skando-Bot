const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    var embed = new Discord.RichEmbed()
    .setDescription("Toutes mes commandes")
    .setTimestamp()
    .setColor("#008000")
    .setTitle("%help")
    .addField("Utilitaires (15)", "`botinfo` `bug` `createur` `fortnite` `invite` `ping` `server` `serverinfo` `serverlist` `suggestion` `uptime` `weather` `youtube` `membercount` `maintenance`")
    .addField("Modération (16)", "`annonce` `ban` `clear` `embed` `game` `kick` `mp` `pub` `regle` `salon` `setup-stat` `setup` `sondage` `removerole` `addrole` `tempmute`")
    .addField("Images (3)", "`cat` `dog` `pdp`")
    .addField("Fun (7)", "`ascii` `bingo` `juste-prix` `lettres-caches` `qr` `say` `virus` `coinflip`")
    message.channel.send(embed)
}
module.exports.help = {
    name: "help"
  }
 