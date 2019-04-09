const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    let usera = message.mentions.users.first();
    if(!usera) return message.channel.send("Précise moi un utilisateur");
    let gameName = usera.presence.game ? usera.presence.game.name : "None";
    let jour = usera.joinedAtdAt.getDate()
    let mois = 1 + usera.joinedAtdAt.getMonth()
    let année = usera.joinedAtdAt.getFullYear()
  
    var embed = new Discord.RichEmbed()
    .setAuthor(usera.user.tag, usera.user.avatarURL)
    .addField("ID de l'utilisateur", usera.id, true)
    .addField("Pseudo", usera.user.username, true)
    .addField("Status actuel", usera.presence.status, true)
    .addField("Jeu", gameName, true)
    .addField("Quand à t'il join ?", usera.joinedAt, true)
    .setTimestamp()
    .setColor("#0x0f7fa6")
    .addField("Date d'arrivée sur le serveur", `${jour}.${mois}.${année}`)
    .setThumbnail(usera.user.avatarURL);
    message.channel.send({embed});
  
    console.log("'L'info d'utilisateur à été demandé dans le serveur '" + message.guild.name + "' par " + message.author.username + " (" + message.author.id + ")");
};

module.exports.help = {
    name: "user-info"
  }




