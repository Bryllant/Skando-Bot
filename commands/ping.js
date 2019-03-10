const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
message.channel.send("Pong!");
}
module.exports.help = {
    name: "ping"
  }