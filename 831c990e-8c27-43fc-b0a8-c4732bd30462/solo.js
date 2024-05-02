const mongo = require('./mongo')
const command = require('./command')
const songSchema = require('./schemas/song-schema')
const sbsongSchema = require('./schemas/sbsong-schema')
const userSchema = require('./schemas/user-schema')

module.exports = (client) => {

  const cache = {}

  command(client, ['score'], async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;
    const split = text.split(' ');
    split.shift()
    text = split.join(' ')

    if (split[0]){

    }

  }) // end score check

  command(client, ['solo', 's', 'song'], async (message) => {
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

    var songName;
    var randomLyric;

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

            var lyricArrayLines = result.lyrics.split(/\r?\n/); // split into array by newline

            var lyricArrayLines2 = lyricArrayLines.filter(line => (!line.includes("["))&& (!(line === "")));


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

            message.reply(randomLyric);

            songName = result.songName;
            aliases = result.aliases;


          } // result
          else{
            message.reply("No results found for that query.");
            returne = true;
          } // else
        } finally {
          mongoose.connection.close()
        } // finally
      }) // await mongo

      message.channel.awaitMessages({filter: m => m.author.id == message.author.id,
         max: 1, time: 60000}).then(async collected => {
             // only accept messages by the user who sent the command
               // accept only 1 message, and return the promise after 60s

               // first (and, in this case, only) message of the collection
               var guess = collected.first().content.toLowerCase();

               if ((guess.includes(songName.toLowerCase())) || (aliases.indexOf(guess) != -1) ){

                 await mongo().then(async (mongoose) => {
                   try{
                     await userSchema.findOneAndUpdate({
                       userId: message.member.id,
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

                message.reply("Correct! " + songName + ".");

               } else {
                 message.reply('Incorrect! Answer was ' + songName + '.');
               }


    }).catch(() => {
      if (returne == false){
         message.reply('"' + randomLyric + '" timed out. \n Answer was ' + songName + '.');
       }
     }); // catch

   }) // command



} // module exports
