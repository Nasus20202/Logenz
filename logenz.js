"use strict";
require("dotenv").config();

const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const logenz = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
  ],
});

logenz.on("ready", () => {
  console.log(`Just logged into Discord as ${logenz.user.tag}!`);
  logenz.user.setPresence({
    activities: [{ name: "W grze \u{1D5DF}\u{1D5F6}\u{1D5F4}\u{1D5EE} \u{1D5DF}\u{1D5F2}\u{1D5F4}\u{1D5F2}\u{1D5FB}\u{1D5F1}", type: ActivityType.Custom }]
  });
});

logenz.on("guildMemberAdd", (member) => {
  const channel = member.guild.systemChannel;
  if (!channel) return;
  console.log(`Hello, ${member}`);
  channel.send(`**Siema**, ${member}!`);
});

logenz.on("guildMemberRemove", (member) => {
  const channel = member.guild.systemChannel;
  if (!channel) return;
  console.log(`Goodbye, ${member}`);
  channel.send(`${member}, i tak nikt cię tu nie chciał, **frajerze**!`);
});

logenz.login(process.env.TOKEN);
