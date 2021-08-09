const Discord = require('discord.js');
const db = require('quick.db');
  const bt = require('best-tools');

module.exports = {
  name: "dilen",
  run: async (client, message, args) => {

  db.add(`kapasite_${message.author.id}`, 30)
  let miktarsonuç = (bt.rastgele("50", "pozitif"))
    var sebep = ["kaandan para dilendi","ghost swsinden dilendi","insanlardan para dilendi","benden para dilendi","kızdan para dilendi"]
    var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
    db.add(`coin_${message.author.id}`, miktarsonuç)
    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author.username} ${sebepsonuç} ve ${miktarsonuç}  :coin:  kazandı!`)
    .setColor("#5555dd")
    .setFooter("Ekonomi Botu - Çalış Komutu")
    return message.channel.send(embed)
  }
}