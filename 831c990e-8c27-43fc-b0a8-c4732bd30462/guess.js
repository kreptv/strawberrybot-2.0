const mongo = require('./mongo')
const command = require('./command')
const songSchema = require('./schemas/song-schema')
const sbsongSchema = require('./schemas/sbsong-schema')
const userSchema = require('./schemas/user-schema')

module.exports = (client) => {

  const cache = {}

  command(client, ['guess', 'g', 'guessthelyrics'], async (message) => {
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

    var missingText;
    var missingText1;
    var missingText2;
    var missingText3;

    var thirdLyricPartArray = [];
    var thirdLyricPart

    let text = content;

    const split = text.split(' ');
    split.shift()
    text = split.join(' ')

    if (split[0]){
      if (split[0].trim() == "jc"){
        jc = true;
      }
      else if (split[0].trim() == "k"){
        k = true;
      }
      else if (split[0].trim() == "t"){
        t = true;
      }
      else if (split[0].trim() == "j"){
        j = true;
      }
      else if (split[0].trim() == "w"){
        w = true;
      }
      else if (split[0].trim() == "a"){
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

            var lyricArrayVerse;
            var randomnum;
            var selectedVerse;
            var lyricArrayLines;
            var lyricArrayLines2;



            var continuee = false;
            while (continuee == false){

              lyricArrayVerses = result.lyrics.split(/\r?\n\n/); // split into array by double newline

              randomnum = Math.floor(Math.random() * (lyricArrayVerses.length)); // get random verse

              selectedVerse = lyricArrayVerses[randomnum];

              lyricArrayLines = selectedVerse.split(/\r?\n/); // split into array by newline

              lyricArrayLines2 = lyricArrayLines.filter(line => (!line.includes("[")));


              try {

              if (lyricArrayLines2.length - 3 > 0){ // there are at least 3 lines in verse
                var randomnum2 = Math.floor(Math.random() * (lyricArrayLines2.length-2)); // get random line


                if (lyricArrayLines2[randomnum2+2]){ // there are at least 3 words in line
                  continuee = true;
                thirdLyricPartArray = lyricArrayLines2[randomnum2+2].split(" ");

                var randomnum3 = Math.floor(Math.random() * (thirdLyricPartArray.length-3)); // get word index

                missingText = thirdLyricPartArray[randomnum3] + " " + thirdLyricPartArray[randomnum3+1] + " " + thirdLyricPartArray[randomnum3+2];

                missingText1 = thirdLyricPartArray[randomnum3].trim();
                missingText2 = thirdLyricPartArray[randomnum3+1].trim();
                missingText3 = thirdLyricPartArray[randomnum3+2].trim();

                thirdLyricPartArray.splice(randomnum3, 3, "<???>", "<???>", "<???>");

                thirdLyricPart = thirdLyricPartArray.join(' ');


                randomLyric = lyricArrayLines2[randomnum2] + "\n" + lyricArrayLines2[randomnum2+1] + "\n" + thirdLyricPart;
              } else {
                continuee = false;
              } // else
              } else {
                continuee = false;
              } // else

            } catch {
              returne = true;
            }



            } // while



            if (returne == false){

            message.reply(randomLyric);

            songName = result.songName;
            aliases = result.aliases;
          }


          } // result
          else{
            message.reply("No results found for that query.");
            returne = true;
          } // else
        } finally {
          mongoose.connection.close()
        } // finally
      }) // await mongo

                  if (returne == false){

      message.channel.awaitMessages({filter: m => m.author.id == message.author.id,
         max: 1, time: 60000}).then(async collected => {
             // only accept messages by the user who sent the command
               // accept only 1 message, and return the promise after 60s

               // first (and, in this case, only) message of the collection
               var guess = collected.first().content.toLowerCase();

               if ( (guess.includes(missingText1.toLowerCase() && missingText2.toLowerCase()))
              || (guess.includes(missingText2.toLowerCase() && missingText3.toLowerCase())) ||
              (guess.includes(missingText1.toLowerCase() && missingText3.toLowerCase()))){

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

                message.reply("Correct! '" + missingText + "' from **" + songName + "**.");

               } else {
                 message.reply("Incorrect! Answer was '" + missingText + "' from **" + songName + "**.");
               }


    }).catch(() => {
      if (returne == false){
         message.reply('"' + thirdLyricPart + '" timed out. \n' + "Answer was '" + missingText + "' from **" + songName + "**.");
       }
     }); // catch

   }

   }) // command



} // module exports
