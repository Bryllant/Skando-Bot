const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    message.reply("Voici ta photo de profil " + message.author.avatarURL).then(message => message.delete(60000));
    console.log('Commande avatar effectué')
    message.delete()
};
module.exports.help = {
    name: "pdp"
  }