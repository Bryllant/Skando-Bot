const weather = require("weather-js")

module.exports.run = async (bot, message) => {
    let cont = message.content.slice(1).split(" ")
    let args = cont.slice[1];
    weather.find({search: args.join(' '), degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);

        message.channel.send(JSON.stringify(result[0].current, null, 2));
});
}
module.exports.help = {
    name: "weather"
  }