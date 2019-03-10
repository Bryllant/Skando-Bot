const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot", bot.user.username)
    .addField("Crée le ", bot.user.createdAt)
    .addField("Nombre de serveur:", bot.guilds.size)
    .addField("Nombre de membres", bot.users.size)

    
    return message.channel.send(botembed);
};

module.exports.help = {
    name: "botinfo"
  }






