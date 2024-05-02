
const mongo = require('./mongo')
const { MessageEmbed } = require('discord.js');
const command = require('./command')
const imagesSchema = require('./schemas/images-schema')
const lyricsSchema = require('./schemas/lyrics-schema')


module.exports = (client) => {

  var testServer = "990165733931638804";
  var mattServer = "733261752241750037";

  var kurtchannelmattserver = "1137930217403469945";


  command(client, ['generatememe'], async (message) => {
    const {member, channel, content, guild} = message;


    if (guild.id != testServer && guild.id != mattServer){
    } else {
         //if (channel.id == kurtchannelmattserver){
            // code goes here

            var generatedsinger;
            var generatedlyrics; var generatedimage; var generatedsongName; var generatedband;

            var result1; var result2;

            await mongo().then(async (mongoose) => {
                try {
  
              var result = null;
              var n = await imagesSchema.countDocuments({});
              var r = Math.floor(Math.random() * n);
              result1 = await imagesSchema.findOne({}).skip(r);
  
              n = await lyricsSchema.countDocuments({ "singer": result1.singer});
              r = Math.floor(Math.random() * n);
              result2 = await lyricsSchema.findOne({ "singer": result1.singer}).skip(r);
  
            } finally {
              mongoose.connection.close()
            }
        })

            generatedlyrics = result2.lyrics;
            generatedimage = result1.imageLink;
            generatedsongName = result2.songName;
            generatedband = result2.band;



            var kurtEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(generatedlyrics)
            .setImage(generatedimage)
            .setTimestamp()
            .setFooter({ text: generatedsongName + " - " + generatedband });

        
        message.channel.send({embeds: [kurtEmbed]});






        // }
    //  return;
    }


    let text = content;

    const split = text.split(' ');
    split.shift() // remove first element from array
    text = split.join(' ')








  })


}