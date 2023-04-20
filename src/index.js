require('dotenv').config();
const {Client , IntentsBitField, Message} = require('discord.js');

const { Configuration, OpenAIApi } = require('openai');

// const fetch = import('node-fetch').then((module) => module.default);

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready' , (c) => {
    console.log(`${c.user.tag} is online.`);
});

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);


client.on('messageCreate', async (message) => {
    console.log('Message received: ' + message.content);
    if (message.content === 'hello') {
      message.reply('Hey!');
    }
  if (message.content === 'nice') {
    message.react('😀')
    message.reply('nice thing')
  }
  if(message.content === 'flip'){ 
    message.reply('Machina is flipping the coin.....')
var flip = Math.floor(Math.random()*2) + 1;
if ( flip === 1) 
{
  message.reply('it is head');
}
else
{

  message.reply('It is tail');
}
  }
  if (message.author.bot) return;
  if (message.channel.id !== process.env.CHANNEL_ID) return;
  if (message.content.startsWith('!')) return;

  const conversationLog = [
    { role: 'system', content: 'You are a friendly bot' },
    { role: 'user', content: message.content },
  ];

  await message.channel.sendTyping();

  const result = await openai.createChatCompletion({
    model: 'text-davinci-002',
    prompt: '',
    maxTokens: 150,
    temperature: 0.5,
    n: 1,
    stop: ['\n'],
    presencePenalty: 0.6,
    frequencyPenalty: 0.6,
    context: conversationLog,
  });

  message.reply(result.data.choices[0].text);
});
// async function getmsg(message){ 
// client.on('messageCreate', async (message) => {
//   console.log('Message received: ' + message.content);

//   if (message.content === '!gif'){ 
//     message.reply('gif!'); 
//     let url = `https://tenor.googleapis.com/v2/search?q=excited&key=${process.env.TENOR}&client_key=my_test_app&limit=8`
//     let reponse = await fetch(url);
//     let json = await reponse.json();
//     console.log(json);
  
  
//   }
// });

// client.login(process.env.TOKEN);
// }

  
client.login(process.env.TOKEN);

// getmsg()

