const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#008000")
        message.channel.send(error_permissions)
    }

    salonAnnonce = guild.channel.find("『📝』informations-serveur")
    if (message.member.hasPermission("ADMINISTRATOR")) {
        let arg = message.content.split(" ").slice(1);
        let contenu = arg.join(" ");
        if (!args[0]) return message.channel.send("<:false:551460099600678944> Votre syntaxe est incorrecte. \n```Syntaxe : %annonce <Description>```")
        var annonce = new Discord.RichEmbed()
            .setTitle("📌 __Annonce :__")
            .setDescription(contenu)
            .setColor("#008000")
        message.channel.send(annonce)
        message.channel.send("@everyone")
        message.delete();
    }
}

module.exports.help = {
    name: "annonce"
  }
