const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return;
    const sushi = new Discord.RichEmbed()
    .setColor("#008000")
    .setFooter("Ici tu peux obtenir des rôles")
    .addField("Clique sur les réaction pour avoir le rôle", "Chaque role t'ouvrira un salon spécifique")
    .addField("En venant sur le serveur nous considérons que les règles sont lues et acceptés", "Pour avoir accès aux salons, cliquez sur la réaction :white_check_mark:")
    .addField("Role CsGo", "Pour avoir accès au salon cs cliquez sur la réaction csgo")
    .addField("Role fortnite", "Pour avoir accès au salon fortnite, cliquez sur la réaction fortnite")
    .addField("Role notifié", "Pour avoir les notifs du serveur cliquez sur la réaction :bell:")
    .addField("Role minecraft", "Pour avoir accès au salon minecraft, cliquez sur la réaction minecraft")
    .addField("Role rocket league", "Pour avoir accès au salon de rocket league, cliquez sur la réaction rocketleague")
    .addField("Role participant event", "Pour avoir la notif des events cliquez sur la réaction :tada:")
    
    message.channel.send(sushi);
}

    module.exports.help = {
    name: "role_regle"
  }