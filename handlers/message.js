const { bot } = require("../bot");
const config = require("../config.json");
const db = require("quick.db");

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type != "text") return;

  let prefix = config.prefix;
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  let command;

  if (message.isMentioned(bot.user) && !args[0]) {
    //  if (message.content == `<@${bot.user.id}>`) {
    message.channel
      .send(
        `Hey there! My prefix is \`${prefix}\`\nGet started with \`${prefix}help\``
      )
      .catch(err => console.log(err));
  }

  let blacklisted = await db.fetch(`blisted_guild_${message.guild.id}`);
  if (blacklisted !== null)
    return message.channel.send(
      `:x: This guild is blacklisted with the reason: ${blacklisted}`
    );

  if (!message.content.startsWith(prefix)) return;

  if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
  } else {
    command = bot.commands.get(bot.aliases.get(cmd));
  }

  if (command)
    command.run(bot, message, args, config, db).catch(err => console.log(err));
});
