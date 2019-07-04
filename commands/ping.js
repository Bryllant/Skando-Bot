const Discord = require('discord.js')
module.exports.run = async (bot, message) => {

message.channel.send("Pong!");
var embed = new Discord.RichEmbed()
        .setTimestamp() 
        .setTitle("Latence")
        .addField("- `Ping du bot` → ", Math.round(bot.ping)+" ms") 
        .setColor("RANDOM") 
     
        message.channel.send(embed) 

}
module.exports.help = {
    name: "ping"
  }


 