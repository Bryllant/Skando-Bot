const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    message.reply("Voici le lien pour m'inviter sur ton serveur https://discordapp.com/api/oauth2/authorize?client_id=530517746677579776&permissions=8&scope=bot");
};

module.exports.help = {
    name: "invite"
  }