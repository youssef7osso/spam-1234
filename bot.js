const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("611799502440890368ا")
setInterval(function() {
channel.send(`@ProBot ✨#5803 `);
}, 30)
})

client.login(process.env.BOT_TOKEN);