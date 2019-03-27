const Discord = require('discord.js')

module.exports.run = async (bot, message, guild, channel) => {
    if (message.guild.id != "469111638835068928") return;
    if(!message.member.hasPermission("ADMINISTRATOR")) return;



    var premaj = new Discord.RichEmbed()
    .setTimestamp()
    .setColor("#008000")
    .setFooter("annonce de maj")
    .addField("Maj du serveur", "La mise a jour du serveur arrive dans deux minutes !")

    var maj = new Discord.RichEmbed()
    .setTimestamp()
    .setColor("#008000")
    .setFooter("début de maj")
    .addField("Maj du serveur", "Le serveur est en cours de mise a jour!")

    var finDeMaj = new Discord.RichEmbed()
      .setTimestamp()
      .setColor("#008000")
      .setFooter("Fin de maj")
      .addField("Fin de maj", "La mise a jour vient de s'achever!")



    message.delete()

    information = bot.guilds.get("469111638835068928").channels.find(`name`, "『🔒』modos");
    general = bot.guilds.get("469111638835068928").channels.find(`name`, "beta-du-bot");
    information.send(premaj).then(message => message.delete(60000));
    information.send("<&505313884073099275> <&506179552914047006>").then(message => message.delete(60000))
    

   await general.send("La maj commence dans **120** secondes").then(message => {
      setTimeout(() => {

      message.edit("La maj commence dans **100** secondes");
      }, 20000);
  
      setTimeout(() => {

        message.edit("La maj commence dans **80** secondes");
      }, 20000);
  
      setTimeout(() => {
        message.edit("Début de la mise a jour du serveur dans minute");
      }, 20000);
   
    });

    setTimeout(() => {
      information.send(maj).then(message => message.delete(600000))
      information.send("<&505313884073099275> <&506179552914047006>").then(message => message.delete(600000))
      general.send(maj).then(message => message.delete(600000))
          }, 60000);

    setTimeout(() => {
      general.send(finDeMaj)
    }, 60000000);
}

  //METTRE LES @ L60/L64


  //CHANGER LES PERMISSION
    //CHANGER LES PERMISSION
      //CHANGER LES PERMISSION
        //CHANGER LES PERMISSION
          //CHANGER LES PERMISSION
            //CHANGER LES PERMISSION
              //CHANGER LES PERMISSION






module.exports.help = {
  name: "maj"
}
