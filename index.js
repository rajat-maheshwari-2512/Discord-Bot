"use strict";
var author;
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("I am ready!");
});
client.on("message", (message) => {
  if (message.content === "!year") {
    author = message.author;
    message.channel
      .send(
        `${author} Select the year you are currently studying in to get the respective role.
    **A**    First
    **B**    Second
    **C**    Third
    **D**    Fourth
    **E**    Fifth`
      )
      .then((message) => {
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");
        message.react("🇩");
        message.react("🇪");
        client.on("messageReactionAdd", (reaction, user) => {
          if (reaction.emoji.name === "🇦" && user.id === author.id) {
            const guildMember = reaction.message.guild.members.cache.find(
              (member) => member.id === user.id
            );
            const role = message.guild.roles.cache.find(
              (role) => role.name === "First Year"
            );
            guildMember.roles.add(role).then((resp) => {
              message.edit(`${author}, your role has been updated`);
              message.reactions.removeAll();
            });
          } else if (reaction.emoji.name === "🇧" && user.id === author.id) {
            const guildMember = reaction.message.guild.members.cache.find(
              (member) => member.id === user.id
            );
            const role = message.guild.roles.cache.find(
              (role) => role.name === "Second Year"
            );
            guildMember.roles.add(role).then((resp) => {
              message.edit(`${author}, your role has been updated`);
              message.reactions.removeAll();
            });
          } else if (reaction.emoji.name === "🇨" && user.id === author.id) {
            const guildMember = reaction.message.guild.members.cache.find(
              (member) => member.id === user.id
            );
            const role = message.guild.roles.cache.find(
              (role) => role.name === "Third Year"
            );
            guildMember.roles.add(role).then((resp) => {
              message.edit(`${author}, your role has been updated`);
              message.reactions.removeAll();
            });
          } else if (reaction.emoji.name === "🇩" && user.id === author.id) {
            const guildMember = reaction.message.guild.members.cache.find(
              (member) => member.id === user.id
            );
            const role = message.guild.roles.cache.find(
              (role) => role.name === "Fourth Year"
            );
            guildMember.roles.add(role).then((resp) => {
              message.edit(`${author}, your role has been updated`);
              message.reactions.removeAll();
            });
          } else if (reaction.emoji.name === "🇪" && user.id === author.id) {
            const guildMember = reaction.message.guild.members.cache.find(
              (member) => member.id === user.id
            );
            const role = message.guild.roles.cache.find(
              (role) => role.name === "Fifth Year"
            );
            guildMember.roles.add(role).then((resp) => {
              message.edit(`${author}, your role has been updated`);
              message.reactions.removeAll();
            });
          }
        });
      });
  }
});
client.login("<Your_Token_Here>");
