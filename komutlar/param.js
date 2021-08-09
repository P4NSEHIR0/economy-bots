const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "param",
  run: async (client, message, args) => {

let user = message.author
let para = await db.fetch(`coin_${user.id}`) || 0  
  
    var ghost = new Discord.MessageEmbed()
    .setTitle('PARAN')
    .setColor('#5555dd')
    .setDescription(`:coin: Coin: **${para}** \n\n :question:  Biliyor Muydun: **Coinlerle alış-veriş yapabilirsin.**`)
    .setFooter("Ghost Development Ekonomi Botu")
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
  message.channel.send(ghost)
  }
}