const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
      message.delete(message.author);
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      if(!sayMessage) return;
      message.channel.send(sayMessage);

}

module.exports.help = {
      name: "say"
    }