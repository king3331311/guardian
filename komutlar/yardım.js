const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()

    .setColor("#fff000")
    .addField(
      `İşte Komutlarım!`,
      `
             ${prefix}antiraid aç
             ${prefix}capsengel aç
             ${prefix}emojikoruma aç
             ${prefix}everengel aç
             ${prefix}kanalkoruma aç
             ${prefix}küfürengel aç
             ${prefix}modlog #kanal
             ${prefix}reklamengel aç
             ${prefix}rolkoruma aç
             ${prefix}sohbet-aç
             ${prefix}sohbet-kapat
             ${prefix}yavaşmod süre
             ${prefix}ban @üye sebep
             ${prefix}kick @üye sebep             
             `
    )
    .setFooter(
      `${message.author.username} Tarafından istendi.`,
      message.author.avatarURL()
    );

  return message.channel.send(jkood);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım3"],
  permLevel: 0
};
exports.help = {
  name: "yardım3",
  description: "Komut kategorilerini atar",
  usage: "!yardım3"
};
//DÜZENLENECEK
