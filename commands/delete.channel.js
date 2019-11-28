const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Personne non autorisé"); 


    let nom = message.content.split(' ').slice(1).join(' ');

    if(!nom) return message.channel.send(`Veuillez inscrire le nom du channel à supprimer`);
    
    await message.guild.deleteChannel(nom, "text")
}

    module.exports.help = {
    name: "delete-channel"
  }