require('dotenv').config();

const Discord = require('discord.js');
const logenz = new Discord.Client();

logenz.on('ready', () => {
    console.log(`Just logged into Discord as ${logenz.user.tag}!`);
});

logenz.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === /*'ogólny'*/ 'test-site');
    if(!channel) return;
    console.log(`Hello, ${member}`);
    channel.send(`Welcome to the server, ${member}`);
});

logenz.on('guildMemberRemove', member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === /*'ogólny'*/ 'test-site');
    if(!channel) return;
    console.log(`Goodbye, ${member}`);
    channel.send(`Goodbye, ${member}`);
});

logenz.login(process.env.TOKEN);