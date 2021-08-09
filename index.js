const Discord = require('discord.js');
const prettyMilliseconds = require("pretty-ms");
const { readdir } = require('fs');
const db = require('quick.db');
const client = new Discord.Client();
require('discord-buttons')(client);
client.commands = new Discord.Collection();

client.on('ready', async () => {
  console.log('ready!');
});

client.on('message', async (message) => {
  var prefix = '!';
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift();
  var cmd = client.commands.get(command);
  if (!cmd) return;
  if (!message.guild) return;
  cmd.run(client, message, args);
});

readdir('komutlar/', async (err, files) => {
  if (err) throw new Error(err);
  files.forEach(async (file) => {
    var cmd = require(`./komutlar/${file}`);
    client.commands.set(cmd.name, cmd);
  });
});


client.on("message", async (message) => {
    let miktar = "1";
    db.add(`msgcount.${message.guild.id}_${message.author.id}`, miktar)
});

client.on("message", message => {
  const db = require("quick.db");
  let mesajsayi = db.fetch(`msgcount.${message.guild.id}_${message.author.id}`);
    if(mesajsayi == "500") {
    db.add(`coin_${message.author.id}`, 50)
   message.channel.send(`:sparkles: **Heyy! ${message.author.username}, sunucumuzda 500 mesaja ulaştın ve hediye olarak 50 coin hesabına yatırıldı`);
  };
  if(mesajsayi == "1000") {
    db.add(`coin_${message.author.id}`, 100)
   message.channel.send(`:sparkles: **Heyy! ${message.author.username}, sunucumuzda 1000 mesaja ulaştın ve hediye olarak 100 coin hesabına yatırıldı`);
  };
    if(mesajsayi == "2000") {
    db.add(`coin_${message.author.id}`, 250)
   message.channel.send(`:sparkles: **Heyy! ${message.author.username}, sunucumuzda 2000 mesaja ulaştın ve hediye olarak 250 coin hesabına yatırıldı`);
  };
    if(mesajsayi == "3000") {
    db.add(`coin_${message.author.id}`, 400)
    message.channel.send(`:sparkles: **Heyy! ${message.author.username}, sunucumuzda 3000 mesaja ulaştın ve hediye olarak 400 coin hesabına yatırıldı`);
  };
});

 client.on("message", async msg => {
  if (msg.content.toLowerCase() === '!stats') {
   const istatistikler = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .addField("**Kullanıcı :dizzy:**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("**Sunucu :ringed_planet:**", client.guilds.cache.size.toLocaleString(), true)
                                   .addField("Uptime :date:", `**${prettyMilliseconds(msg.client.uptime)}** süredir aktif olarak çalışıyorum.`, true)

                    .addField("**RAM Kullanımı :mechanic: **", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)

    .setFooter("Anlık Veriler Yukarıdadır.")
 .setThumbnail(`${msg.author.avatarURL({dynamic:true})} `)

    .setTimestamp()
  return msg.channel.send(istatistikler);
};
});
client.login(process.env.token);