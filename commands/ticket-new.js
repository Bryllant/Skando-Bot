module.exports.run = async(bot, message) => {  
    message.guild.createChannel(`ticket-${message.author.discriminator}`, {type : 'text'})
  
    .then(async channel => {
      let category = message.guild.channels.find(c => c.name == "Ticket" && c.type == "category");
      
      await channel.setParent(category);
      await channel.setTopic(channel.id);
  
      message.author.send(`Votre channel à était crée  <#${channel.id}>`).catch(err => {
        message.channel.send(`Votre channel à était crée<#${channel.id}>`)})
  
      // Ajouter les permission du créateur du ticket
      channel.overwritePermissions(message.author, {
          "READ_MESSAGE_HISTORY": true,
          "SEND_MESSAGES": true,
          "VIEW_CHANNEL": true,
          "EMBED_LINKS": true,
          
      });
  
  // Supprimer les permission everyone
  channel.overwritePermissions(message.guild.id, {
      "READ_MESSAGE_HISTORY": false,
      "SEND_MESSAGES": false,
      "VIEW_CHANNEL": false,
  }) 
  .catch((err) => {if(err) return msg.channel.send(`❌ Une erreur est survenue ! ${err}`)
      if (!category) console.log("La catégorie Ticket n'existe pas");
      channel.setParent(category.id);
    }).catch(console.error);
  })}
    module.exports.help = {
        name: 'ticket-new',
    };