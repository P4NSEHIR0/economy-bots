const Discord = require('discord.js');
const db = require('quick.db');
  const bt = require('best-tools');

module.exports = {
  name: "çalış",
  run: async (client, message, args) => {

  db.add(`kapasite_${message.author.id}`, 30)
  let miktarsonuç = (bt.rastgele("200", "pozitif"))
    var sebep = ["çorbacıda çalıştı","kaan ın yanında çalıştı","bisikletçide çalıştı","bankada çalıştı","babasının yanında çalıştı","bimde çalıştı","a101 de çalıştı"]
    var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
    db.add(`coin_${message.author.id}`, miktarsonuç)
    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author.username} ${sebepsonuç} ve ${miktarsonuç}  :coin:  kazandı!`)
    .setColor("#5555dd")
    .setFooter("Ekonomi Botu - Çalış Komutu")
    return message.channel.send(embed)
  }
}