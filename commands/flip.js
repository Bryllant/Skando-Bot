const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    message.channel.send("Pile ou face?").then(async (m) => {
        const resulat = Math.floor(Math.random() * 2);
        const filter = m => m.author.id !== bot.user.id;

        const collector = await m.channel.createMessageCollector(filter, {
            time: 10000
        });

        collector.on("collect", async (collected) => {
            if (collected.content.toLowerCase() === "pile") {
                if (resulat === "pile") {
                    message.channel.send("Vous avez gagné");
                } else {
                    message.channel.send("Vous avez perdu");
                }
            }

            if (collected.content.toLowerCase() === "face") {
                if (resulat === "face") {
                    message.channel.send("Vous avez gagné");
                } else {
                    message.channel.send("Vous avez perdu");
                }
            }

        });
    })
}

module.exports.help = {
    name: "flip"
}