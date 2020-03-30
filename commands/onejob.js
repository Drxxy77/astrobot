const Discord = require("discord.js");

const snekfetch = require('snekfetch');
exports.run = async (bot, message, args) => {
  
    try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/onejob.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of this meme!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(allowed[randomnumber].data.title)
        .setImage(allowed[randomnumber].data.url)
        .setFooter("Posted by: " + allowed[randomnumber].data.author)
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
}

exports.conf = {
    aliases: [],
    cooldown: "5"
}

module.exports.help = {
    name: "onejob",
    aliases: []
}