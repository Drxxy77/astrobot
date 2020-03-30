const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('0xabcde')
.addField('area51', 'area51 meme')
.addField('emoji', 'Emoji meme')
.addField('meme', 'Spicy!')
.addField('onejob', 'You had one job')
.addField('onions', 'Onions meme')
.addField('snap', 'Extra meme')
.addField('treaty', 'Extra meme')
.setFooter('Reworked By Drxxy#3671')
.setDescription('REMEMBER TO PLACE "a;" BEFORE THE COMMAND NAME!')
message.channel.send(embed)


}
exports.help = {
  name: "memehelp",
    aliases: []
}