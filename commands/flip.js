const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    message.channel.send("Pile ou face?").then(async (m) => {
        const tombe = Math.floor(Math.random() * 2);
        var resultat = "niet"
        if (tombe = 1){
            var resultat = "pile"
        }
        else {
            var resultat = "face"
        }
        const filter = m => m.author.id !== bot.user.id;

        const collector = await m.channel.createMessageCollector(filter, {
            time: 10000
        });

        collector.on("collect", async (collected) => {
            if (collected.content.toLowerCase() === "pile") {
                if (resultat === "pile") {
                    message.channel.send("Vous avez gagné");
                } else {
                    message.channel.send("Vous avez perdu");
                }
            }

            if (collected.content.toLowerCase() === "face") {
                if (resultat === "face") {
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