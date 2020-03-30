const discord = require('discord.js');

exports.run = async (bot, message, args) => {
  

  message.channel.startTyping(); // TELLS YOUR HANDICAPPED BOT TO START TYPING! ;)

  let bicon = bot.user.displayAvatarURL;
    
  
  let msg = await message.channel.send('**3..2..1..**') //UNNECESSARY BUT COOL.
  
  setTimeout(function() {
  const embed = new discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("Invite Me To Your Server!")
    .addField("Invite Me!", "[Invite Link](https://discordapp.com/oauth2/authorize?client_id=613105078756442133&scope=bot&permissions=272971815)")

message.channel.send(embed)
}, 2000 )
  
  message.channel.stopTyping(true);
  
  msg.delete(2000);
  
  
}

exports.help = {
  name: "blastoff",
    aliases: []
}