const weather = require("weather-js")

module.exports.run = async (bot, message, args) => {
    const lieu = args.join(" ");
    if (!lieu) return message.channel.send(":x: Veuillez insérer le lieu");
    if (lieu === "undefined") return message.channel.send(":x: Veuillez insérer un lieu valide");
    weather.find({search: lieu, degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);

        //message.channel.send(JSON.stringify(result[0].current, null, 2));

        var current = result[0].current;
        var location = result[0].location;

        const ville = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Ville de ${current.observationpoint}`)
        .setThubnail(current.imageURL)
        .setColor("RANDOM")
        .addField("Température", `${current.temperature} degrés`, true)
        .addField("Ressenti", `${current.feelslike}`, true)
        .addField("Vent", current.winddisplay, true)
        .addField("Humidité", `${current.humidity} %`, true)
        .addField("Fuseau", `UTC ${location.timezone}`, true)


        message.channel.send(ville)
});
}
module.exports.help = {
    name: "weather"
  }