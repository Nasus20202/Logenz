'use strict';
require('dotenv').config();

const {Client, Intents} = require('discord.js');
const logenz = new Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_PRESENCES", "GUILD_MESSAGES"]});

logenz.on('ready', () => {
    console.log(`Just logged into Discord as ${logenz.user.tag}!`);
    logenz.user.setPresence({ activities: [{ name: "Liga Legend", type : "PLAYING" }], status: "dnd" });
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
