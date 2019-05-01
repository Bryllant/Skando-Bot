const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Vous n'avez pas les permissions nécessaires");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Impossible de trouver l'utilisateur");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas mute cette personne!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //créer un rôle
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //finir de créer un role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Veuillez indiquer une durée");

  await(tomute.addRole(muterole.id));
  let gRole = member.roles.map(role => role)
  await tomute.removeRole(gRole.id)

  message.reply(`<@${tomute.id}> a été mute pour ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> a été demute`);
  }, ms(mutetime));


//fin du module 
}

module.exports.help = {
  name: "tempmute"
}

