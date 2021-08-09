const Discord = require('discord.js');
const db = require('quick.db');
  const bt = require('best-tools');

module.exports = {
  name: "ara",
  run: async (client, message, args) => {

  db.add(`kapasite_${message.author.id}`, 30)
  let miktarsonuç = (bt.rastgele("100", "pozitif"))
    var sebep = ["kaanı aradı","melihi aradı","ryzeyi aradı"]
    var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
    db.add(`coin_${message.author.id}`, miktarsonuç)
    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author.username} ${sebepsonuç} ve ${miktarsonuç}  :coin:  kazandı!`)
    .setColor("#5555dd")
    .setFooter("Ekonomi Botu - Ara Komutu")
    return message.channel.send(embed)
  }
}