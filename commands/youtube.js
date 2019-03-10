const Discord = require('discord.js')

module.exports.run = async (bot, message) => {

    if(message.member.hasPermission('MANAGE_MESSAGES')){

    let args = message.content.split(" ").slice(1);
let youtube = args.slice(0).join('+');
if(!youtube) return message.reply("Merci d'indiquer un texte")
let link = `https://www.youtube.com/results?search_query=` + youtube;
message.channel.send(link);

} else { 
message.channel.send("Vous n'avez pas les autorisations pour cette commande")
}

}

module.exports.help = {
    name: "youtube"
  }




