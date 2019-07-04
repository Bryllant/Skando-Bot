const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    var number = 0
    var listes = "" 
    bot.guilds.map(r =>{
    const list = bot.guilds.get(r.id);
    list.members.map(member => (member.user.id ==message.author.id? number++ : number = number)) 
    list.members.map(member => (member.user.id ==message.author.id? listes= listes+" | `" +list.name+"`" : listes = listes)) 
    }) 
        var embed = new Discord.RichEmbed()
        .setTimestamp() 
        .setTitle("Nous possédons " +number+" serveur" +(number == 1 ? "" : "s")+" en commun.") 
        .addField("📃 __Liste__" , listes+"." ) 
        .setColor("084c99") 
     
        message.channel.send(embed) 
}

    module.exports.help = {
    name: "commun"
  }