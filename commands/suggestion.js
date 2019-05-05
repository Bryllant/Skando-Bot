const Discord = require('discord.js')

module.exports.run = async (bot, message) => {

    if (message.guild.id === "469111638835068928") {

    let args = message.content.split(' ').slice(1).join(' ');

    if(!args) return message.channel.send(`Veuillez inscrire votre suggestion`);

    //if(["@_everyone", "@_here"].some(ping => args.includes(ping))) return message.channel.send(`⚠ Les mentions @_everyone ou @_here sont désactivées !`);

    message.channel.send(`Votre suggestion a été envoyé au staff! Merci pour l'aide !`);

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Suggestion :`)
    .setThumbnail(message.author.displayAvatarURL)
    .addField(`Utilisateur :`, message.author.tag)
    .addField(`Suggestion :`, `${args}`)
    .setFooter(`Suggestion`)
    .setTimestamp()
    
   let salon = bot.guilds.get("469111638835068928").channels.find(`name`, "『🔒』modos");
    salon.send(embed);
    }
};

module.exports.help = {
    name: "suggestion"
  }




