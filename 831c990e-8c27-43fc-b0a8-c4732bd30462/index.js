//cd Documents
//cd strawberrybot
//node index.js



const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const config = require('./config.json')
const command = require('./command')
const mongo = require('./mongo')
const { AttachmentBuilder, Client, Events, GatewayIntentBits, Intents } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const userSchema = require('./schemas/user-schema')
const songSchema = require('./schemas/song-schema')
const sbsongSchema = require('./schemas/sbsong-schema')
const artServerPointsSchema = require('./schemas/artServerPoints-schema')
const song = require('./add-song')
const solo = require('./solo')
const private = require('./privateServerCommands')
const competitive = require('./competitive')
const timersend = require('./timersend')
const guess = require('./guess')
const search = require('./search')
const artServerPoints = require('./artServerPoints.js')
const daily = require('./daily')
const listen = require('./listen')
const { createAudioPlayer, createAudioResource , StreamType, demuxProbe, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, VoiceConnectionStatus, getVoiceConnection } = require('@discordjs/voice')
const play = require('play-dl')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', async (message) => {
  console.log('// strawberrybot online //')

  await mongo().then(mongoose => {
    try {
      console.log('// connected to mongo //')
    } finally {
      mongoose.connection.close()
    }


  /*const channel = client.channels.cache.find(channel => channel.id === '1204874684190040145');

  setInterval(() => {
    channel.send({ content: "kurt travis" });
  }, 60000); // in milliseconds*/




    
  }) // connect to mongo

  client.on('messageCreate', message => {
    var {
      content
    } = message;
    const cache = {}
    content = content.toLowerCase();
  }) // client on message

timersend(client); solo(client); guess(client); search(client); competitive(client);
song(client); private(client); daily(client); listen(client); artServerPoints(client);

command(client, ['help', 'Help'], async (message) => {
  const {member, channel, content, guild} = message;

  let text = content;
  const split = text.split(' ');
  split.shift()
  text = split.join(' ')

  if (split[0]){

  }

var helpEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help')
	.setDescription('List of commands for 🍓bot')
	.addFields(
		{ name: '&s', value: 'Starts a solo game. Only player who initiates the game can answer.' },
		{ name: '&c', value: 'Starts a competitive game. By default, anyone can join the game.' },
    { name: '&g', value: 'Starts a guess the lyrics game. Only player who initiates the game can answer.' },
    { name: '&score', value: 'Shows the total number of questions you have answered correctly.' },
    { name: '&search dgd "lyric"', value: 'Searches database of specified band for a word or phrase.' },
    { name: '&d', value: 'Pulls a daily DGD and Swancore song.' },
    { name: '&s t', value: 'Adding a limit or expansion code after a command will pull queries from a different band.' },
    { name: 'DGD Limit Codes:', value: 'jc - Jonny Craig Era DGD // k - Kurt Travis Era DGD // Tilian Era DGD' },
    { name: 'Swancore Expanded Codes:', value: 'sb - SECRETBAND // ts - Tilian Solo // rc - Royal Coda' },
    { name: 'Swancore Expanded Codes:', value: 'e - Eidola // wb - Wolf & Bear // hts - Hail the Sun' },
	)
	.setTimestamp()

message.channel.send({embeds: [helpEmbed]});

}) // end help

command(client, ['score', 'Score'], async (message) => {
  const {member, channel, content, guild} = message;

  let text = content;
  const split = text.split(' ');
  split.shift()
  text = split.join(' ')

  if (split[0]){

  }

  var playerScore = 0;

  await mongo().then(async (mongoose) => {
      try {

        var result = null;
          result = await userSchema.findOne({userId: message.member.id });

        if (result){
          playerScore = result.totalScore;

        } // result

      } finally {
        mongoose.connection.close()
      } // finally
    }) // await mongo

message.reply("**" + playerScore + "**");

}) // end help





}) // client on ready


client.login(config.token);
