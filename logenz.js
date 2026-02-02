"use strict";

import { Client, GatewayIntentBits, ActivityType, Events } from "discord.js";

const logenz = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
  ],
});

logenz.on(Events.ClientReady, () => {
  console.log(`Just logged into Discord as ${logenz.user.tag}!`);
  logenz.user.setPresence({
    activities: [
      {
        name: "W grze \u{1D5DF}\u{1D5F6}\u{1D5F4}\u{1D5EE} \u{1D5DF}\u{1D5F2}\u{1D5F4}\u{1D5F2}\u{1D5FB}\u{1D5F1}",
        type: ActivityType.Custom,
      },
    ],
  });
});

logenz.on(Events.GuildMemberAdd, (member) => {
  const channel = member.guild.systemChannel;
  if (!channel) return;
  console.log(`Hello, ${member.displayName}`);
  channel.send(`**Siema**, ${member}!`);
});

logenz.on(Events.GuildMemberRemove, (member) => {
  const channel = member.guild.systemChannel;
  if (!channel) return;
  console.log(`Goodbye, ${member.displayName}`);
  channel.send(
    `**${member.displayName}**, i tak nikt cię tu nie chciał, **frajerze**!`,
  );
});

logenz.login(process.env.TOKEN);
