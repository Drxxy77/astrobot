const Discord = require('discord.js');
const client = new Discord.Client();



module.exports.run = async (bot, message, args) => {

  
 /* let owner = message.guild.owner
  if(owner) owner = owner.user.tag
  else owner = "Couldn't find the owner" */
  let Owner = message.author;
  if(Owner.id !== "306557645479870464" && Owner.id !=="426015209497296908" && Owner.id !=="499882708860665856" && Owner.id !=="537351870746984464") 
    return message.reply("Only the owner can use this command!")
  
   let guild = bot.guilds.get(args[0])
   if(!guild) return message.channel.send('Supply a guild ID')
 //  let Invite = await guild.channels.find((c) => c.type === 'text').createInvite()

   
   let online = guild.members.filter(member => member.user.presence.status !== 'offline');
   let day = guild.createdAt.getDate()
   let month = 1 + guild.createdAt.getMonth()
   let year = guild.createdAt.getFullYear()
   let sicon = guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(guild.name, sicon)
   .setFooter(`Server Created • ${day}.${month}.${year}`)
   .setColor("#7289DA")
  // .setTitle(`${Invite.url}`)
   .setThumbnail(sicon)
   .addField("ID", guild.id, true)
   .addField("Name", guild.name, true)
   .addField("Owner", await guild.fetchMember(guild.ownerID).then(m =>(m.user.tag)), true)
   .addField("Owner ID", await guild.fetchMember(guild.ownerID).then(m =>(m.user.id)), true)
   .addField("Region", guild.region, true)
   .addField("Channels", guild.channels.size, true)
   .addField("Members", guild.memberCount, true)
   .addField("Humans", guild.memberCount - guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Roles", guild.roles.size, true)
   .addField("This was requested by:", message.author.username);
   message.channel.send(serverembed);

}

module.exports.help = {
	name: "guildinfo",
  category: "informative",
  usage: "server",
  aliases: ['server']
}