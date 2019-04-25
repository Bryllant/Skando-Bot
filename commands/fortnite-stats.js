const Discord = require("discord.js");
const Client = require("fortnite");
const fkey = process.env.CLE;
const fortnite = new Client(fkey)
module.exports.run = async (bot, message, args) => {
  let username = args[0];
  let platform = args[1];

  if(!username) return message.channel.send("Veuillez entrer un pseudo")
  if(!platform) return message.channel.send('Veuillez indiquer une plateforme. Syntaxe: **!fortnite <pseudo> <platforme>**') 

  let data = fortnite.user(username, platform).then(data => {
      let stats = data.stats;
      let lifetime = stats.lifetime;

      let score = lifetime[6]['Score'];
      let mplayed = lifetime[7]['Matches Played'];
      let wins = lifetime[8]['Wins'];
      let winper = lifetime[9]['Win%'];
      let kills = lifetime[10]['Kills'];
      let kd = lifetime[11]['K/d'];
      let embed = new Discord.RichEmbed()
      .setTitle("Stats fortnite")
      .setAuthor(data.username)
      .setColor("RANDOM")
      .addField("Top 1", wins, true)
      .addField("Kills", kills, true)
      .addField("Score", score, true)
      .addField("Parties joués", mplayed, true)
      .addField("% de top 1", winper, true)
      .addField("K/D", kd, true)
      .setTimestamp()
      .setFooter("Demandé par " + message.author.tag, message.author.avatarURL)

      message.channel.send(embed);
  }).catch((err) => {
    message.channel.send('Utilisateur introuvable');
    console.error(err);
  });
}

module.exports.help = {
  name:"fortnite"
} 