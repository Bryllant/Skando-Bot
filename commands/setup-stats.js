module.exports.run = async (bot, message, member) => {
  await message.guild.createChannel('Stats du serveur', 'category')
     let setup = bot.channels.find(c => c.name === "Stats du serveur")
    
    await message.guild.createChannel("Membres", "text").then(channel => channel.setParent(setup))

    await message.guild.createChannel("Bots", "text").then(channel => channel.setParent(setup))
    
    await message.guild.createChannel("Connectés", "text").then(channel => channel.setParent(setup))
    
    await message.guild.createChannel("Channels", "text").then(channel => channel.setParent(setup))
}

    module.exports.help = {
    name: "setup-stat"
  }

  
  
  
  