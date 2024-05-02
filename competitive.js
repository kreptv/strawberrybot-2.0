const mongo = require('./mongo')
const command = require('./command')
const songSchema = require('./schemas/song-schema')
const sbsongSchema = require('./schemas/sbsong-schema')
const userSchema = require('./schemas/user-schema')

module.exports = (client) => {

  const cache = {}

  command(client, ['competitive', 'compete', 'c', 'comp'], async (message) => {
    const {member, channel, content, guild} = message;

    var returne = false;

    var jc;
    var k;
    var t;
    var j;
    var w;
    var a;
    var sb, hts, ts, e, rc, wb;

    var aliases;

    let text = content;

    const split = text.split(' ');
    split.shift()
    text = split.join(' ')

    if (split[0]){
      if (split[0].trim().toLowerCase() == "jc" || split[0].trim().toLowerCase() == "jonny"){
        jc = true;
      }
      else if (split[0].trim().toLowerCase() == "k"|| split[0].trim().toLowerCase() == "kurt"){
        k = true;
      }
      else if (split[0].trim().toLowerCase() == "t"|| split[0].trim().toLowerCase() == "tilian"){
        t = true;
      }
      else if (split[0].trim().toLowerCase() == "j"|| split[0].trim().toLowerCase() == "jon"){
        j = true;
      }
      else if (split[0].trim().toLowerCase() == "w"|| split[0].trim().toLowerCase() == "will"){
        w = true;
      }
      else if (split[0].trim().toLowerCase() == "a"|| split[0].trim().toLowerCase() == "andrew"){
        a = true;
      }
      else if (split[0].trim().toLowerCase() == "sb"|| split[0].trim().toLowerCase() == "secret"){
        sb = true;
      }
      else if (split[0].trim().toLowerCase() == "hts"|| split[0].trim().toLowerCase() == "hail"){
        hts = true;
      }
      else if (split[0].trim().toLowerCase() == "rc"|| split[0].trim().toLowerCase() == "royal"){
        rc = true;
      }
      else if (split[0].trim().toLowerCase() == "ts"){
        ts = true;
      }
      else if (split[0].trim().toLowerCase() == "e"|| split[0].trim().toLowerCase() == "eidola"){
        e = true;
      }
      else if (split[0].trim().toLowerCase() == "wb"|| split[0].trim().toLowerCase() == "wolf"){
        wb = true;
      }
      else {
        message.reply("Invalid argument. Using DGD discography as a pool. \n The correct codes can be viewed via the &help command.")
      }
    } // if


    message.channel.send('How many rounds?')


     message.channel.awaitMessages({ filter: m => m.author.id == message.author.id,
        max: 1, time: 60000}).then(async collected => {
            // only accept messages by the user who sent the command
              // accept only 1 message, and return the promise after 60s

              // first (and, in this case, only) message of the collection
              var rounds = collected.first().content;

              if (isNaN(rounds)){
                message.channel.send('No number detected, please restart the command.')
                return;
              } // if isnt a number

              else {
                var songName;
                var randomLyric;
                var pointArrayIDs = [];
                var pointArrayVals = [];

                for (var p = 1; p <= rounds; p++){

                  message.channel.send('**ROUND ' + p + '/' + rounds + ':**')

                  await mongo().then(async (mongoose) => {
                      try {

                        var result = null;

                        if (jc){
                          var n = await songSchema.countDocuments({jc:true});
                          var r = Math.floor(Math.random() * n);
                          result = await songSchema.findOne({jc:true}).skip(r);
                        }
                        else if (k){
                          var n = await songSchema.countDocuments({k:true});
                          var r = Math.floor(Math.random() * n);
                          result = await songSchema.findOne({k:true}).skip(r);
                        }
                        else if (t){
                          var n = await songSchema.countDocuments({t:true});
                          var r = Math.floor(Math.random() * n);
                          result = await songSchema.findOne({t:true}).skip(r);
                        }
                        else if (j){
                          var n = await songSchema.countDocuments({j:true});
                          var r = Math.floor(Math.random() * n);
                          result = await songSchema.findOne({j:true}).skip(r);
                        }
                        else if (w){
                          var n = await songSchema.countDocuments({w:true});
                          var r = Math.floor(Math.random() * n);
                          result = await songSchema.findOne({w:true}).skip(r);
                        }
                        else if (a){
                          var n = await songSchema.countDocuments({a:true});
                          var r = Math.floor(Math.random() * n);
                          result = await songSchema.findOne({a:true}).skip(r);
                        }
                        else if (sb){
                          var n = await sbsongSchema.countDocuments({album:"sb"});
                          var r = Math.floor(Math.random() * n);
                          result = await sbsongSchema.findOne({album:"sb"}).skip(r);
                        }
                        else if (rc){
                          var n = await sbsongSchema.countDocuments({album:"rc"});
                          var r = Math.floor(Math.random() * n);
                          result = await sbsongSchema.findOne({album:"rc"}).skip(r);
                        }
                        else if (e){
                          var n = await sbsongSchema.countDocuments({album:"e"});
                          var r = Math.floor(Math.random() * n);
                          result = await sbsongSchema.findOne({album:"e"}).skip(r);
                        }
                        else if (ts){
                          var n = await sbsongSchema.countDocuments({album:"ts"});
                          var r = Math.floor(Math.random() * n);
                          result = await sbsongSchema.findOne({album:"ts"}).skip(r);
                        }
                        else if (wb){
                          var n = await sbsongSchema.countDocuments({album:"wb"});
                          var r = Math.floor(Math.random() * n);
                          result = await sbsongSchema.findOne({album:"wb"}).skip(r);
                        }
                        else if (hts){
                          var n = await sbsongSchema.countDocuments({album:"hts"});
                          var r = Math.floor(Math.random() * n);
                          result = await sbsongSchema.findOne({album:"hts"}).skip(r);
                        }
                        else {
                          var n = await songSchema.countDocuments({ });
                          var r = Math.floor(Math.random() * n);
                          result = await songSchema.findOne({ }).skip(r);
                        }

                        if (result){

                          var lyricArrayVerses = result.lyrics.split(/\r?\n\n/); // split into array by double newline

                          var randomnum = Math.floor(Math.random() * (lyricArrayVerses.length)); // get random verse

                          var selectedVerse = lyricArrayVerses[randomnum];

                          var lyricArrayLines = selectedVerse.split(/\r?\n/); // split into array by newline

                          var lyricArrayLines2 = lyricArrayLines.filter(line => (!line.includes("[")));


                          if (lyricArrayLines2.length - 2){ // there are at least 3 lines in verse
                            var randomnum2 = Math.floor(Math.random() * (lyricArrayLines2.length-2)); // get random line
                            randomLyric = lyricArrayLines2[randomnum2] + "\n" + lyricArrayLines2[randomnum2+1] + "\n" + lyricArrayLines2[randomnum2+2];
                          } else if (lyricArrayLines2.length - 1){ // there are at least 2 lines in verse
                            var randomnum2 = Math.floor(Math.random() * (lyricArrayLines2.length-1)); // get random line
                            randomLyric = lyricArrayLines2[randomnum2] + "\n" + lyricArrayLines2[randomnum2+1];
                          } else if (lyricArrayLines2.length){ // there are at least 2 lines in verse
                            var randomnum2 = Math.floor(Math.random() * (lyricArrayLines2.length)); // get random line
                            randomLyric = lyricArrayLines2[randomnum2];
                          }

                          message.channel.send(randomLyric);

                          songName = result.songName;
                          aliases = result.aliases;


                        } // result
                        else{
                          message.channel.send("No results found for that query.");
                          returne = true;
                        } // else
                      } finally {
                        mongoose.connection.close()
                      } // finally
                    }) // await mongo

                    var filter;



                      filter = response => {
              	         return ((response.content.toLowerCase().includes(songName.toLowerCase()) || aliases.indexOf(response.content.toLowerCase()) != -1) && !response.author.bot) ;
                       };

                    await message.channel.awaitMessages({filter: filter,
                       max: 1, time: 20000 }).then( async collected => {
                             // return the promise after 20s

                             // first (and, in this case, only) message of the collection
                             var guess = collected.first().content.toLowerCase();

                               await mongo().then(async (mongoose) => {
                                 try{
                                   await userSchema.findOneAndUpdate({
                                     userId: collected.first().author.id,
                                   },{
                                     $inc: {
                                       totalScore: 1,
                                     },
                                   }, {
                                     upsert: true,
                                   }) // findOne
                                 }finally {
                                   mongoose.connection.close()
                                 } // finally
                               }) // await mongo

                              message.channel.send("Correct! <@" + collected.first().author.id + "> guessed "+ songName + ".");

                              if (pointArrayIDs.indexOf(collected.first().author.id) != -1){ // has already scored a point

                                pointArrayVals[pointArrayIDs.indexOf(collected.first().author.id)] ++;

                              } else { // is not yet in pointarrayIDs
                                pointArrayIDs[pointArrayVals.length] = collected.first().author.id;
                                pointArrayVals[pointArrayVals.length] = 1;
                              }

                  }).catch(() => {
                    if (returne == false){
                       message.channel.send('"' + randomLyric + '" timed out. \n Answer was ' + songName + '.');
                     }
                   }); // catch


                } // for

                if (pointArrayIDs[0] != null){
                  var totalPointCalculation = "**SCOREBOARD** \n";
                  var sortedpointArrayIDs = [];
                  sortedpointArrayIDs[0] = pointArrayIDs[0];
                  var sortedpointArrayVals = [];
                  sortedpointArrayVals[0] = pointArrayVals[0];

                  for (var k = 1; k < pointArrayIDs.length; k ++){
                    var w = 0;
                    while (pointArrayVals[k] <= sortedpointArrayVals[w]){ // while current pointarrayval <= sortedpointarrayval
                      w++;
                    }
                    sortedpointArrayIDs.splice(w, 0, pointArrayIDs[k]);
                    sortedpointArrayVals.splice(w, 0, pointArrayVals[k]);
                  } // build score string to send



                  for (var k = 0; k < pointArrayIDs.length; k ++){
                    totalPointCalculation += "<@" + sortedpointArrayIDs[k] + ">: " + sortedpointArrayVals[k] + "\n";
                  } // build score string to send



                  message.channel.send(totalPointCalculation);

                } // at least one element in array
                else{
                  message.channel.send("Nobody scored a point!");
                }


              } // else

              })

   }) // command



} // module exports
