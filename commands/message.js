const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  
  let Owner = message.author;
  if(Owner.id !== "306557645479870464" && Owner.id !=="426015209497296908" && Owner.id !=="499882708860665856" && Owner.id !=="537351870746984464") return message.reply("Only the owner can use this command!")
  
  // let owner = message.guild.owner
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("Please give us reason for contacting");

   let contact = new Discord.RichEmbed()
   .setColor("00ff00")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`Contact message from Astro Team`)
   .setTitle("Announcement!")
   .addField("Message: ", sayMessage)
   .setTimestamp()

  //  bot.users.get(owner).send('contact'); 
     bot.guilds.forEach(guild => {
     bot.users.get(guild.ownerID).send(contact);
});
  
      }
      module.exports.help = {
        name: "message",
        aliases: []
      }