const Discord = require("discord.js");
const Client = require("fortnite");
const fkey = require(process.env.PREFIX);
const fortnite = new Client(fkey.token)
module.exports.run = async (bot, message, args) => {
  await message.delete();
 
  const filter = m => m.author.id === message.author.id;
  message.reply("Choissisez un utilisateur... La commande expire dans 10 secondes...").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(collected => {
    collected.delete(15000);
    if (collected.first().content === 'annule') {
      return message.reply("Commande annulé");
    }

    let username = collected.first().content;

    fortnite.user(username, 'pc').then(data => {
      //console.log(data.stats.lifetime)
      let embed = new Discord.RichEmbed()
        .setTitle(username)
        .setColor("#008000")
        .setDescription("Stats fortnite")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Top 3", data.stats.lifetime[1]["Top 3s"], true)
        .addField("Top 5", data.stats.lifetime[0]["Top 5s"], true)
        .addField("Top 1", data.stats.lifetime[8]["Wins"], true)
        .addField("Victoire/Défaite", data.stats.lifetime[9]["Win%"], true)
        .addField("Kill", data.stats.lifetime[10]["Kills"], true)
        .addField("K/D", data.stats.lifetime[11]["K/d"], true);
      return message.channel.send(embed);
    }).catch(err => {
      message.reply("Utilisateur impossible a trouver").then(r => r.delete(5000));
    });
  }).catch(err => {
    message.reply("Annulé...").then(r => r.delete(5000));
    console.log("Temps d'attente dépassé await détruit");
  });
}
//name this whatever the command name is.
module.exports.help = {
  name: "fortnite",
}