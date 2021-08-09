const disbut = require("discord-buttons")
const Discord = require("discord.js")
module.exports = {
  name: "r",
  run: async (client, message, args) => {

        const select1 = new disbut.MessageMenuOption()
            .setLabel('Genel')
            .setDescription("Genel Komutları Gösterir.")
            .setValue('1')
            .setEmoji("🪙")
            // select 1
        const select2 = new disbut.MessageMenuOption()
            .setLabel('Owner')
            .setDescription(`Owner Özel Komutları Gösterir.`)
            .setValue('2')
            .setEmoji("🪙")
 // select 2
          const select3 = new disbut.MessageMenuOption()
            .setLabel('Ek')
            .setDescription(`Botun Ek Özelliklerini Gösterir.`)
            .setValue('3')
            .setEmoji("🪙")

            // dokunma
        const menu = new disbut.MessageMenu()
        .addOptions(select1, select2, select3)
        .setMaxValues(1)
        .setMinValues(1)
        .setID("menu")
// buraya dokunma
        const ana = new Discord.MessageEmbed()
            .setTitle('GHOST EKONOMİ BOTU')
            .setDescription(`> :busts_in_silhouette: Destek Sunucusu:[Tıkla!](https://discord.gg/delimine) \n\n > :yum: TOP.GG: [Tıkla!](https://top.gg/bots/${client.user.id}) \n\n > :moneybag: Bağış No'ları \n  > Papara: 0000000000 \n > İninal: 0000000000 \n\n Tüm Hakları Saklıdır,Çalınması Yasaktır. `)
             .setFooter(`${client.user.username}`)
  .setColor("#5555dd")
  .setTimestamp()
  .setThumbnail('https://cdn.discordapp.com/emojis/817847900880896001.png?v=1')

// embedler kendinize göre editleyin 
      let embed1 = new Discord.MessageEmbed()
          .setTitle("Ekonomi Komutları")
            .setDescription(`> **!param**: Ne Kadar Paran Olduğunu Görürsün. \n\n > **!ara**: Arayıp kazanırsın! \n\n > **!günlük**: Günlük ödülünü alırsın. \n\n > **!dilen**: Dilenirsin. \n\n > **!çalış**: Çalışıp para kazanırsın. \n\n > **!ara**: Arayıp kazanırsın. \n\n >  **!davet**: Botun davet linkini görürsün. \n\n > **!stats**: Botun istatistiğini görürsün.`)
            .setColor("#5555dd")
           .setTimestamp()
          .setFooter(`${client.user.username}`)
            .setTimestamp()
              .setThumbnail('https://cdn.discordapp.com/emojis/817847900880896001.png?v=1')
// embed 2
            let embed2 = new Discord.MessageEmbed()
           .setTitle("Owner Komutları")
            .setDescription(`> **!coin-ekle**: Belirttiğin üyeye coin eklersin.\n\n > **!coin-sil**: Belirttiğin üyeden coin silersin.`)
            .setColor("#5555dd")
            .setTimestamp()
             .setFooter(`${client.user.username}`)
             .setTimestamp()
            .setThumbnail('https://cdn.discordapp.com/emojis/817847900880896001.png?v=1')
         // embed 3
          let embed3 = new Discord.MessageEmbed()
         .setTitle("Ek Özellikler")
            .setDescription(`> Sunucu içerisinde belirli mesaj sayısına ulaştığında hediye olarak coin verir. **(500,1000,2000,4000)**`)
            .setColor("#5555dd")
            .setTimestamp()
          .setTimestamp()
             .setFooter(`${client.user.username}`)
            .setThumbnail('https://cdn.discordapp.com/emojis/817847900880896001.png?v=1')
         
        let msg = await message.channel.send({ embed: ana, component: menu })


        const filter = (menu) => menu.clicker.user.id === message.author.id;
        const collector = message.createMenuCollector(filter, { time: 120000 });
        client.on("clickMenu", menu => {
            if(menu.clicker.id !== message.author.id) return;
            menu.reply.defer();
         
            if (menu.values[0] === '1') {
                msg.edit({
                    embed: embed1,
                })
            }
            if (menu.values[0] === '2') {
                msg.edit({
                    embed: embed2,
                })
            }
              if (menu.values[0] === '3') {
                msg.edit({
                    embed: embed3,
                })
            }
      
        })
}
}