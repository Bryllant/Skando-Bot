const Discord = require("discord.js");
const Client = require("fortnite");
const fkey = process.env.CLE;
const fortnite = new Client(fkey)
module.exports.run = async (bot, message, args) => {
  await message.delete();
  if(message.author.id != "468342061230456833") return;
    let username = args[0];
    let plateform = args[1] || 'pc';

    if(!username) return message.reply ("Veuillez entrer un pseudo");

    let data = fortnite.user(username, plateform).then(data => {
        console.log(data);
        let stats = data.stats;
        let lifetime = stats.lifetime;

        let score = lifetime[5];
        let mplayed = lifetime[6];
        let wins = lifetime[7];
        let winper = lifetime[9];
        let kills = lifetime[9];
        let kd = lifetime[10];

        let embed = new Discord.RichEmbed()
        .setTitle("Stats fortnite")
        .setAuthor(data.username)
        .setColor("#008000")
        .addField("top 1", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Nb de partie", mplayed, true)
        //.addField("% de top 1", winper, true)
        .addField("k/d", kd, true)
        message.channel.send(embed)
/*
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
        message.channel.send(embed)
    });
    */
//AVEC UN COLLECTEUR
 /*
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

    let data = fortnite.user(username, 'pc').then(data => {
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
  */
});
}


module.exports.help = {
  name: "fortnite"
}