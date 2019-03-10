const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    message.reply("Voici le lien d'invitations du serveur https://discord.gg/46mC9vj");
};

module.exports.help = {
    name: "invite"
  }