const Discord = require('discord.js');

    module.exports.run = async (bot, message) => {
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = parseInt(totalSeconds % 60);

    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .setDescription("**• Informations du bot •**")
        .addField("👑 Créateurs →", "- ``<@468342061230456833>", true)
        .addField("⏲ Uptime →", `__${days}__ j, __${hours}__ h, __${minutes}__ m et __${seconds}__ s`, true)
        .addBlankField()
        .addField("📰 Informations →", `- \`ID\` → ${bot.user.id}\n- \`Langage\` → Français\n- \`Création\` → Janvier 2019\n- \`Préfix\` → %`, true)
        .addField("📊 Statistiques →", "- `Serveurs` → "+bot.guilds.size+"\n"+"- `Utilisateurs` → "+bot.users.size+"\n"+"- `Salons` → "+bot.channels.size+"\n"+"- `Ping` → "+Math.round(bot.ping)+" ms", true)
        .setFooter("Bryllant x)", bot.user.displayAvatarURL)
        .setTimestamp();

    message.channel.send(embed);

}

    module.exports.help = {
        name: "botinfo"
    }




