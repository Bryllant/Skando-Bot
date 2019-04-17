const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    var helpMembre = new Discord.RichEmbed()
    .setDescription("Toutes mes commandes")
    .setTimestamp()
    .setColor("#008000")
    .setTitle("%help")
    .addField("%pdp", "affiche ton image de profil")
    .addField("%createur", "Découvrir mon maître")
    .addField("%server", "donne le serveur de mon créateur")
    .addField("%invite", "donne le lien pour m'inviter sur ton serveur")
    .addField("%botinfo", "Donne des informations sur moi")
    .addField("%bingo", "1 minute pour trouver un nombre")
    .addField("%juste-prix", "1 minutes pour trouver un nombre (sans aide)")
    .addField("%bug", "un bug est survenu? Fait cette commande pour nous le signaler")
    .addField("%suggestion", "avec cette commande tu peux émettre tes suggestions pour le serveur")
    .addField("%youtube", "lance une recherche youtube")
    .addField("%serverinfo", "donne des informations sur ce serveur")
    .addField("%user-info", "Donne des informations sur vous")
    .setFooter("%help")

    var helpModo = new Discord.RichEmbed()
    .setDescription("Toutes mes commandes")
    .setTimestamp()
    .setColor("#008000")
    .setTitle("%help")
    .addField("%pdp", "affiche ton image de profil")
    .addField("%createur", "Découvrir mon maître")
    .addField("%server", "donne le serveur de mon créateur")
    .addField("%invite", "donne le lien pour m'inviter sur ton serveur")
    .addField("%botinfo", "Donne des informations sur moi")
    .addField("%juste-prix", "lance un juste prix")
    .addField("%bingo", "1 minute pour trovuer un nombre")
    .addField("%bug", "un bug est survenu? Fait cette commande pour nous le signaler")
    .addField("%suggestion", "avec cette commande tu peux émettre tes suggestions pour le serveur")
    .addField("%youtube", "lance une recherche youtube")
    .addField("%server-info", "donne des informations sur ce serveur")
    .addField("%lettres-caches", "cache un texte et le fait dire par le bot")
    .setFooter("%help")

    var helpModoperm = new Discord.RichEmbed()
    .setDescription("Commandes de modération")
    .setTimestamp()
    .setColor("#008000")
    .addField("%kick", "exclure un membre")
    .addField("%ban", "bannir un membre")
    .addField("%clear", "Supprime un nombre de message défini")
    .addField("%virus", "A vous de découvrir x)")
    .addField("%say", "Pour faire dire une phrase au bot")
    .addField("%embed", "Permet d'envoyer un embed")
    .addField("%salon", "Dire que ce n'est pas le salon aproprié")
    .addField("%pub", "Dire que la pub est interdite")
    .addField("%game", "Permet de dire que ce n'est pas le salona apropprié pour une demande de game")
    .addField("%maj", "Commence la mise a jour du serveur")
    .addField("%mp", "Envoie un mp avec le bot a un membre du serveur")
    .addField("%annonce", "Envoie une annonce dans le salon inormation")
    .addField("%sondage", "Permet de créer un sondage")
    .addField("%setup", "Va setup les channels pour que tout les salons puissent marcher correctemment")



    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send(helpMembre)
    }
else {
    message.channel.send(helpModo)
    message.channel.send(helpModoperm)
}
};

module.exports.help = {
    name: "help"
  }
