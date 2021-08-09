const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "coin-sil",
  run: async (client, message, args) => {
 if (
    message.author.id !== "837022535266336819" &&
    message.author.id !== "837022535266336819"
  )
    return message.channel.send(
      `Sen benim kurucum değilsin!`
    );
      let user = message.mentions.users.first();
  if (!user)
    return message.channel.send(
   `:no_entry_sign: **| ${message.author.username}**, Lütfen bir kullanıcı belirt!`
    );
     let miktar = args[1];
  if (!miktar)
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, lütfen bir miktar belirt.`
    );
  message.channel.send(
    `:money_with_wings: **| ${miktar || 0}** coin :coin: silindi. Coinini silinen kişi: **${user.tag}**!`
  );
  db.subtract(`coin_${user.id}`, miktar);
  }
}