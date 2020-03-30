const discord = require('discord.js')
exports.run = async (bot, message, args) => {
let creditsembed = new discord.RichEmbed()
.setFooter('3 Cheers for them! If you would like to  contact the team or the creator, join our support server using the "houston" command!')
.setColor('0xabcde')
.setThumbnail('https://i.imgur.com/rEzWWKk.png')
.setTitle('I was created by:')
.addField('jonesd18#3468', 'My creator')
.addField('Nightmarionne™#2141', 'Dev Helper')
.addField('bakzkndd#0979', 'Helped my creator bring me to life')
.addField('WhiteRider#0428', 'Dev Helper')
.addField('Drxxy#3671', 'Dev Helper')
// original message: message.channel.send("This bot is the work of jonesd18#3468, with the help of .Nightmarionne™#2141, bakzkndd#0979, and WhiteRider#0428. 3 cheers for them!")
message.channel.sendMessage(creditsembed)
}

exports.help = {
  name: "credits",
    aliases: []
}