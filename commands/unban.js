const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = (bot, message, args) => {
  message.delete()
  const member1 = message.mentions.members.first();
  const taggedUser = message.mentions.users.first();
  const user = message.mentions.users.first();
  if (!message.member.hasPermission('BAN_MEMBERS'))
    return message.channel.send("Houston, we've got a problem. You need ban perms to use this command :x:")

  let reason = args.slice(1).join(' ');
  bot.unbanReason = reason;
  bot.unbanAuth = message.author;
  let user1 = args[0];
  let rreason = args.join(" ").slice(22);
  message.guild.unban(user1).catch(err => {})
  
    if (!user1) return message.reply('**Unban failed, Please include the user** **__ID__**.')


 return message.channel.send(`I unbanned ` + user1 + ` for: ` + reason)
}
module.exports.help = {
  name: 'unban',
    aliases: []

}