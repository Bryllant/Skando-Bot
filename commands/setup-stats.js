module.exports.run = async (bot, message) => {
  await message.guild.createChannel('Stats du serveur', 'category')
     let setup = bot.channels.find(c => c.name === "Stats du serveur")
    
    await message.guild.createChannel("Nombre de membre" + member.guild.memberCount, "text").then(channel => channel.setParent(setup))

    await message.guild.createChannel("Nombre de channel" + member.guild.channelCount, "text").then(channel => channel.setParent(setup))
    
    await message.guild.createChannel("Bots" + message.guild.members.filter(member => member.user.bot === true).size, true, 'text').then(channel => channel.setParent(setup))
    
    await message.guild.createChannel("Connecté" + message.guild.members.filter(member => member.presence.status != "offline").size, true, "text").then(channel => channel.setParent(setup))
}

    module.exports.help = {
    name: "setup-stat"
  }