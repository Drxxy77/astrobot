const Discord = require("discord.js"); 

exports.run = async (bot, message, args) => {




  let user =
    message.mentions.users.first() || message.author || args[0];
  

  let embed = new Discord.RichEmbed() 
    .setAuthor(`${user.username}'s Avatar`) 
    .setImage(user.displayAvatarURL) 
    .setColor("RANDOM") 
    .setFooter(`Requsted by ${message.author}`, bot.avatarURL) 
    .setTimestamp(); 

  await message.channel.send(embed); 

  
};



module.exports.help = {
  name: "avatar",
    aliases: []
};
