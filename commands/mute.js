
const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('Please actually mention somebody!')
  let User = message.mentions.users.first() || message.guild.members.get(args[0]);
  let muterole = await db.fetch(`mutedRole_${message.guild.id}`);
  if (muterole === 0) return message.channel.send('It appears you don\'t have mute set up. do a;muterole to set it up.')
  else {
    User.addRole(muterole);
    message.channel.send(`✅ ${User.username} was muted.`);
  }
}
module.exports.help = {
  name: 'mute',
    aliases: []
};