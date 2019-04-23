const Discord = require("discord.js");
const config = require("../configs.json");

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d,
        h: h,
        m: m,
        s: s
    };
}

module.exports.run = async (bot, message, args) => {
    message.delete(message.author);
    
        const u = convertMS(bot.uptime);
        const uptime =
            u.d +
            " days : " +
            u.h +
            " hours : " +
            u.m +
            " minutes : " +
            u.s +
            " seconds";
        const bicon = bot.user.displayAvatarURL;
        const botembed = new Discord.RichEmbed()
            .addBlankField()
            .setColor("RANDOM")
            .addField(":gear: ", `Dernière mise a jour  : ${uptime}`)
            .setThumbnail(bicon)
            .setFooter(message.author.tag + " | Version " + config.version);
        message.channel.send(botembed);
};

module.exports.help = {
    name: "uptime"
};