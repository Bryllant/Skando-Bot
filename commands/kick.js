const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
 //!kick @bryllant spam

 let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 if(!kUser) return message.channel.send("Utilisateur impossible a trouver");
 let kReason = args.join(" ").slice(22);
 if(!kReason) return message.channel.send("Veuillez insérer une raison au kick");
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Personne non autorisé");
 if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être exclue");

 let kickEmbed = new Discord.RichEmbed()
 .setDescription("~Kick~")
 .setColor("#e56b00")
 .addField("Utilisateur exclu", `${kUser} avec l'id ${kUser.id}`)
 .addField("Exclu par", `<@${message.author.id}> avec l'id ${message.author.id}`)
 .addField("Dans", message.channel)
 .addField("Le", message.createdAt)
 .addField("Raison", kReason);

 let kickChannel = message.guild.channels.find(`name`, "『🔒』modos");
 if(!kickChannel) return message.channel.send("Impossible de trouver le salon de warns");

 message.guild.member(kUser).kick(kReason);
 kickChannel.send(kickEmbed);

 return;
};

module.exports.help = {
    name: "kick"
  }