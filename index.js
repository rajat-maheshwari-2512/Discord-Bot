'use strict';
var author;
var reactedRecently=new Set();
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message',message=>{
  if (message.content==="!year")
  {
    author=message.author;
    message.channel.send(`${author} Select the year you are currently studying in to get the respective role.
    **A**    First
    **B**    Second
    **C**    Third
    **D**    Fourth
    **E**    Fifth`)
    .then((message)=>{
      message.react("🇦");
      message.react("🇧");
      message.react("🇨");
      message.react("🇩");
      message.react("🇪");
      client.on("messageReactionAdd",(reaction,user)=>{
        if(!reactedRecently.has(user.id))
        {
          reactedRecently.add(user.id);
          if(reaction.emoji.name==="🇦"&&user.id===author.id)
          {
            const guildMember = reaction.message.guild.members.cache.find(member=>member.id===user.id);
            const role = message.guild.roles.cache.find(role=>role.name==="First Year");
            guildMember.roles.add(role)
            .then((resp)=>{
              message.edit(`${author}, your role has been updated`);
              message.reactions.removeAll();
            });
          }
          else if(reaction.emoji.name==="🇧"&&user.id===author.id)
          {
            const guildMember = reaction.message.guild.members.cache.find(member=>member.id===user.id);
            const role = message.guild.roles.cache.find(role=>role.name==="Second Year");
            guildMember.roles.add(role)
            .then((resp)=>{
              message.edit(`${author}, your role has been updated`);
              message.reactions.removeAll();
            });
          }
          else if(reaction.emoji.name==="🇨"&&user.id===author.id)
          {
            const guildMember = reaction.message.guild.members.cache.find(member=>member.id===user.id);
            const role = message.guild.roles.cache.find(role=>role.name==="Third Year");
            guildMember.roles.add(role)
            .then((resp)=>{
              message.edit(`${author}, your role has been updated`);
              message.reactions.removeAll();
            });
          }
          else if(reaction.emoji.name==="🇩"&&user.id===author.id)
          {
            const guildMember = reaction.message.guild.members.cache.find(member=>member.id===user.id);
            const role = message.guild.roles.cache.find(role=>role.name==="Fourth Year");
            guildMember.roles.add(role)
            .then((resp)=>{
              message.edit(`${author}, your role has been updated`);
              message.reactions.removeAll();
            });
          }
          else if(reaction.emoji.name==="🇪"&&user.id===author.id)
          {
            const guildMember = reaction.message.guild.members.cache.find(member=>member.id===user.id);
            const role = message.guild.roles.cache.find(role=>role.name==="Fifth Year");
            guildMember.roles.add(role)
            .then((resp)=>{
              message.edit(`${author}, your role has been updated`);
              message.reactions.removeAll();
            });
          }
          setTimeout(() => {
            reactedRecently.delete(user.id);
          }, 1000);
        }
      })
    })
  }
});
/*client.on("guildMemberAdd",member=>{
  client.channels.cache.get("551781630595956757").send(`${member} Select the year you are currently studying in to get the respective role.
  **A**    First
  **B**    Second
  **C**    Third
  **D**    Fourth
  **E**    Fifth`)
  .then((message)=>{
    message.react("🇦");
    message.react("🇧");
    message.react("🇨");
    message.react("🇩");
    message.react("🇪");
  })
  client.on("messageReactionAdd",(reaction,user)=>{
    if(reaction.emoji.name==="🇦"&&user.id!="755456712106049546")
    {
      let role=message.guild.roles.cache.find(r=>r.name==="First Year");
      message.member.roles.add(role.id)
      .then((resp)=>{
        message.edit(`${member}, your role has been updated`);
      });
    }
  })
})*/
client.login('NzU1NDU2NzEyMTA2MDQ5NTQ2.X2Dj4w._-iLtwL8BqR1-_M9-viPYCYY7j4');