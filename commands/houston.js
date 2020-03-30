const Discord = require ("discord.js");
exports.run = async (bot, message, args) => {
  

    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setDescription("Astro support and gaming server!")
    .setTitle("Astro Gaming")
    .addField("Invite:", "https://discord.gg/7YjsRCX")

    message.channel.send(embed)
  
}

exports.help = {
  name: "houston",
    aliases: []
}