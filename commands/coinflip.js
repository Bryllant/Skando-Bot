const Discord = require('discord.js')
module.exports.run = async (bot, message) => {
  var randonmes = Math.random().toFixed(2) * 100;
  if (randonmes < 50) {
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.member.user.username, message.member.user.avatarURL)
        .setTitle("Coin flip !")
        .setDescription("J'ai retourné une pièce et il a atterri **PILE**.")
    );
  } else if (randonmes > 50) {
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.member.user.username, message.member.user.avatarURL)
        .setTitle("Coin flip !")
        .setDescription(
          "J'ai retourné une pièce et elle a atterri sur **FACE**."
        )
    );
  } else if (randonmes == 50) {
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.member.user.username, message.member.user.avatarURL)
        .setTitle("Coin flip !")
        .setDescription(
          "J'ai jeté une pièce de monnaie et elle a atterri sur .... LE **BORD** !!!"
        )
    );
  }
};

module.exports.help = {
  name: "coinflip"
};
