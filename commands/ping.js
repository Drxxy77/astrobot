const discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
	// name: 'ping',
    // description: 'Ping!',
    // cooldown: 5,
	// execute(message, args) {

		let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new discord.RichEmbed()
        .setColor("#FF6FF2")
        .addField('API Ping : ', Math.floor(bot.ping) + 'ms')
        .addField('Bot Ping : ', Math.floor(botping) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`requested by ${message.author.tag}`);

        
    return message.channel.send(pingembed);
		
	
};

module.exports.help = {
	name: "ping",
    aliases: []
  }