const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    let limit2 = message.content.split(" ")[1];
    
    if(!limit2 || isNaN(limit2)) {
      return message.channel.send("⚠ Ce n'est pas une limite valide, veuillez taper un nombre !");
    }
        
    message.channel.send(`Que le juste prix commence commence ! Vous avez **1** minutes pour trouver un nombre compris entre **0** et **${limit2}** \nVous pouvez annuler le bingo en écrivant annuler`)
        .then(async(m) => {
            const random = Math.floor(Math.random() * limit2);
            const filter = m => m.author.id !== bot.user.id;
    
            const collector = await m.channel.createMessageCollector(filter, { time: 60000 });
    
            collector.on("collect", async(collected) => {
                if(collected.content.toLowerCase() === "annuler") {
                    return collector.stop(`✅ Juste prix annulé !`);
                } else {
                    let response2 = await collected.content.trim();
                    response2 = parseInt(response2);
    
                    if(isNaN(response2)) {
                        return message.channel.send("⚠ Ce n'est pas un nombre !");
                    }
                    else if(response2 < random){
                        return message.channel.send("C'est plus")
                    }
                    else if(response2 > random){
                        return message.channel.send("C'est moins")
                    }
                    else if(response2 === random) {
                        await collector.stop(`${collected.author.toString()} a remporté le juste prix, le nombre était: **${random}**`);
                    }
                }
            });
            collector.on("end", async(collected, reason) => {
                if(reason && reason !== "time") {
                    return message.channel.send(reason);
                } else {
                    return message.channel.send(`Personne a remporté le Bingo, le nombre était: **${random}**`);
                }
            });
        });
};

module.exports.help = {
    name: "juste-prix"
  }




