const Discord = require("discord.js")
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();
const config = require('./config.json');


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
      var args = message.content.slice(" ")
      message.delete()
    }

  if (message.content === "<@530517746677579776>") {
    message.reply('Mon préfixe est **%**, pour voir mes commandes : **%help** ');
    console.log('bot mentionné');
  }

  if (message.content === "tournage") {
    var args = message.content.slice(" ")
    message.delete()
    message.channel.send("Ici personne ne conaît les dates pour le tournage mais si tu veux tout savoir Skand fera un everyone dans ce salon (on sais pas quand) et les premiers a répondre seront séléctionnés donc soyez présent!")
  }


//salut les amis comment ca va
//les = args[0] amis = args[1]

  if (message.channel === "471036082222530571") {
    message.channel.send("@Fortnite News (ancien/family) @Fortnite News")
  }
/*
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
  */
});

bot.on('guildMemberAdd', member => {
  const aurevoir = member.guild.channels.find('name', '『🎉』bienvenue')
  member.send("Passe du bon temps sur Skando'Team !  Tu dois aussi consulter les règles du serveur elles sont importantes pour que ce serveur Discord soit agréable !")
  let embed = new Discord.RichEmbed()
      .setDescription(member.user.username + ' a rejoint le serveur')
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


//role rainbow

bot.on('ready', () => {

  const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {		
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
		.catch(console.error);
		
    if(config.logging){
      //console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}
  if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});
