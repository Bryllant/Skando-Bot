const Discord = require("discord.js");
const Client = require("fortnite");
const fkey = process.env.CLE;
const fortnite = new Client(fkey)
module.exports.run = async (bot, message, args) => {
  await message.delete();
    let username = args[0];
    let plateform = args[1] || 'pc';

    if(!username) return message.reply ("Veuillez entrer un pseudo");

    fortnite.user(username, plateform).then(data => {
        console.log(data);
        var stats = data.stats.lifetime;


        var score = "";
        var matchedplayed = "";
        //let wins = "";
        //let winper = lifetime[9];
        var kills = "";
        var kd = "";

        stats.find(s => kills = s.Kills);
        stats.find(s => score = s.Score);
        stats.find(s => kd = s["K/D"]);
        stats.find(s => matchedplayed = s["Matches Played"]);


        let embed = new Discord.RichEmbed()
        .setTitle("Stats fortnite")
        .setAuthor(data.username)
        .setColor("#008000")
        //.addField("top 1", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Nb de partie", matchedplayed, true)
        //.addField("% de top 1", winper, true)
        .addField("k/d", kd, true)
        message.channel.send(embed)
    }).catch(err => {
      console.log(err)
      message.channel.send(err);
    })
        
}


module.exports.help = {
  name: "fortnite"
}