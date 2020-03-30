const http = require("http");
const express = require("express");
const app = express();
var server = require("http").createServer(app);
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//consts
const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEveryone: true
});
const lib = require("./lib/functions");
const ms = require("ms");
let cooldown = new Set();
let cdseconds = 5;
bot.commands = new Discord.Collection();
let embed = new Discord.RichEmbed();
const fs = require("fs");
const db = require("quick.db");

bot.on("ready", function() {
  setInterval(async () => {
    const statuslist = [
      `${bot.guilds.size} servers`,
      `${bot.channels.size} channels`,
      `${bot.users.size} users`,
      `a;help`,
      `Version 1.2.2`
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      bot.user.setStatus("available");
      bot.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "WATCHING",
          url: "https://www.twitch.tv/monstercat"
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, 15000);
});

//cmd handler
/* fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    if(props.help.aliases != null) {
      
      props.help.aliases.forEach(command => {
        bot.commands.set(command, props)
      })
      
    }
    bot.commands.set(props.help.name, props);
  }); 

}); */
/* bot.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return message.reply('Commands dont work in DMs :x:')
	if (message.guild) {
		const config = require("./config.json")
    const prefix = (config.prefix)
		if (!message.content.startsWith(prefix)) return;
         let blacklist = await db.fetch(`blacklisted`)
    if(blacklist){
    if (message.content.startsWith(prefix) && blacklist.includes(message.author.id)) return message.channel.send("Oh no! You're banned from using this bot!");
    }
		let messageArray = message.content.split(" ");
		let cmd = messageArray[0];
		let args = messageArray.slice(1);
		let commandfile = bot.commands.get(cmd.slice(prefix.length));
		if (commandfile) commandfile.run(bot, message, args, prefix);
    
    let blacklisted = await db.fetch(`blisted_guild_${message.guild.id}`);
    if (blacklisted !== null) return message.channel.send(`${config.no} This guild is blacklisted with the reason: ${blacklisted}`);
    
	}
}) */

//logs
bot.on("messageDelete", message => {
  if (message.author.bot) return;
  const logchannel = message.guild.channels.find(
    channel => channel.name === "logs"
  );
  const user = message.author;
  if (!logchannel) return;
  let deleteEmbed = new Discord.RichEmbed()
    .setTitle("⚠️ A message was deleted!")
    .addField("User", user.tag)
    .addField("Content", "```" + message.content + "```")
    .addField("Channel", message.channel.name)
    .setFooter(
      `MessageID: ${message.id} | AuthorID: ${user.id}`,
      bot.user.avatarURL
    )
    .setColor("#FF0000")
    .setThumbnail(user.avatarURL);
  logchannel.send(deleteEmbed);
});

bot.on("messageUpdate", function(oldMessage, newMessage) {
  if (oldMessage.author.bot) return;

  if (oldMessage.content == newMessage.content) return;
  const user = newMessage.author;

  let logsChannel = oldMessage.guild.channels.find(
    channel => channel.name === "logs"
  );

  if (!logsChannel) return;

  let messageEditEmbed = new Discord.RichEmbed()
    .setTitle("ℹ️ A message was edited!")
    .addField("User", user.tag)
    .addField("Before", "```" + oldMessage.content + "```")
    .addField("After", "```" + newMessage.content + "```")
    .addField(
      "Channel",
      oldMessage.guild.channels.get(oldMessage.channel.id).toString() +
        ` (${oldMessage.channel.id})`
    )
    .setFooter(
      `MessageID: ${oldMessage.id} | AuthorID: ${user.id}`,
      bot.user.avatarURL
    )
    .setColor("#FFFF00")
    .setThumbnail(user.avatarURL);
  return logsChannel.send(messageEditEmbed);
});

bot.once("ready", () => {
  console.log("Ready!");
});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

lib.setup(bot);

module.exports = {
  bot: bot
};

bot.on("error", console.error);
bot.login(process.env.TOKEN);
