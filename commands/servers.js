 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let Owner = message.author;
  if(Owner.id !== "306557645479870464" && Owner.id !=="426015209497296908" && Owner.id !=="499882708860665856" && Owner.id !=="537351870746984464" && Owner.id !=="692161671678132335") return message.reply("Only the owner can use this command!")
  
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + " - " + guild.id + '\n';})
    let bt = bot.user.username;
   /* let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("The bot is currently in these servers", string)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL); */
    message.channel.send("**Currently In These Servers** \n\n" + string);
}

module.exports.help = {
    name: "serverlist",
    aliases: ['servers']
}