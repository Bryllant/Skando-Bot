const Discord = require('discord.js')

module.exports.run = async (bot, message) => {

    if (message.member.hasPermission('MANAGE_MESSAGES')) {

    const embed = new Discord.RichEmbed()
    
    .setColor("RANDOM")
    .setFooter("Les règles")
    .setTitle("Voici les règles de ce serveur a respecter")
    .addField("1. Pas de menace envers autrui ", "Les menaces en tout genre seront sévèremment sanctionées allant du simple warn a un ban définitif")
    .addField("2. Pas de publicité.", "Cela inclut d’autres serveurs, produits, services, votre chaîne YouTube etc.")
    .addField("3. Obéissez aux modérateurs", "Si il vous demande d'arrêter, il y a une bonne raison. Cependant, si vous avez un problème et que vous avez des preuves, direction le salon #me-contacter.")
    .addField("4. Utilisez les bons salons.", "Ne vous trompez pas de salon cela permet une bonne cohésion des salons si vous le faites a plusieurs reprises vous obtiendrez un warn ")
    .addField("5. Pas de spam pour monter votre niveau.", "Ceci inclut les messages à répétition ou bien le fait de taper plusieurs fois de suite les mêmes commandes. (en plus de sa y'a un anti spam donc sa marchera pas")
    .addField("6. Ne pas mp le bot pour rien", "Le bot est équipé d'une fonction qui quand vous lui envoyez un mp un modo vous répondra pour vous aider. En cas d'abus cela peut ammener a des peines lourdes")
    .addField("7. Ne pas envoyer de NFSW", "Le NFSW est toatallement interdit ban immédiat")
    .addField("8. Pas de spam", "Le spam en tout genre (emojis et de mention compris) sont interdit ")
    .addField("9. Pas d'abus de réaction", "Evitez les emojis avec des sous entendus ou insultant ainsi que l'abus de reaction en tout genre")
    .addField("10. Pas de commandes n'importe où", "Toutes les commandes liés aux bot se font dans 『🔧』commandes-bot (sauf pour mee6 et le bot musique)")
    .addField("11. Demandes abusives", "Pas la peine de demmander un rôle supèrieur au votre sa ne sert a rien")
    .addField("12. Serveurs laique et apolitique", "On s'en fiche royalement de votre avis politique de même pour la religion")
    .addField("13. Ne pas mentionner pour rien", "Evitez de mentionner skand juste par ce qu'il est la ou les modos sans spécifiez votre demande ( en plus y'a la méthode par les mp)")
    .addField("14. Ne parlez pas pour rien", "Evitez de dire des paroles sans aucun sens ou bien de faire ds mot trop long (par la on veut dire un bonjour de 40 caractères par exemple)")
    .addField("15. Ne pas contester", "Si vous n'êtes pas d'accord avec la décision d'un modo libre a vous mais sachez que vous devez être quasiment sûr d'avoir raison pour cela contatcez un autre modo")
    .addField("16. Ne pas créer plusieurs comptes", "Si vous avez l'envie de créer plusieurs comptes pour éviter d'être ban tout vos comptes seront bannis")
    .addField("17. Pas de troll méchant ", "Tout ce qui reste gentil est accepté")
    .addField("18. Aller retour", "Evitez de quitter et de revenir sur le serveur en très peu de temps")
    .addField("19. Soyez gentil en vocal", "Comme en textuel les insultes sont interdites ainsi que les bruits parasites")

    
    const warn = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter("Les warns")
    .setTitle("Les warns")
    .setTitle("Un warn est un avertissement vous en recevrez un a chaque fois qu'une règle n'a pas été respecté")
    .setDescription("5 warns : 3 jour de ban")
    .setDescription("10 warns : ban a vie ")
    .addField("Nombre de warn toléré", "pour les fans 12 et pour les anciens 15 au niveau 40 vous ne recevrez plus de warn")

    const role = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter("Clique sur les réaction pour avoir le rôle")
    .setTitle("En venant sur le serveur nous considérons que les règles sont lues et acceptés")
    .setDescription("Pour avoir accès aux salons, cliquez sur la réaction :white_check_mark:")
    .setDescription("Pour avoir la notif de CS cliquez sur la réaction :csgo:")
    .setDescription("Pour avoir la notif minecraft, cliquez sur la réaction :minecraft:")
    .setDescription("Pour avoir la notif de  rocket league, cliquez sur la réaction :rocketleague: ")
    .setDescription("Pour avoir la notif des Fortnite News, cliquez sur la réaction  :fortnite:")
    .setDescription("Pour avoir les notifs cliquez sur la réaction  :bell:")
    .setDescription("Pour avoir la notif des events cliques sur la réaction :tada: ")

    message.channel.send(embed);
    message.channel.send(warn);
    message.channel.send(role);
    
}
}
message.delete()
    module.exports.help = {
    name: "regle"
  }