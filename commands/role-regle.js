const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return;
    const sushi = new Discord.RichEmbed()
    .setColor("#008000")
    .setFooter("Clique sur les réaction pour avoir le rôle")
    .setFooter("En venant sur le serveur nous considérons que les règles sont lues et acceptés", "Pour avoir accès aux salons, cliquez sur la réaction :white_check_mark:")
    .setFooter("Role CsGo", "Pour avoir accès au salon cs cliquez sur la réaction csgo")
    .setFooter("Role fortnite", "Pour avoir accès au salon fortnite, cliquez sur la réaction fortnite")
    .setFooter("Role notifié", "Pour avoir les notifs du serveur cliquez sur la réaction :bell:")
    .setFooter("Role minecraft", "Pour avoir accès au salon minecraft, cliquez sur la réaction minecraft")
    .setFooter("Role rocket league", "Pour avoir accès au salon de rocket league, cliquez sur la réaction rocketleague")
    .setFooter("Role participant event", "Pour avoir la notif des events cliquez sur la réaction :tada:")
    
    message.channel.send(sushi);
}

    module.exports.help = {
    name: "role_regle"
  }