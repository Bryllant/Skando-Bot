const weather = require("weather-js")
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const lieu = args.join(" ");
    if (!lieu) return message.channel.send(":x: Veuillez insérer le lieu");
    weather.find({search: lieu, degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);

        //message.channel.send(JSON.stringify(result[0].current, null, 2));

        var current = result[0].current;
        var location = result[0].location;

        const ville = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(`Ville`, `${current.observationpoint}`, true)
        .addField("Temps", `**${current.skytext}**`, true)
        .addField("image", current.imageUrl)
        .addField("Température", `${current.temperature} degrés`, true)
        .addField("Ressenti", `${current.feelslike}`, true)
        .addField("Vent", current.windspeed, true)
        .addField("Humidité", `${current.humidity} %`, true)
        .addField("Fuseau", `UTC ${location.timezone}`, true)
       



        message.channel.send(ville)
});
}
module.exports.help = {
    name: "weather"
  }