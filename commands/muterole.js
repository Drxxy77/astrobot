const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (bot, message, args) => {
  let role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
let muterole = await db.fetch(`mutedRole_${message.guild.id}`);
  if (!args[0]) return message.channel.send('Please actually mention a role of send the role\'s id!')
  console.log(role.id)
  if (muterole > 0) {
    db.subtract(`mutedRole_${message.guild.id}`, role.id).then(() => {
      db.add(`mutedRole_${message.guild.id}`, role.id)
        message.channel.send(':thumbsup:')
    })
 }
  db.add(`mutedRole_${message.guild.id}`, role.id)
  message.channel.send(':thumbsup:')
}
module.exports.help = {
  name: 'muterole',
    aliases: []
};