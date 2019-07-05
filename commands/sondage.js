const Discord = require('discord.js');


module.exports.run = async(bot, message, args) => {

    const sondageSlice = message.content.slice(prefix.length + "sondage".length).trim();

    if(message.guild.channels.find('name', '『📊』sondages')){
        message.delete()
    }

    message.delete().catch();
    var embed = new Discord.RichEmbed()
    .setTitle("**__Sondage du jour !__**")
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
  