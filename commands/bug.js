const Discord = require('discord.js')

module.exports.run = async (bot, message) => {

    let args = message.content.split(' ').slice(1).join(' ');

    if(!args) return message.channel.send("❌ Votre syntaxe est incorrecte. \n```Syntaxe : %bug <bug trouvé>```");

    message.channel.send(`✅ Votre rapport de bug a été envoyé au staff! Merci pour l'aide !`);

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Rapport :`)
    .setThumbnail(message.author.displayAvatarURL)
    .addField(`Utilisateur :`, message.author.tag)
    .addField(`Bug :`, `${args}`)
    .setFooter(`Bug`)
    .setTimestamp()
    
    salon = bot.guilds.get("469111638835068928").channels.find(`name`, "『🔒』modos");
    salon.send(embed);
};

module.exports.help = {
    name: "bug"
  }





