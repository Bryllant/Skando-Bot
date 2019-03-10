const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    let pdp = message.guild.iconURL;
    const serverLevel = ["Aucune", "Faible", "Medium", "Haute", "Max"];

    let jour = message.guild.createdAt.getDate()
    let mois = 1 + message.guild.createdAt.getMonth()
    let année = message.guild.createdAt.getFullYear()

    console.log("'Server-info à été demandé dans le serveur '" + message.guild.name + "' par " + message.author.username + " (" + message.author.id + ")");
    let serverembed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription("Information sur le serveur")
    .setColor("RANDOM")
    .setThumbnail(pdp)
    .addField("Nom du serveur:", message.guild.name)
    .addField("Date de création", `${jour}.${mois}.${année}`)
    .addField("Nombre total de membre:", message.guild.memberCount)
    .addField("Propriétaire:", message.guild.owner.user.tag)
    .addField("Region", message.guild.region)
    .addField("Nombre de bot", message.guild.members.filter(member => member.user.bot === true).size, true)
    .addField("Connectés", message.guild.members.filter(member => member.presence.status != "offline").size, true)
    .addField("Nombre de rôles", message.guild.roles.size, true)
    .addField("Niveau de vérification", serverLevel[message.guild.verificationLevel], true)
    
    return message.channel.send(serverembed)
};


module.exports.help = {
    name: "server-info"
  }