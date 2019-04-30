const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Vous n'avez pas les permissions nécessaires")

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Impossible de trouver l'utilisateur");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Spécifiez un rôle");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Je ne peux pas trouver ce rôle");

  if(!rMember.roles.has(gRole.id)) return message.reply("L'utilisateur ne possède pas ce rôle");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Rip tu a perdu ce rôle ${gRole.name}`)
  }catch(e){
    message.channel.send(`Rôle enlevé avec succès!`)
  }
}

module.exports.help = {
  name: "removerole"
}