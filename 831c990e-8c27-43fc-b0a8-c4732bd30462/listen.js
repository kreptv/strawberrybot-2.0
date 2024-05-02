const mongo = require('./mongo')
const command = require('./command')
const songSchema = require('./schemas/song-schema')
const userSchema = require('./schemas/user-schema')
const { createAudioPlayer, createAudioResource , StreamType, demuxProbe, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, VoiceConnectionStatus, getVoiceConnection } = require('@discordjs/voice')
const play = require('play-dl')

module.exports = (client) => {

  const cache = {}

  command(client, ['play'], async (message) => {
    const {member, channel, content, guild} = message;

    if (!message.member.voice?.channel) return message.channel.send('Connect to a Voice Channel')

    const connection = joinVoiceChannel({
channelId: message.member.voice.channel.id,
guildId: message.guild.id,
adapterCreator: message.guild.voiceAdapterCreator
})

let args = message.content.split('play ')[1].split(' ')[0]

let stream = await play.stream(args)











   }) // command



} // module exports
