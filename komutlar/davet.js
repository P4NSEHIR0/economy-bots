const Discord = require('discord.js');

module.exports = {
  name: "davet",
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
.setColor("#5555dd")
.setDescription(`:star: Beni Sunucuna Davet Etmek İçin [Tıkla!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
message.channel.send(embed)
  }
}