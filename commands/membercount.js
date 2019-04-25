const Discord = require('discord.js')

module.exports.run = async (bot, message) => {

    bot = message.guild.members.filter(member => member.user.bot === true).size
    total =  message.guild.memberCount
    humains = total - bot

    let count = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Connectés", message.guild.members.filter(member => member.presence.status != "offline").size, true)
    .addField("Nombre total de membre:", message.guild.memberCount)
    .addField("Nombre de bot", message.guild.members.filter(member => member.user.bot === true).size, true)
    .addField("Nombre d'humains", humains)


    message.channel.send(count)

}

    module.exports.help = {
    name: "membercount"
  }