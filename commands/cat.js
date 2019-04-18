"use strict";

const request = require("request");

module.exports.run = (__bot, message) => {
    request("https://aws.random.cat/meow", (error, res, body) => {
        if (error) { return message.channel.send("Error-API"); }
        if (res.statusCode !== 200) { 
          return message.channel.send(`Error: ${res.statusCode}`); 
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
     name: "cat" 
    }