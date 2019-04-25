const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    var helpMembre = new Discord.RichEmbed()
    .setDescription("Toutes mes commandes")
    .setTimestamp()
    .setColor("#008000")
    .setTitle("%help")
    .addField("Utilitaires", "`botinfo` `bug` `createur` `fortnite` `invite` `ping` `server` `serverinfo` `serverlist` `suggestion` `uptime` `weather` `youtube`")
    .addField("Modération", "`annonce` `ban` `clear` `embed` `game` `kick` `mp` `pub` `regle` `salon` `setup-stats` `setup` `sondage` ")
    .addField("Images", "`cat` `dog` `pdp`")
    .addField("Fun", "`ascii` `bingo` `juste-prix` `lettres-caches` `qr` `say` `virus`````````````````")
}
message.channel.send(embed)
module.exports.help = {
    name: "help"
  }
