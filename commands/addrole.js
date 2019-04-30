const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Vous n'avez pas les permissions nécessaires");
  if (args[0] == "help") {
    message.reply("Usage: !addrole <utilisateur> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.channel.send("Veuillez spécifier un utilisateur")
  let role = args.join(" ").slice(22);
  if (!role) return message.channel.send("Spécifiez un rôle");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Je ne peut pas trouver le rôle");

  if (rMember.roles.has(gRole.id)) return message.channel.send("Cette personne a déjà le rôle");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Félicitation vous avez reçu le rôle ${gRole.name}`)
  } catch (e) {
    console.log(e.stack);
  }
}

module.exports.help = {
  name: "addrole"
}