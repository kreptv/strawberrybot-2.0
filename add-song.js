const mongo = require('./mongo')
const command = require('./command')
const songSchema = require('./schemas/song-schema')
const sbsongSchema = require('./schemas/sbsong-schema')
const lyricsSchema = require('./schemas/lyrics-schema')
const imagesSchema = require('./schemas/images-schema')


module.exports = (client) => {


  command(client, ['addkurtimage'], async (message) => {
    const {member, channel, content, guild} = message;
  
    let text = content;
  
    const split = text.split(' ');
    split.shift() // remove first element from array
    text = split.join(' ')
  
    // &addkurtimage link

    await mongo().then(async (mongoose) => {
      try{
        await imagesSchema.findOneAndUpdate({
          imageLink: text,
          singer: "Kurt"
        },{
          imageLink: text,
          singer: "Kurt"
        }, {
          upsert: true,
        }) // findOne
      }finally {
        mongoose.connection.close()
      } // finally
      message.channel.send('Added!');
    }) // await mongo
  }) // command

  command(client, ['addkurtlyrics'], async (message) => {
    const {member, channel, content, guild} = message;
  
    let text = content;
  
    const split = text.split('/');
    split.shift() // remove first element from array
    text = split.join(' ')
  
    // &addkurtlyrics / songName / band / lyrics

    if (split.length != 3){
      channel.send("Enter as &addkurtlyrics / <songName> / <band> / <lyrics> ")
      return;
    }
    var songName = split[0].trim();
    var band = split[1].trim();
    var lyrics = split[2].trim();

    await mongo().then(async (mongoose) => {
      try{
        await lyricsSchema.findOneAndUpdate({
          lyrics: lyrics,
          songName: songName,
          band: band,
          singer: "Kurt"
        },{
          lyrics: lyrics,
          songName: songName,
          band: band,
          singer: "Kurt"
        }, {
          upsert: true,
        }) // findOne
      }finally {
        mongoose.connection.close()
      } // finally
      message.channel.send('Added!');
    }) // await mongo
  }) // command

  command(client, ['addjonimage'], async (message) => {
    const {member, channel, content, guild} = message;
  
    let text = content;
  
    const split = text.split(' ');
    split.shift() // remove first element from array
    text = split.join(' ')
  
    // &addjonimage link

    await mongo().then(async (mongoose) => {
      try{
        await imagesSchema.findOneAndUpdate({
          imageLink: text,
          singer: "Jon"
        },{
          imageLink: text,
          singer: "Jon"
        }, {
          upsert: true,
        }) // findOne
      }finally {
        mongoose.connection.close()
      } // finally
      message.channel.send('Added!');
    }) // await mongo
  }) // command

  command(client, ['addjonlyrics'], async (message) => {
    const {member, channel, content, guild} = message;
  
    let text = content;
  
    const split = text.split('/');
    split.shift() // remove first element from array
    text = split.join(' ')
  
    // &addjonlyrics / songName / band / lyrics

    if (split.length != 3){
      channel.send("Enter as &addjonlyrics / <songName> / <band> / <lyrics> ")
      return;
    }
    var songName = split[0].trim();
    var band = split[1].trim();
    var lyrics = split[2].trim();

    await mongo().then(async (mongoose) => {
      try{
        await lyricsSchema.findOneAndUpdate({
          lyrics: lyrics,
          songName: songName,
          band: band,
          singer: "Jon"
        },{
          lyrics: lyrics,
          songName: songName,
          band: band,
          singer: "Jon"
        }, {
          upsert: true,
        }) // findOne
      }finally {
        mongoose.connection.close()
      } // finally
      message.channel.send('Added!');
    }) // await mongo
  }) // command

  command(client, ['addtilianimage'], async (message) => {
    const {member, channel, content, guild} = message;
  
    let text = content;
  
    const split = text.split(' ');
    split.shift() // remove first element from array
    text = split.join(' ')
  
    // &addtilianimage link

    await mongo().then(async (mongoose) => {
      try{
        await imagesSchema.findOneAndUpdate({
          imageLink: text,
          singer: "Tilian"
        },{
          imageLink: text,
          singer: "Tilian"
        }, {
          upsert: true,
        }) // findOne
      }finally {
        mongoose.connection.close()
      } // finally
      message.channel.send('Added!');
    }) // await mongo
  }) // command

  command(client, ['addtilianlyrics'], async (message) => {
    const {member, channel, content, guild} = message;
  
    let text = content;
  
    const split = text.split('/');
    split.shift() // remove first element from array
    text = split.join(' ')
  
    // &addtilianlyrics / songName / band / lyrics

    if (split.length != 3){
      channel.send("Enter as &addtilianlyrics / <songName> / <band> / <lyrics> ")
      return;
    }
    var songName = split[0].trim();
    var band = split[1].trim();
    var lyrics = split[2].trim();

    await mongo().then(async (mongoose) => {
      try{
        await lyricsSchema.findOneAndUpdate({
          lyrics: lyrics,
          songName: songName,
          band: band,
          singer: "Tilian"
        },{
          lyrics: lyrics,
          songName: songName,
          band: band,
          singer: "Tilian"
        }, {
          upsert: true,
        }) // findOne
      }finally {
        mongoose.connection.close()
      } // finally
      message.channel.send('Added!');
    }) // await mongo
  }) // command



command(client, ['addSong', 'addsong'], async (message) => {
  const {member, channel, content, guild} = message;

  let text = content;

  const split = text.split('/');
  split.shift() // remove first element from array
  text = split.join(' ')

  // &addsong name / album

  var valid = false;
  var jc = false;
  var k = false;
  var t = false;
  var j = false;
  var a = false;
  var w = false;
  var o = false;

  if (split.length != 2){
    channel.send("Enter as &addSong / <song name> / <album name> ")
    return;
  }
  var songName = split[0].trim();
  var album = split[1].trim();

  if (album == "single"){
    valid = true; album = "single";
  } else if ((album == "wisiro") || (album == "Whatever i say is royal ocean")){
    valid = true; album = "wisiro";
  } else if ((album == "dbm") || (album == "dbm1") || (album == "dbmi") || (album == "downtown battle mountain")
          || (album == "downtown battle mountain 1") || (album == "downtown battle mountain i")){
    valid = true; album = "dbm";
  } else if ((album == "dgd") || (album == "dance gavin dance") || (album == "deathstar") || (album == "self titled")
          || (album == "self-titled") || (album == "death star")){
    valid = true; album = "deathstar";
  } else if ((album == "happiness")){
    valid = true; album = "happiness";
  } else if ((album == "dbm2") || (album == "dbmii") || (album == "downtown battle mountain 2")
        || (album == "downtown battle mountain ii")){
    valid = true; album = "dbm2";
  } else if ((album == "as") || (album == "acceptance speech") ){
    valid = true; album = "as";
  } else if ((album == "ig") || (album == "instant gratification") ){
    valid = true; album = "ig";
  } else if ((album == "tcs") || (album == "tree city sessions") ){
    valid = true; album = "tcs";
  } else if ((album == "ms") || (album == "mothership") ){
    valid = true; album = "ms";
  } else if ((album == "arse") || (album == "artificial selection") ){
    valid = true; album = "arse";
  } else if ((album == "ab") || (album == "afterburner") ){
    valid = true; album = "ab";
  } else if ((album == "tcs2") || (album == "tree city sessions 2") ||
            (album == "tcsii") || (album == "tree city sessions ii") ){
    valid = true; album = "tcs2";
  } else if ((album == "jj") || (album == "jackpot juicer") ){
    valid = true; album = "jj";
  } else if ((album == "sb") || (album == "secret band") ){
    valid = true; album = "sb";
  }
  else if ((album == "hts")){
    valid = true; album = "hts";
  }
  else if ((album == "rc")){
    valid = true; album = "rc";
  }
  else if ((album == "e")){
    valid = true; album = "e";
  }
  else if ((album == "ts")){
    valid = true; album = "ts";
  }
  else if ((album == "wb")){
    valid = true; album = "wb";
  }
  else {
    message.channel.send("I can't find this album! Try entering it in a different way. If the track was a single or not on an album, write single !")
    return
  } // parse album

  message.channel.send('Enter lyrics: ')


   message.channel.awaitMessages({filter: m => m.author.id == message.author.id,
      max: 1, time: 60000}).then(async collected => {
          // only accept messages by the user who sent the command
            // accept only 1 message, and return the promise after 60s

            // first (and, in this case, only) message of the collection
            var lyrics = collected.first().content;

            if (lyrics.includes("[jc]")){
              jc = true;
            } if (lyrics.includes("[k]")){
              k = true;
            } if (lyrics.includes("[t]")){
              t = true;
            } if (lyrics.includes("[j]")){
              j = true;
            } if (lyrics.includes("[a]")){
              a = true;
            } if (lyrics.includes("[w]")){
              w = true;
            } if (lyrics.includes("[o]")){
              o = true;
            }

            var aliases = [];


if (album == 'sb' || album == 'rc' || album == 'hts' || album == 'e' ||
album == 'wb' || album == 'ts'){

  await mongo().then(async (mongoose) => {
    try{
      await sbsongSchema.findOneAndUpdate({
        songName: songName,
        album: album,
      },{
        aliases: aliases,
        lyrics: lyrics,
      }, {
        upsert: true,
      }) // findOne
    }finally {
      mongoose.connection.close()
    } // finally
    message.channel.send('Added or updated song lyrics!');
  }) // await mongo


} else{
  await mongo().then(async (mongoose) => {
    try{
      await songSchema.findOneAndUpdate({
        songName: songName,
        album: album,
      },{
        aliases: aliases,
        jc: jc,
        k: k,
        t: t,
        j: j,
        a: a,
        w: w,
        o: o,
        lyrics: lyrics,
      }, {
        upsert: true,
      }) // findOne
    }finally {
      mongoose.connection.close()
    } // finally
    message.channel.send('Added or updated song lyrics!');
  }) // await mongo


}


}).catch(() => {
      message.reply('No response obtained, please restart the process.');
  }); // catch

}) // command


command(client, ['addAlias', 'addAliases'], async (message) => {
  const {member, channel, content, guild} = message;

  let text = content;

  const split = text.split('/');
  split.shift() // remove first element from array
  text = split.join(' ')

  // &addAlias name / album
  if (split.length <= 2){
    channel.send("Enter as &addAlias / <song name> / <album name> / <alias> / <alias>")
    return;
  }
  var songName = split[0].trim(); split.shift();
  var album = split[0].trim(); split.shift();

  var stringy = "";

  const alias = split.map(element => {
    return element.trim();
  });

  alias.forEach(element => (stringy += element + "/"));

  channel.send(stringy);


  if (album == 'sb' || album == 'rc' || album == 'hts' || album == 'e' ||
  album == 'wb' || album == 'ts'){

    await mongo().then(async (mongoose) => {
      try{
        await sbsongSchema.findOneAndUpdate({
          songName: songName,
          album: album,
        },{
            $push: { "aliases": {$each: alias  }} ,
        }, {
          upsert: true,
        }) // findOne
      }finally {
        mongoose.connection.close()
      } // finally
      message.channel.send('Added or updated song aliases!');
    }) // await mongo


  } else{
    await mongo().then(async (mongoose) => {
      try{
        await songSchema.findOneAndUpdate({
          songName: songName,
          album: album,
        },{
           $push: { "aliases": {$each: alias  }} ,
        }, {
          upsert: true,
        }) // findOne
      }finally {
        mongoose.connection.close()
      } // finally
      message.channel.send('Added or updated song aliases!');
    }) // await mongo

}


})






} // module exports
