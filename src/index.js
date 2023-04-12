require('dotenv').config();
const {Client , IntentsBitField, Message} = require('discord.js');

const fetch = import('node-fetch').then((module) => module.default);

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
client.on('messageCreate', (message) => {
    console.log('Message received: ' + message.content);
    if (message.content === 'hello') {
      message.reply('Hey!');
    }
  });
  client.on('messageCreate', (message) => {
    console.log('Message received: ' + message.content);
    if (message.content === 'muji') {
      message.reply('Watch your language');
    }
    if (message.content === 'lado') {
      message.reply('Watch your language');
    }
    
  });
  client.on('messageCreate', (message) => {
    console.log('Message received: ' + message.content);
  if (message.content === 'nice') {
    message.react('😀')
    message.reply('nice thing')
  }
  if (message.content === 'sujan') {
    message.react('😚')
    message.reply('gay ho lado')
  }
});
client.on('messageCreate', (message) => {
  console.log('Message received: ' + message.content);
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
});
async function getmsg(message){ 
client.on('messageCreate', async (message) => {
  console.log('Message received: ' + message.content);

  if (message.content === '!gif'){ 
    message.reply('gif!'); 
    let url = `https://tenor.googleapis.com/v2/search?q=excited&key=${process.env.TENOR}&client_key=my_test_app&limit=8`
    let reponse = await fetch(url);
    let json = await reponse.json();
    console.log(json);
  
  
  }
});

client.login(process.env.TOKEN);
}

  
client.login(process.env.TOKEN);

getmsg()