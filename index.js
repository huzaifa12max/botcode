const Discord = require('discord.js');
 const client = new Discord.Client();
const express = require("express")
const app = express()

app.get("/", (req, res) => {
     res.send("Bot is Online 24/7")
})

app.listen(3000, () => {
console.log("Bot is Online 24/7")
})

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login(process.env.TOKEN);
