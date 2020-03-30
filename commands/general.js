const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('0xabcde')
.addField('avatar', 'Shows your profile pic or someone else' + `'s`)
.addField('blackhole', 'Need the ban hammer swung on someone? Just mention them and boom, they are gone! $')
.addField('blastoff', 'Bot invite')
.addField('credits', 'Who helped with the bot')
.addField('emoji', 'Emoji meme')
.addField('help', 'Commands list')
.addField('hi', 'Bot says hi')
.addField('houston', 'Gives you the invite to our server, Worlds Unknown!')
.addField('ping', 'Bot stats')
.setFooter('Reworked by Drxxy#3671')
.setDescription('REMEMBER TO PLACE "a;" BEFORE THE COMMAND NAME!')
message.channel.send(embed)


}
exports.help = {
  name: "general",
    aliases: []
}
