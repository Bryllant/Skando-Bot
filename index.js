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
});

bot.on("message", async message => {
  //data
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = process.env.BOT_TOKEN;


  
  if (prefix == command.slice(0, 1)) {
    let commandFile = bot.commands.get(command.slice(prefix.length));
    if (commandFile) commandFile.run(bot, message, args);
  }
})


bot.login(process.env.BOT_TOKEN)

bot.on("ready", async message => {
  console.log(`Le bot est allumé sur ${bot.guilds.size} serveurs et est a disposition de ${bot.users.size} membres `)

      var jeuxs = [
          "modérer le discord de Skand",
          `faire des crêpes`,
          "améliorer mes commandes",
          `faire régner l'ordre`,
          `?help || ${bot.guilds.size} serveurs`,
          `se perdre sur youtube`,
          `?help || ${bot.users.size} membres`,
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

    if ((message.content === "<@403643401137815562>") && (message.member.hasPermission('MANAGE_MESSAGES'))) {
      message.delete()
    }

  if (message.content === "<@530517746677579776>") {
    message.reply('Mon préfixe est **?**, pour voir mes commandes : **?help** ');
    console.log('bot mentionné');
  }
});

bot.on("guildMemberRemove", async (message, member, guild) => {
  const channel2 = member.guild.channel.find(ch => ch.name === '『🎉』bienvenue');
  if (!channel2) return;
  let aurevoir = new Discord.RichEmbed()
    .setDescription(':sob:' + member.user.username + '** a quitté ** ' + " " + member.guild.name)
    .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    .setColor("RANDOM") 
  channel.send(aurevoir);
});

bot.on("guildMemberAdd", async (message, member, guild) => {
  const channel = member.guild.channels.find(ch => ch.name === '『🎉』bienvenue');
  if (!channel) return;
  let bienvenu = new Discord.RichEmbed()
    .setDescription(':kissing_heart:' + member.user.username + '** a rejoins ** ' + " " + member.guild.name)
    .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    .setColor("RANDOM")
    .setThumbmail(message.author.displayAvatarURL)
  channel.send(bienvenu);
 });

