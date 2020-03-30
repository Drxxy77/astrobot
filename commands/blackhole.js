const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.slice(1).join(' ');
    let logs = message.guild.channels.find(r => r.name === "logs");
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Houston, we've got a problem. You need the ban perms for this command. :x:");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned :x:");
bUser.ban({
          reason: bReason,
        }).then(() => {
    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban Log")
    .setColor("RANDOM")
    .addField('Banned Member', `${bUser.user.username}`)
    .addField("Banned by:", `${message.author}`)
    .addField("In server:", `${message.guild.name}`)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);
           
message.channel.send(`${bUser.user.username} has been banished into a blackhole.`)
    bUser.send(banEmbed);
    logs.send(banEmbed);
})
}

exports.help = {
  name:"blackhole",
    aliases: []
}