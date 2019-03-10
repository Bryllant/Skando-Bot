const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    var help = new Discord.RichEmbed()
    .setDescription("Toutes mes commandes")
    .setTimestamp()
    .setColor("RANDOM")
    .setTitle("?help")
    .addField("?pdp", "affiche ton image de profil")
    .addField("?createur", "Découvrir mon maître")
    .addField("?invite", "donne le serveur de mon créateur")
    .addField("?botinfo", "Donne des informations sur moi")
    .addField("?clear", "Supprime un nombre de message défini")
    .addField("?juste-prix", "lance un juste prix")
    .addField("?bingo", "1 minute pour trovuer un nombre")
    .addField("?say", "pour dire une phrase au bot")
    .addField("?lettres-caches", "cache un texte et le fait dire par le bot")
    .addField("?bug", "un bug est survenu? Fait cette commande pour nous le signaler")
    .addField("?suggestion", "avec cette commande tu peux émettre tes suggestions pour le serveur")
    .addField("?youtube", "lance une recherche youtube")
    .addField("?kick", "exclure un membre")
    .addField("?ban", "bannir un membre")
    .addField("?serverinfo", "donne des informations sur ce serveur")
    .setFooter("?help")


    return message.channel.send(help)


};

module.exports.help = {
    name: "help"
  }
