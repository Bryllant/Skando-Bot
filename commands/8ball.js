const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if (!args[1]) return message.reply("S'il te plaît, pose-moi une question !");
  
    let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non"];
    
    let res = Math.floor(Math.random() * replies.length);
    
    let askEmbed = new Discord.RichEmbed()
      .setColor("#58D3F7")
      .addField("Réponse", replies[res]);
    
    message.channel.send(askEmbed)
};

module.exports.help = {
    name: "8ball"
  }
