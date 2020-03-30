module.exports.run = async (bot, message, args) => {
  if (message.author.id != "426015209497296908" && message.author.id != "306557645479870464" && message.author.id != "499882708860665856" && message.author.id != "537351870746984464")
    return message.channel.send(
      "```diff\n-WARNING. You are not the bot owner or bot staff!\n```"
    );
   let test = args[0]
    if(!test) return message.reply('You forgot to specify an ID!')

let invitematters = bot.guilds.get(test)
if(!invitematters) return message.reply("Im not in this server! Please try again with a valid ID!")


 message.channel.send(`Leaving **${invitematters.name}**`)
 invitematters.leave().then(g => console.log(`Left the guild ${g}`)).then(message.channel.send(`Successfully left ${invitematters.name}`)); 

}; 
  

module.exports.help = {
  name: "leave",
    aliases: []
};
