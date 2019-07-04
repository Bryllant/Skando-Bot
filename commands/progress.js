const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    function progressBar(xp, xpMax) {
        let msg = [];
        let i = 0;
    
        if(xp > xpMax) { return msg = ["▮", "▮", "▮", "▮", "▮", "▮", "▮", "▮", "▮", "▮"]}
        
        for(i = 0; i < (100 * xp / xpMax) / 10 - 0.5; i++) {
          msg.push("▮");
        };
    
        while(msg.length !== 10) {
          msg.push("▯")
        };
    
      return msg;
    
    };
    
    progressBar(50, 500);
}

    module.exports.help = {
    name: "progress"
  }