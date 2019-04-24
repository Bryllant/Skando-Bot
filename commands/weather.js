const weather = require("weather-js")

module.exports.run = async (bot, message, args) => {
    const lieu = args.join(" ");
    if (!lieu) return message.channel.send(":x: Veuillez insérer le lieu")
    weather.find({search: lieu, degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);

        message.channel.send(JSON.stringify(result[0].current, null, 2));
});
}
module.exports.help = {
    name: "weather"
  }