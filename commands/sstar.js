const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.slice(1).join(' ');
    let logs = message.guild.channels.find(r => r.name === "logs");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Houston, we've got a problem. You need the kick perms to use that command.:x:");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked :x:");
kUser.kick({
          reason: kReason,
        }).then(() => {
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick Log")
    .setColor("RANDOM")
    .addField("Kicked by:", `${message.author}`)
    .addField("In server:", `${message.guild.name}`)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);
           
message.channel.send(`${kUser} has been sent on a shooting star out of here.`)
    kUser.send(kickEmbed);
    logs.send(kickEmbed);
})
}

exports.help = {
  name:"sstar",
    aliases: []
}