const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
        const member = message.mentions.members.first();
        if(!member) return message.channel.send(":pushpin: Merci de mentionner un utilisateur pour envoyer un message privé depuis le bot.")
        let arg = message.content.split(" ").slice(2);
        let content_msg = arg.join(" ");
        if(!args[0]) return message.channel.send(":pushpin: Votre syntaxe est incorrecte. \n```Syntaxe : %mp [Utilisateur] [Message]```");
        member.send(`:pushpin: | Vous avez reçu un message de **${message.author.tag}** depuis le serveur **${message.guild.name}** : **` + content_msg + `**`)
        message.channel.send(`:pushpin: | Votre message privé a bien été envoyé à **${member.user.tag}** !`)
        message.delete();
    }
}

module.exports.help = {
    name: "mp"
}