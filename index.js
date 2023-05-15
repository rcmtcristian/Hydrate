// // Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
// import axios from "axios";

const funFacts = [
  "Water is tasteless and odorless.",
  "The average adult human body is made up of 50-65% water.",
  "Water regulates your body temperature.",
  "Drinking water can help you lose weight.",
  "Water is essential for digestion.",
  "Dehydration can cause headaches and dizziness.",
  "The amount of water you need to drink each day can vary depending on your age, weight, and activity level.",
  "Water can help improve your mood and cognitive function.",
  "Water is the most important nutrient for the human body.",
  "The recommended daily intake of water for an adult is 8-10 glasses.",
  "Water has a high surface tension, which is why water droplets form round beads on a surface.",
  "Water can exist in three states of matter: solid (ice), liquid, and gas (water vapor).",
  "Water expands when it freezes, which is why ice floats on water.",
  "The Earth is often referred to as the blue planet because about 71% of its surface is covered by water.",
  "Water is the only substance on Earth that naturally occurs in all three physical states at temperatures commonly found on our planet.",
  "Water is a universal solvent, meaning it can dissolve a variety of substances.",
  "Hot water freezes faster than cold water, a phenomenon known as the Mpemba effect.",
  "Water can exist in a supercooled state, meaning it can remain liquid at temperatures below freezing.",
  "The sound of running water can help make people need to urinate.",
  "Water has a very high specific heat capacity, meaning it can absorb a lot of heat before its temperature rises significantly.",
];

const encouragingMessages = [
  "Stay hydrated and keep crushing it!",
  "Don't forget to drink water and stay on top of your game!",
  "Drink up, it's time to show your body some love!",
  "You got this! Keep drinking water and taking care of yourself!",
  "Stay hydrated and keep shining!",
  "Every sip counts, keep up the good work!",
  "Stay cool, calm, and hydrated!",
  "Drinking water is like giving your body a big hug. Keep it up!",
  "Stay refreshed and focused by drinking water throughout the day!",
  "You're doing great! Don't forget to hydrate!",
];

config();

// const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("bot is ready");
});

client.on("messageCreate", async (message) => {
  if (message.content === "ping") {
    message.reply({
      content: "pong",
    });
  } else if (message.content.toLowerCase() === "waterfact") {
    message.reply({
      content: funFacts[Math.floor(Math.random() * funFacts.length)],
    });
  } else if (message.content.toLowerCase() === "hydrate") {
    message.reply({
      content: encouragingMessages[Math.floor(Math.random() * funFacts.length)],
    });
  }
});

// client.on("messageCreate", async (message) => {
//   if (message.content === "ping") {
//     message.reply({
//       content: "pong",
//     });
//   } else if (message.content.toLowerCase() === "waterfact") {
//     message.reply({
//       content: funFacts[Math.floor(Math.random() * funFacts.length)],
//     });
//   } else if (message.content.toLowerCase() === "hydrate") {
//     let resp = await axios.get(`https://api.quotable.io/random`);
//     const Hydrate = resp.data.content;

//     message.reply({
//       content: Hydrate,
//     });
//   }
// });

client.login(process.env.HYDRATE_TT);

//

// // // Require the necessary discord.js classes
// import { Client, Events, GatewayIntentBits } from "discord.js";
// import { config } from "dotenv";
// import axios from 'axios';
// // // Load environment variables from .env file
// // config();
// // console.log(process.env);
// // const { TOKEN } = process.env;

// // // Create a new instance
// // const client = new Client({
// // 	intents: [
// // 		GatewayIntentBits.Guilds,
// // 		GatewayIntentBits.GuildMessages,
// // 		GatewayIntentBits.MessageContent,
// // 	],
// // });

// // // When the client is ready, run this code (only once)
// // client.once(Events.ClientReady, (c) => {
// // 	console.log(`Ready! Logged in as ${c.user.tag}`);
// // });

// // // Log in to Discord with your client's token
// // client.login(TOKEN);

// config();

// // const { Client, GatewayIntentBits } = require('discord.js');
// const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// const funFacts = [
//   "Water is tasteless and odorless.",
//   "The average adult human body is made up of 50-65% water.",
//   "Water regulates your body temperature.",
//   "Drinking water can help you lose weight.",
//   "Water is essential for digestion.",
//   "Dehydration can cause headaches and dizziness.",
//   "The amount of water you need to drink each day can vary depending on your age, weight, and activity level.",
//   "Water can help improve your mood and cognitive function.",
//   "Water is the most important nutrient for the human body.",
//   "The recommended daily intake of water for an adult is 8-10 glasses."
// ];

// client.on('ready', () => {
//   console.log('bot is ready');
// });

// client.on('messageCreate', async (message) => {
//   if (message.content === 'ping') {
//     message.reply({
//       content: 'pong',
//     });
//   } else if (message.content.toLowerCase() === 'hydrate') {
//     let resp;
//     if (message.content.toLowerCase() === 'Hydration-f') {
//       message.reply({
//       content: funFacts[Math.floor(Math.random() * funFacts.length).toString()],
//     });
//     } else {
//       resp = await axios.get(`https://api.quotable.io/random`);
//       resp = resp.data.content;
//     }
//     message.reply({
//       content: resp,
//     });
//   }
// });

// client.login(process.env.HYDRATE_TT);
