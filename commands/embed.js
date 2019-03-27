const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    if(!args) return message.channel.send("Il faut des arguments !")

    prefix = "?"


    const color = args[0];
    const toslice = Math.floor(prefix.length +7 + color.length);
    const titre = message.content.split("/")[0].slice(toslice);
    
    const description = message.content.split("/")[1].slice(1);

    const embed = new Discord.RichEmbed()
    .setColor(`${color}`)
    .setTitle(titre)
    .setDescription(description)

    message.channel.send(embed);
    
};

module.exports.help = {
    name: "embed"
  }