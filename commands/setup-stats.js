module.exports.run = async (bot, message, member) => {
  await message.guild.createChannel('Stats du serveur', 'category')
     let setup = bot.channels.find(c => c.name === "Stats du serveur")
    
    await message.guild.createChannel("Membres", "voice").then(channel => channel.setParent(setup))

    await message.guild.createChannel("Bots", "voice").then(channel => channel.setParent(setup))
    
    await message.guild.createChannel("Connectés", "voice").then(channel => channel.setParent(setup))
    
    await message.guild.createChannel("Channels", "voice").then(channel => channel.setParent(setup))
}

    module.exports.help = {
    name: "setup-stat"
  }

  
  
  
  