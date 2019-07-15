const Discord = require("discord.js")
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'selfbot.log' })
  ]
});


fs.readdir("./commands/", (err, files) => {

  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Je ne peux pas trouver les commandes");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} chargé!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", (member, users, guild, message) => {
  console.log(bot.user.username + " est en ligne")

  //crash
 const crash = bot.guilds.get("469111638835068928").channels.find(`name`, "beta-du-bot");
  crash.send(":gear: Je viens de crash mais me re-voila")

  //stats
 /* 
  bot.channels.find(c => c.id === "569197036314951697").setName("『🧔』Utilisateurs : " + guild.memberCount) //user
  bot.channels.find(c => c.id === "569197977961365634").setName("『🧮』Connectés : " + guild.members.filter(member => member.presence.status != "offline").size, true) //connectés
  bot.channels.find(c => c.id === "569197912685412372").setName("『🧾』Bot : " + guild.members.filter(member => member.user.bot === true).size, true) //channel
  bot.channels.find(c => c.id === "569198016867729435").setName("『🔑』Channel : " + guild.channelCount) //bot
  */
 /* 
  bot.channels.find(c => c.id === "569197036314951697").setName("『🧔』Utilisateurs : " + guild.users.size) //user
  bot.channels.find(c => c.id === "569197977961365634").setName("『🧮』Connectés : " + bot.guilds.size) //connectés
  bot.channels.find(c => c.id === "569197912685412372").setName("『🧾』Bot : " + "8") //channel
  bot.channels.find(c => c.id === "569198016867729435").setName("『🔑』Channel : " + bot.channels.size) //bot
  */
});

bot.on("message", async message => {
  //data
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
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
  let test = guild.channels.find("name", "logs-bot"); //Le channel log

  if (!test) {
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

  if (message.author.bot) return;
  if (message.channel.type === "dm") {
    var args = message.content.split(" ").slice(0);
    var args = args.slice(0).join(" ");

    if ((message.author.id != "364468738621308938") || (message.author.id != "468342061230456833")) {
      message.channel.send(
        "Votre message a été envoyé au staff :incoming_envelope:"
      );
    } else {
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
      .channels.get("568201680454418473")
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

  var here = [
    "@here",
    "@everyone",
  ];
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    if (here.some(x => message.content.toLowerCase().split(/\s+/).includes(x))) {
      message.delete()
      message.reply("Les mentions here et everyone sont interdites dans ce serveur");
    }
  }

  var skand = [
    "<@403643401137815562>",
  ];
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
  if (skand.some(x => message.content.toLowerCase().split(/\s+/).includes(x))) {
    message.delete()
  }
}

  if (message.content === "<@530517746677579776>") {
    message.reply('Mon préfixe est **%**, pour voir mes commandes : **%help** ');
    console.log('bot mentionné');
  }
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
const profanities = require("profanities/fr");
var x = 0
for (x = 0; x < profanities.length; x++) {
      if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
        message.delete();
        message.reply("Surveille ton language");
      }
    }
  }

  if (message.nonce === null && message.attachments.size <= 0 && !message.author.bot && message.guild) {// make sure it's a non-private messages
            logger.warn(`L'utilisateur (${message.author.tag}) utilise un selfbot dans le salon #${message.channel.name} serveur (${message.guild.name} ) - ID: ${message.author.id}`);
             message.delete().catch(() => logger.log(`Le bot ne peut pas supprimer un message de cet utilisateur ${message.author.tag}!`));
             message.member.ban(7)
            }
  //salut les amis comment ca va
  //les = args[0] amis = args[1]
});

bot.on('guildMemberAdd', member => {
  const aurevoir = member.guild.channels.find('name', '『🎉』bienvenue')
  member.send("Bienvenu sur le serveur n'hésite pas a lire les règles elles sont impotantes au bon onctionnement du serveur")
  let embed = new Discord.RichEmbed()
    .setDescription(member.user.username + ' a rejoins le serveur')
    .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    .setColor("#008000")
  aurevoir.send(embed)
});


bot.on('guildMemberRemove', member => {
  const aurevoir = member.guild.channels.find('name', '『🎉』bienvenue')
  member.send("Pas cool d'être partit on est gentil")
  let embed = new Discord.RichEmbed()
    .setDescription(member.user.username + ' a quitté le serveur')
    .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    .setColor("#008000")
  aurevoir.send(embed)
});