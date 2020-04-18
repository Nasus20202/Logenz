require('dotenv').config();

const Discord = require('discord.js');
const logenz = new Discord.Client();

logenz.on('ready', () => {
    console.log(`Just logged into Discord as ${logenz.user.tag}!`);
});

logenz.on('guildMemberAdd', member =>{
    const channel = member.guild.systemChannel;
    if(!channel) return;
    console.log(`Hello, ${member}`);
    channel.send(`**Siema**, ${member}!`);
});

logenz.on('guildMemberRemove', member =>{
    const channel = member.guild.systemChannel;
    if(!channel) return;
    console.log(`Goodbye, ${member}`);
    channel.send(`${member}, i tak nikt cię tu nie chciał, **frajerze**!`);
});

logenz.login(process.env.TOKEN);