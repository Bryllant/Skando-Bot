const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    message.channel.send("Pile ou face?").then(async (m) => {
        var tombe = Math.floor(Math.random() * 2);
        console.log(tombe)
        var resultat = "niet"
        if (tombe = 0){
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
/*
            let response = await collected.content.trim();
            if((response != "pile") || (response != "face")) {
                return message.channel.send("❌ Ce n'est pas une réponse valide !");
            }
*/
            if (collected.content.toLowerCase() === "pile") {
                if (resultat === "pile") {
                    message.channel.send("Vous avez gagné");
                } else {
                    message.channel.send("Vous avez perdu c'est tombé sur face");
                }
            }

            if (collected.content.toLowerCase() === "face") {
                if (resultat === "face") {
                    message.channel.send("Vous avez gagné");
                } else {
                    message.channel.send("Vous avez perdu c'est tombé sur pile");
                }
            }

        });
    })
}

module.exports.help = {
    name: "flip"
}