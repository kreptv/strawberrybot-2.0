const mongo = require('./mongo')
const command = require('./command')
const songSchema = require('./schemas/song-schema')
const sbsongSchema = require('./schemas/sbsong-schema')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');

module.exports = (client) => {

  const cache = {}

  command(client, ['search', 'find'], async (message) => {
    const {member, channel, content, guild} = message;

    let texte = content;

    const split = texte.split(' ');
    split.shift()
    var band = split[0];


    var songName;
    var allthings = "-> ";

    var bandNotValid = false;

         if (band == "dgd" || band == "sb" || band == "hts" || band == "ts"
              || band == "e" || band == "rc" || band == "wb"){
                split.shift(); texte = split.join(' ')
              }
              else { bandNotValid = true; texte = split.join(' ');}


    if (band == "dgd" || bandNotValid){

    await mongo().then(async (mongoose) => {
        try {

          var result = null;

          var n = await songSchema.countDocuments({
            "album": {$nin : ["tcs", "tcs2"]},
              "lyrics": {
                "$regex": texte,
                "$options": "i"
            }
          });
          result = await songSchema.find({
            "album": {$nin : ["tcs", "tcs2"]},
              "lyrics": {
                "$regex": texte,
                "$options": "i"
            }
          }).sort({ "songName": 1 });


          if (result[0] != null){
            allthings += "**" + n + " results: ** \n";
            for (i = 0; i < n; i++){
              allthings = allthings + "**" + (i+1) + ".** " + result[i].songName + "\n";
            }

            var currIndex = 0;

            var sentEmbed

            if (n == 1) {
              sentEmbed = await message.channel.send({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRowOnlyPage()]})
            }
            else{
              sentEmbed = await message.channel.send({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRowFirstPage()]})
            }



              //const filter = m => m.author.id == interaction.author.id;

              const collector = sentEmbed.createMessageComponentCollector({ time: 500000 });


              collector.on('collect', async i => {

                   const {customId, values, member} = i

                if (i.customId === 'left'){
                  if (currIndex == 1){
                    currIndex --;
                    await i.update({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRowFirstPage()]});
                  }
                  else {
                     currIndex --;
                     await i.update({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRow()]});
                   }
                }
                else if (i.customId === 'right'){
                  if (currIndex == (n-2)){
                    currIndex ++;
                    await i.update({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRowLastPage()]});
                  }
                  else {
                     currIndex ++;
                     await i.update({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRow()]});
                   }
                }
              });









          } else{
            allthings += "**No results found for " + texte + "**";
            message.reply(allthings);
          }
            //message.reply(allthings);


          //} // result
        } finally {
          mongoose.connection.close()
        } // finally
      }) // await mongo

    } else {

      await mongo().then(async (mongoose) => {
          try {

            var result = null;

            var n = await sbsongSchema.countDocuments({
              "album": band,
                "lyrics": {
                  "$regex": texte,
                  "$options": "i"
              }
            });
            result = await sbsongSchema.find({
              "album":band,
                "lyrics": {
                  "$regex": texte,
                  "$options": "i"
              }
            }).sort({ "songName": 1 });


            if (result[0] != null){
              allthings += "**" + n + " results: ** \n";
              for (i = 0; i < n; i++){
                allthings = allthings + "**" + (i+1) + ".** " + result[i].songName + "\n";
              }

              var currIndex = 0;

              var sentEmbed

              if (n == 1) {
                sentEmbed = await message.channel.send({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRowOnlyPage()]})
              }
              else{
                sentEmbed = await message.channel.send({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRowFirstPage()]})
              }



                //const filter = m => m.author.id == interaction.author.id;

                const collector = sentEmbed.createMessageComponentCollector({ time: 500000 });


                collector.on('collect', async i => {

                     const {customId, values, member} = i

                  if (i.customId === 'left'){
                    if (currIndex == 1){
                      currIndex --;
                      await i.update({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRowFirstPage()]});
                    }
                    else {
                       currIndex --;
                       await i.update({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRow()]});
                     }
                  }
                  else if (i.customId === 'right'){
                    if (currIndex == (n-2)){
                      currIndex ++;
                      await i.update({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRowLastPage()]});
                    }
                    else {
                       currIndex ++;
                       await i.update({embeds: [generateEmbed(currIndex, n, result[currIndex], texte)], components: [generateButtonRow()]});
                     }
                  }
                });









            } else{
              allthings += "**No results found for " + texte + "**";
              message.reply(allthings);
            }
              //message.reply(allthings);


            //} // result
          } finally {
            mongoose.connection.close()
          } // finally
        }) // await mongo


    }



      function generateButtonRow(){
        const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
            .setCustomId('left')
            .setLabel('<-')
            .setStyle('DANGER'),
            new MessageButton()
            .setCustomId('right')
            .setLabel('->')
            .setStyle('SUCCESS'),
              );
              return row;
      }
      function generateButtonRowFirstPage(){
        const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
            .setCustomId('left')
            .setLabel('<-')
            .setStyle('DANGER')
            .setDisabled(true),
            new MessageButton()
            .setCustomId('right')
            .setLabel('->')
            .setStyle('SUCCESS'),
              );
              return row;
      }
      function generateButtonRowLastPage(){
        const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
            .setCustomId('left')
            .setLabel('<-')
            .setStyle('DANGER'),
            new MessageButton()
            .setCustomId('right')
            .setLabel('->')
            .setStyle('SUCCESS')
            .setDisabled(true),
              );
              return row;
      }
      function generateButtonRowOnlyPage(){
        const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
            .setCustomId('left')
            .setLabel('<-')
            .setStyle('DANGER')
            .setDisabled(true),
            new MessageButton()
            .setCustomId('right')
            .setLabel('->')
            .setStyle('SUCCESS')
            .setDisabled(true),
              );
              return row;
      }


      function generateEmbed(currIndex, n, result, texte){

        if (result == null) {
          return
        }

        var lyricArrayLines = result.lyrics.split(/\r?\n/); // split into array by newline

        var lyricArrayLines2 = lyricArrayLines.filter(line => (!line.includes("["))&& (!(line === "")));

        var position = 0;
        for (var j = 0; j < lyricArrayLines2.length; j++){
          if (lyricArrayLines2[j].toLowerCase().includes(texte.toLowerCase())){
            position = j;
          }
        }


        if (lyricArrayLines2[position-1]) {
          var selectedLyrics = lyricArrayLines2[position-1] + "\n" + lyricArrayLines2[position] + "\n" + lyricArrayLines2[position+1];
        }
        else if (lyricArrayLines2[position+2]){
          var selectedLyrics = lyricArrayLines2[position] + "\n" + lyricArrayLines2[position+1] + "\n" + lyricArrayLines2[position+2];
        }




        var embed = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle( (currIndex+1) + "/" + (n))
          .setDescription("Searching lyric database for '" + texte +"'!")
          .addFields(
            { name: result.songName, value: "" + selectedLyrics , inline: true}
          )
          .setTimestamp()
          return embed;
      }





   }) // command



} // module exports
