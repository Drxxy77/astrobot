module.exports.run = async (bot, message, args) =>{
  


		const amount = parseInt(args[0]);
        const member = message.mentions.members.first();
 

       
  if (message.member.hasPermission('MANAGE_MESSAGES')) {
	if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number.');
    } else if (amount < 1 || amount > 99) {
        return message.reply('you need to input a number between 1 and 99.');
    } else message.channel.bulkDelete(amount+1, true).catch(err => {
        console.error(err);
        message.channel.send('there was an error trying to prune messages in this channel!');
    });
  } else if (!message.member.hasPermission('MANAGE_MESSAGES')){
  message.reply('you need to have the manage messages permission!')
        
    }  // ...
	
};

module.exports.help = {
    name: "prune",
    aliases: [],
    category: "moderation",
    usage: "prune <number>"
  }