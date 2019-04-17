const Discord = require('discord.js')

module.exports.run = async(bot, message, channel, guild, cmd) => {
    if (message.guild.channels.find('name', 'mod-log', "tchat", "ticket-support", "reports", "reboot-bot", "dm-support", "acceuil", "aurevoir" )) return
    
    await message.guild.createChannel('Skando-Bot', 'category')
     let setup = bot.channels.find(c => c.name === "Skando-Bot")
    
    await message.guild.createChannel("『🎉』bienvenue", "text").then(channel => channel.setParent(setup))

    await message.guild.createChannel("logs-bot", "text").then(channel => channel.setParent(setup))
    
    await message.guild.createChannel("『🔒』modos", 'text').then(channel => channel.setParent(setup))
    
    await message.guild.createChannel("#『📊』sondages", "text").then(channel => channel.setParent(setup))
    };
    

    module.exports.help = {
    name: "setup"
  }
