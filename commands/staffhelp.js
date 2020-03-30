const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('0xabcde')
.addField('blackhole', 'Need the ban hammer swung on someone? Just mention them and boom, they are gone! $')
.addField('kick', 'Kick out unruly troublemakers with this command $')
.addField('mute', 'Need some trolls silenced? Mute them $')
.addField('muterole', 'Sets a muted role')
.addField('prune', 'Delete messages if you need to $')
.addField('unban', 'unbans users $')
.addField('warn', 'Warn anyone that is not being cool $')
.setFooter('Mod/Admin commands, Reworked by Drxxy#3671')
.setDescription('REMEMBER TO PLACE "a;" BEFORE THE COMMAND NAME!')
message.channel.send(embed)


}
exports.help = {
  name: "staffhelp",
    aliases: []
}
