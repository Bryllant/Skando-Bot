const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("❌ Utilisateur introuvable ou non spécifié");
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send("❌ Votre syntaxe est incorrecte. \n```Syntaxe : %ban <pseudo> <raison>```");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
         message.channel.send("❌ Vous n'avez pas les permissions, vous devez être au minimum modérateur");
    }
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Cette personne ne peut pas être exclue");
  
    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Utilisateur banni", `${bUser} avec l'ID ${bUser.id}`)
    .addField("Banni par", `<@${message.author.id}> avec l'ID ${message.author.id}`)
    .addField("Dans", message.channel)
    .addField("Le", message.createdAt)
    .addField("Raison", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "『🔒』modos");
    if(!incidentchannel) return message.channel.send("❌ Je ne peux pas trouver le salon de warn \n Faites %setup pour créer les salons automatiquement");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
    return;
};

module.exports.help = {
    name: "ban"
  }


