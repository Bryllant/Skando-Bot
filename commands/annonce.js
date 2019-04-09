const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if((!message.member.hasPermission("MANAGE_MESSAGES")) || (message.author.id != '364468738621308938')) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#008000")
        message.channel.send(error_permissions)
    }

    salonAnnonce = bot.guilds.get("469111638835068928").channels.find(`name`, "『📝』informations-serveur");
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let arg = message.content.split(" ").slice(1);
        let contenu = arg.join(" ");
        if (!args[0]) return message.channel.send("<:false:551460099600678944> Votre syntaxe est incorrecte. \n```Syntaxe : %annonce <Description>```")
        var annonce = new Discord.RichEmbed()
            .setTitle("📌 __Annonce :__")
            .setDescription(contenu)
            .setColor("#008000")
        salonAnnonce.send(annonce)
        salonAnnonce.send("@everyone")
        message.delete();
    }
}

module.exports.help = {
    name: "annonce"
  }
