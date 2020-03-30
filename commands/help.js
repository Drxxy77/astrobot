const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('0xabcde')
.addField('intro', 'Bot intro')
.addField('general', 'Shows a list of all user commands!')
.addField('memehelp', 'Shows a list of meme commands!')
.addField('staffhelp', 'Shows a list of all staff commands!')
.setFooter('Reworked by Drxxy#3671')
.setDescription('REMEMBER TO PLACE "a;" BEFORE THE COMMAND NAME!')
message.channel.send(embed)


}
exports.help = {
  name: "help",
    aliases: []
}
