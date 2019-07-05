const Discord = require('discord.js');
var prefix = "?";


module.exports.run = async(bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Vous n'avez pas les permissions nécessaires");
    const sondageSlice = message.content.slice(prefix.length + "sondage".length).trim();

    message.delete()
    message.delete().catch();
    var embed = new Discord.RichEmbed()
    .setTitle("**__Nouveau sondage !__**")
    .setColor("RANDOM")
    .setDescription(sondageSlice)
    .setFooter(`Sondage par ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
    .then(function (message){
        message.react("❌")
        message.react("✅")
    }).catch(function(){
        
    });
}

module.exports.help = {
    name:"sondage"
}
  