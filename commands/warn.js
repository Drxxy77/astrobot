const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let wReason = args.slice(1).join(" ");
    let logs = message.guild.channels.find(r => r.name === "logs");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Houston, we've got a problem. You need the manage message perms to use this command. :x:");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be warned :x:");

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warning Log")
    .setColor("RANDOM")
    .addField("Warned user:", `${bUser.user} with ID: ${bUser.user.id}`)
    .addField("Warned by:", `${message.author}`)
    .addField("In server:", `${message.guild.name}`)
    .addField("Time", message.createdAt)
    .addField("Reason", wReason);
           
message.channel.send(`${bUser} has been warned.`)
    bUser.send(warnEmbed);
    logs.send(warnEmbed);
}

exports.help = {
  name:"warn",
    aliases: []
}