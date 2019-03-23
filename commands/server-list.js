

const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    const guilds = client.guilds
    .filter(g => g.memberCount > 0)
    .map(g => g.name)
    .join("\n");
  
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Serveurs:", guilds);
  
  message.channel.send(embed);
}

    module.exports.help = {
    name: "server-list"
  }
