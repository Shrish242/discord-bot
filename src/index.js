require('dotenv').config();
const {Client , IntentsBitField, Message} = require('discord.js');

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
  
  
client.login(process.env.TOKEN);

