const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#008000")
        message.channel.send(error_permissions)
    }

    let salonAnnonce = message.guild.channels.find(`name`, "『📝』informations-serveur");
    if (!message.member.hasPermission('MANAGE_MESSAGE')) return message.channel.send("❌ Vous n'avez pas les permissions, vous devez être au minimum modérateur")
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let arg = message.content.split(" ").slice(1);
        let contenu = arg.join(" ");
        if (!args[0]) return message.channel.send("❌ Votre syntaxe est incorrecte. \n```Syntaxe : %annonce <Description>```")
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
