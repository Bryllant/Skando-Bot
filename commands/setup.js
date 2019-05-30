const Discord = require('discord.js')
 
module.exports.run = async(bot, message, channel) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Personne non autorisé"); 
    
    await message.guild.createChannel("『🎉』bienvenue", "text")

    await message.guild.createChannel("logs-bot", "text")
  
    await message.guild.createChannel("『🔒』modos", 'text')
    
    await message.guild.createChannel("『📊』sondages", "text")
    };
    

    module.exports.help = {
    name: "setup"
  }
