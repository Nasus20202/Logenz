require('dotenv').config();

const Discord = require('discord.js');
const logenz = new Discord.Client();

logenz.on('ready', () => {
    console.log(`Just logged into Discord as ${logenz.user.tag}!`);
});

logenz.login(process.env.TOKEN);