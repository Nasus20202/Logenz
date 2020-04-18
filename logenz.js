require('dotenv').config();

const Discord = require('discord.js');
const logenz = new Discord.Client();

logenz.on('ready', () => {
    console.log(`Just logged into Discord as ${logenz.user.tag}!`);
    logenz.user.setPresence({ activity: { name: 'Liga Legend' }, status: 'dnd' });
    //setInterval(update(), 5000);
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

/*function update(){
    let user = logenz.users.get('name', 'Logenz');
    let id = user.id;
    console.log(id);
    if(!logenzUser) return;
    console.log(logenzUser.displayAvatarURL());
}*/



logenz.login(process.env.TOKEN);