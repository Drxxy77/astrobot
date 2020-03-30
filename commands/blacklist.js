const db = require("quick.db");
exports.run = async (bot, message, args) => {
  if (message.author.id != '426015209497296908' && message.author.id != '537351870746984464' && message.author.id != '306557645479870464')
    return message.channel.send("```diff\n-WARNING. You are not the bot owner!\n```");
  let addremove = args[0];
  if (!addremove) return message.channel.send(`Usage: blacklist <add | remove> <guildID> [reason]`);
  let guildID = args[1];
  if (!guildID || isNaN(guildID)) return message.channel.send(`Supply a guild ID!`);
  let reason = args.slice(2).join(" ");
  if (!reason) reason = "No reason specified";
  if (addremove.toLowerCase() === "add") {
    try {
      if (await db.fetch(`blisted_guild_${guildID}`) !== null) return message.channel.send(`That guild is already blacklisted!`);
      let guild = bot.guilds.get(guildID);
      await db.set(`blisted_guild_${guildID}`, reason);
    /*  let embed = new RichEmbed()
        .setTitle("Guild Blacklist Added")
        .setColor("RED")
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`**Guild** ${guild.name} (${guild.id})\n**By:** ${message.author.tag} (${message.author.id})\n**Reason:** ${reason}`)
        .setTimestamp();
      bot.channels.get("659727098075676672").send(embed); */
      message.channel.send(`${guild.name} is now blacklisted!`);
    } catch(err) {
      console.log(err);
      message.channel.send(`Couldn't complete the process! Contact the bot owners if it happens again`);
    };
  } else if (addremove.toLowerCase() === "remove") {
    try {
      if (await db.fetch(`blisted_guild_${guildID}`) === null) return message.channel.send(`That guild is not blacklisted!`);
      await db.delete(`blisted_guild_${guildID}`);
      let guild = bot.guilds.get(guildID);
     /* let embed = new RichEmbed()
        .setTitle("Guild Blacklist Removed")
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`**Guild:** ${guild.name} (${guild.id})\n**By:** ${message.author.tag} (${message.author.id})\n**Reason:** ${reason}`)
        .setTimestamp();
      bot.channels.get("659727098075676672").send(embed);
  //    bot.channels.get("659485327790047252").send(embed); */
      message.channel.send(`I have removed ${guild.name} from the blacklist'!`);
    } catch(err) {
      console.log(err);
      message.channel.send(`Couldn't complete the process! Contact the bot owners if it happens again`);
    };
  } else {
    message.channel.send(`Usage: blacklist <add | remove> <guildID> [reason]`);
  };
};

module.exports.help = {
  name: "blacklistguild",
  aliases: ["blg", "blacklistg", "blguild", "blacklist"]
};