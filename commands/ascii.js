const Discord = require("discord.js");
const figlet = require("figlet")
module.exports.run = async (bot, message, args) => {

  if(args.join(' ').length > 20) return message.channel.send('Seulement 20 caractères sont admis.') 
  if (!args.join(' ')) return message.channel.send('❌ Votre syntaxe est incorrecte. \n```Syntaxe : %ascii <message>```').then(msg => msg.delete({timeout: 10000})); 
    figlet(args.join(' '), (err, data) => {
      message.channel.send('\`\`\`' + data + '\`\`\`')
})
}
module.exports.help = {
    name: "ascii"
};