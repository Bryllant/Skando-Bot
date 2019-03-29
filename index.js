const Discord = require("discord.js")
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Je ne peux pas trouver les commandes");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} chargé!`);
  bot.commands.set(props.help.name, props);
});

});


bot.on("ready", () => {
  console.log(bot.user.username + " est en ligne")

  //crash
  crash = bot.guilds.get("469111638835068928").channels.find(`name`, "beta-du-bot");
  crash.send(":gear: Je viens de crash mais me re-voila")

});

bot.on("message", async message => {
  //data
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = process.env.PREFIX;


  
  if (prefix == command.slice(0, 1)) {
    let commandFile = bot.commands.get(command.slice(prefix.length));
    if (commandFile) commandFile.run(bot, message, args);
  }
})


bot.login(process.env.TOKEN);

bot.on("ready", async message => {
  console.log(`Le bot est allumé sur ${bot.guilds.size} serveurs et est a disposition de ${bot.users.size} membres `)

      var jeuxs = [
          "modérer le discord de Skand",
          `faire des crêpes`,
          "améliorer mes commandes",
          `faire régner l'ordre`,
          `%help || ${bot.guilds.size} serveurs`,
          `se perdre sur youtube`,
          `%help || ${bot.users.size} membres`,
        ];
      
        setInterval(function () {
      
          var jeux = jeuxs[Math.floor(Math.random() * jeuxs.length)];
      
          bot.user.setPresence({
            game: {
              name: jeux,
              type: 0
            }
          });
        }, 60000);
       
  });

  bot.on("messageUpdate", (oldMessage, newMessage, message, member) => {
    
        if (oldMessage.author.bot) return;
        let guild = oldMessage.guild;    
        let test = guild.channels.find("name", "logs-bot");//Le channel log
    
        if(!test){
            guild.owner.send('Veuillez créer un chennel de mod-log avec des autorisations pour le bot.') 
        }
    
        if (oldMessage != newMessage) {
           
              let modif = new Discord.RichEmbed()
                    .setColor("RANDOM") 
                    .setFooter("Modification de message")
                    .setTimestamp()
                    .setTitle("Un message a été modifié ! :white_check_mark:")
                    .addField(`Par:`, `${oldMessage.author.username}#${oldMessage.author.discriminator}`)
                    .addField(`Dans le channel:`, `${oldMessage.channel}`)
                    .addField(`Ancien message:`, `${oldMessage}`)
                    .addField(`Nouveau message:`, ` ${newMessage}`)
                    
  
  guild.channels.find("name", "logs-bot").send(modif)
        }
});

bot.on("messageDelete", async message => {
  let logs = message.guild.channels.find(`name`, "logs-bot");
  if (!logs) return;
 
  let supprime = new Discord.RichEmbed()
      .setAuthor(message.member.user.tag, message.member.user.avatarURL)
      .setColor("RANDOM")
      .setTitle("Un message a été supprimé ! :white_check_mark:")
      .addField(`Supprimé par:`, `${message.author}`)
      .addField(`Dans le channel:`, `${message.channel}`)
      .addField(`Message Supprimé`, `${message.cleanContent}`)
      .setTimestamp()
      .setFooter("Suppression de message")
  logs.send(supprime)
  console.log("un message a été supprimé")
});

bot.on("message", async message => {  
  if ((message.content === "@everyone" || (message.content === "@here")) && (!message.member.hasPermission('MANAGE_MESSAGES'))) {
    message.reply(':warning: Attention les mentions everyone ou here sont interdits dans ce serveur :warning:');
    console.log('everyone ou here détecté');
    message.delete()
  }

    if ((message.content === "<@403643401137815562>") && (!message.member.hasPermission('MANAGE_MESSAGES'))) {
      message.delete()
    }

  if (message.content === "<@530517746677579776>") {
    message.reply('Mon préfixe est **%**, pour voir mes commandes : **?help** ');
    console.log('bot mentionné');
  }

  if (message.channel === "471036082222530571") {
    message.channel.send("@Fortnite News (ancien/family) @Fortnite News")
  }

  if (message.author.bot) return;
  if (message.channel.type === "dm") {
    var args = message.content.split(" ").slice(0);
    var args = args.slice(0).join(" ");

if ((message.author.id != "364468738621308938") || (message.author.id != "468342061230456833")) {
    message.channel.send(
      "Votre message a été envoyé au staff :incoming_envelope:"
    );
}
else {
  return message.channel.send("réponse envoyé!")
 }

    if (message.content.startsWith("%")) return;
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Nouvelle demande en dm")
      .addField(
        args,
        "Envoyé par " +
          message.author.username +
          " avec l'id " +
          message.author.id
      );
    bot.guilds
      .get("469111638835068928")
      .channels.get("469118311175815168")
      .send(embed);
  }

  if (message.content.startsWith("dm.reply")) {
      if (
          message.author.id !== "364468738621308938" ||
          message.author.id !== "468342061230456833"
        )
   
    var args = message.content.split(" ").slice(0);
    var Rargs = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    var userID = args[1];
    if (isNaN(args[1]))
      return message.reply(
        "Veuillez preciser l'id de la personne pour reply"
      ); 
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Le staff vous a repondu")
      .setDescription(Rargs)
      .setFooter("ce message a été envoyé par: " + message.author.username);
    bot.users.get(userID).send(embed);
    message.channel.send("Repondu avec succes !").catch(console.error);
  }
  const auteur = [];
  const warnBuffer = 3;
  const maxBuffer = 5;

  if(msg.author.id != bot.user.id){
    var now = Math.floor(Date.now());
    auteur.push({
      "moment": now,
      "auteur": msg.author.id,
      "message": msg.content
    });

    matched = 0;

    for (var i = 0; i < auteur.length; i++) {
      if (auteur[i].time > now - 1000) {
        matched++;
        if (matched == warnBuffer && !warned) {
          warned = true;
          msg.reply("Arrête de spam si tu ne veux pas être banni");
        }
        if (matched == maxBuffer) {
          if (!banned) {
            msg.channel.send(msg.author + " a été ban pour spam. A qui le tour?");
            banned = true;
          }
          // Ban le membre
          var user = msg.channel.guild.members.find(member => member.user.id === msg.author.id);
          if (user) {
            user.ban().then((member) => {
               console.log("Ban utilisé");
           }).catch(() => {
               //console.log("Pas assez de perms , il faut un module");
           });
          }
        }
      }
      else if (auteur[i].time < now - 1000) {
        auteur.splice(i);
        warned = false;
        banned = false;
      }
    }
  }
});


 bot.on('guildMemberRemove', member => {
  const aurevoir = member.guild.channels.find('name', '『🎉』bienvenue')

  var aurevoirEmbed = new Discord.RichEmbed()
    .setColor('#008000')
    .setAuthor(member.user.tag + ' est partit', member.user.displayAvatarURL)
    .addField(`Au revoir ${member.user.name} !`)
    .setFooter(`Une personne nous a quitté`)
    .setTimestamp()
    return aurevoir.send(aurevoirEmbed);
});

bot.on('guildMemberAdd', member => {
  const bienvenu = member.guild.channels.find('name', '『🎉』bienvenue')

  var bienvenuEmbed = new Discord.RichEmbed()
    .setColor('#008000')
    .setAuthor(member.user.tag + ' est arrivé', member.user.displayAvatarURL)
    .addField(`Bienvenu ${member.user.name} !`)
    .setFooter(`Un nouveau membre est parmis nous`)
    .setTimestamp()
    return bienvenu.send(bienvenuEmbed);
});