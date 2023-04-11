require('dotenv').config();
const fetch =  require("node-fetch")
const discord = require("discord.js")
const link = 'https://www.reddit.com/r/dankmemes.json?sort-top&t-week'

exports.run = async(bot , message , args) => {
    let fetchmemes = await fetch(link).then(m => m.json())
    console.log(fetchmemes)}
exports.help={    name: 'meme'}