const Discord = require('discord.js')
const fetch = require('node-fetch');
exports.run = async (bot, message, args) => {
        let msg = await message.channel.send("Generating...")

        fetch("https://apis.duncte123.me/meme")
        .then(res => res.json()).then(body => {
            if(!body || !body.data.image) return message.reply(" whoops. I broke, try again!")

            let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`New meme!`, message.guild.iconURL)
            .setImage(body.data.image)
            .setTimestamp()
            .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            if(body.data.title) {
                embed.setTitle(body.data.title).setURL(body.data.url)
            }
                msg.edit(embed)
        })
    }
module.exports.help = {
  name: 'meme',
    aliases: []
};