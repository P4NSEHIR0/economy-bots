const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "coin-ekle",
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
      `:no_entry_sign: **| ${message.author.username}**, Lütfen bir kullancı belirt!`
    );
  let miktar = args[1];
  if (!miktar)
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, Lütfen bir miktar belirt!`
    );
      message.channel.send(
    `:money_with_wings: **| ${miktar || 0}** coin :coin: göderildi. Coin gönderilen kişi: **${user.tag}**!`
  );
  db.add(`coin_${user.id}`, miktar);
}
}