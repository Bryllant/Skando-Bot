const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      "Vous n'avez pas la permission d'utiliser cette commande"
    );
  let count = args[0];
  if (!count)
    return message.channel.send(
      "Veuillez indiquer un nombre de messages à supprimer"
    );
  if (isNaN(count))
    return message.channel.send("Veuillez indiquer un nombre valide");
  if (count < 1 || count > 100)
    return message.channel.send("Veuillez indiquer un nombre entre 1 et 100");
  message.channel.bulkDelete(parseInt(count) + 1);
};

module.exports.help = {
  name: "clear"
}

