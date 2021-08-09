const ms = require("parse-ms");
const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "günlük",
  run: async (client, message, args) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let times = await db.fetch(`worktime_${message.author.id}`);
  let day = 86400000;
  if (times !== null && day - (Date.now() - times) > 0) {
    let time = ms(day - (Date.now() - times));
    message.channel.send(`:stopwatch: Hey! **${message.author.username}**! Beklemelisin: **${
            time.hours ? time.hours + "H" : ""
          } ${time.minutes ? time.minutes + "M" : ""} ${
            time.seconds
              ? time.seconds + "S **"
              : ""
          }`
    );
    return;
  }
  let time = ms(day - (Date.now() - times))
    let moneys = rastgeleMiktar(100, 1100);
      message.channel.send(`:moneybag: **| **, İşte günlük ödülün: :money_with_wings: **${moneys} coin.**!\n:stopwatch: **|** Birdahaki ödülün: ${
            time.hours ? time.hours + "H" : ""
          } ${time.minutes ? time.minutes + "M" : ""} ${
            time.seconds
              ? time.seconds + "S**"
              : ""
          }`);
    db.add(`coin_${message.author.id}`, moneys)
    db.set(`worktime_${message.author.id}`, Date.now());
}
}
