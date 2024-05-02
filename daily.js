const mongo = require('./mongo')
const command = require('./command')
const songSchema = require('./schemas/song-schema')
const sbsongSchema = require('./schemas/sbsong-schema')
const userSchema = require('./schemas/user-schema')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = (client) => {

  const cache = {}

  command(client, ['daily', 'd'], async (message) => {
    const {member, channel, content, guild} = message;

    var cooldown = 86400000;

    let text = content;

    const split = text.split(' ');
    split.shift()
    text = split.join(' ')

        var result1; var result2; var result2band;
        var dne;

        var lastDaily;
        await mongo().then(async (mongoose) => {
          try{
            var caller = await userSchema.findOneAndUpdate({
              userId: message.member.id,
            },{
              userId: message.member.id
            }, {
              upsert: true,
            }) // findOne
            lastDaily = caller.lastDaily;
          } catch {
            dne = true;
          }
          finally {
            mongoose.connection.close()
          } // finally
        }) // await mongo

        if (dne){
          await mongo().then(async (mongoose) => {
            try{
              var caller = await userSchema.findOneAndUpdate({
                userId: message.member.id,
              },{
                userId: message.member.id,
                lastDaily: 0,
                lastDGD: "",
                lastSwancore: "",
                lastSwancoreBand: "",
              }, {
                upsert: true,
              }) // findOne
              lastDaily = caller.lastDaily;
            } catch {
              dne = true;
            }
            finally {
              mongoose.connection.close()
            } // finally
          }) // await mongo

        }



        if ((Date.now() - lastDaily) > cooldown) {

          await mongo().then(async (mongoose) => {
              try {

            var result = null;
            var n = await songSchema.countDocuments({});
            var r = Math.floor(Math.random() * n);
            result1 = await songSchema.findOne({}).skip(r);

            n = await sbsongSchema.countDocuments({});
            r = Math.floor(Math.random() * n);
            result2 = await sbsongSchema.findOne({}).skip(r);

          } finally {
            mongoose.connection.close()
          }
        })

        if (result2.album == "e"){ result2band = "Eidola"}
        else if (result2.album == "hts"){ result2band = "Hail The Sun"}
        else if (result2.album == "rc"){ result2band = "Royal Coda"}
        else if (result2.album == "ts"){ result2band = "Tilian"}
        else if (result2.album == "wb"){ result2band = "Wolf & Bear"}
        else if (result2.album == "sb"){ result2band = "SECRETBAND"}

        result1 = result1.songName;
        result2 = result2.songName;

        // song cheats in here
        /*if (member.id == '326066108421373955'){ // matt
          result1 = "Eagle vs. Crows"
          result2 = "Omega: Third Temple"
          result2band = "Eidola"
        }*/
        //

          lastDaily = Date.now();

          await mongo().then(async (mongoose) => {
            try{
              await userSchema.findOneAndUpdate({
                userId: message.member.id,
              },{
                lastDaily: Date.now(),
                lastDGD: result1,
                lastSwancore: result2,
                lastSwancoreBand: result2band,
              }, {
                upsert: true,
              }) // findOne
            }finally {
              mongoose.connection.close()
            } // finally
          }) // await mongo

        }


        await mongo().then(async (mongoose) => {
          try{
            var caller = await userSchema.findOneAndUpdate({
              userId: message.member.id,
            },{
              userId: message.member.id
            }, {
              upsert: true,
            }) // findOne
            lastDaily = caller.lastDaily;
            result1 = caller.lastDGD;
            result2 = caller.lastSwancore;
            result2band = caller.lastSwancoreBand;
          }finally {
            mongoose.connection.close()
          } // finally
        }) // await mongo

      var dailyEmbed = new MessageEmbed()
      	.setColor('#0099ff')
      	.setTitle('DAILIES')
      	.setDescription('<@'+member.id+">'s Daily Songs")
      	.addFields(
      		{ name: 'DAILY DGD', value: result1 },
      		{ name: 'DAILY SWANCORE', value: result2 + ' by '  + result2band }
      	)
      	.setTimestamp()

      message.channel.send({embeds: [dailyEmbed]});




  })

}
