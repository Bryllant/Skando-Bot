const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    message.channel.sendMessage("Mon créateur est <@468342061230456833> fait %invite pour rejoindre son serveur");
};

module.exports.help = {
    name: "createur"
  }