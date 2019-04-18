"use strict";

const request = require("request");

module.exports.run = (__bot, message) => {
    request("https://www.pexels.com/search/seagull", (error, res, body) => {
        if (error) { return message.channel.send("Erreur d'API"); }
        if (res.statusCode !== 200) { 
          return message.channel.send(`Erreur: ${res.statusCode}`); 
        }
        var body = JSON.parse(body);
        message.channel.send({
            embed: {
                color: 0xff9900,
                image: { url: body.file }
            }
        })
    });
}
module.exports.help = {
     name: "mouette" 
    }