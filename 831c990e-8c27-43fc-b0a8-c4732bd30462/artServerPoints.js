const mongo = require('./mongo')
const command = require('./command')
const artServerPointsSchema = require('./schemas/artServerPoints-schema')

const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');

module.exports = (client) => {


  var artChannelArtServer = "733261752241750037";
  
  var artServer = "1171338100207783958";

  var mattId = "326066108421373955";
  var krepId = "192453379816030208";


  const cache = {}



  command(client, ['AddPoints', 'addpoints', 'ap'], async (message) => {
    const {member, channel, content, guild} = message;

        if (guild.id == artServer && (message.member.id == mattId || message.member.id == krepId)){

    let text = content;
    const split = text.split(' ');
    split.shift()
    text = split.join(' ')

    if (!(split[0] && split[1])){
        message.channel.send("Enter as AddPoints @<ping user> <Points to add>");
        return;
    } else if (message.mentions.users.first() == null){
    message.channel.send( "plz ping someone ty");
    return;
    }

let user = client.users.cache.get(message.mentions.users.first().id).username;
    message.channel.send( "Adding points to " + user);




await mongo().then(async (mongoose) => {
                   try{
                     await artServerPointsSchema.findOneAndUpdate({
                       userId: message.mentions.users.first().id,
                     },{
                       $inc: {
                         totalScore: split[1],
                       },
                     }, {
                       upsert: true,
                     }) // findOne
                   }finally {
                     mongoose.connection.close()
                   } // finally
                 }) // await mongo*/

    }
        else { message.channel.send("no auth ");}
  }) // end addPoints



  command(client, ['EatPoints', 'eatpoints', 'ep'], async (message) => {
    const {member, channel, content, guild} = message;

        if (guild.id == artServer && (message.member.id == mattId || message.member.id == krepId)){

    let text = content;
    const split = text.split(' ');
    split.shift()
    text = split.join(' ')

    if (!(split[0] && split[1])){
        message.channel.send("Enter as EatPoints @<ping user> <Points to eat>");
        return;
    }else if (message.mentions.users.first() == null){
    message.channel.send( "plz ping someone ty");
    return;
    }

let user = client.users.cache.get(message.mentions.users.first().id).username;
    message.channel.send( "Eating points from " + user);


await mongo().then(async (mongoose) => {
                   try{
                     await artServerPointsSchema.findOneAndUpdate({
                       userId: message.mentions.users.first().id,
                     },{
                       $inc: {
                         totalScore: -split[1],
                       },
                     }, {
                       upsert: true,
                     }) // findOne
                   }finally {
                     mongoose.connection.close()
                   } // finally
                 }) // await mongo*/

    }
        else { message.channel.send("no auth ");}
  }) // end addPoints

    command(client, ['SetPoints', 'setpoints', 'sp'], async (message) => {
    const {member, channel, content, guild} = message;

        if (guild.id == artServer && (message.member.id == mattId || message.member.id == krepId)){

    let text = content;
    const split = text.split(' ');
    split.shift()
    text = split.join(' ')

    if (!(split[0] && split[1])){
        message.channel.send("Enter as SetPoints @<ping user> <What to set points to>");
        return;
    }else if (message.mentions.users.first() == null){
    message.channel.send( "plz ping someone ty");
    return;
    }

let user = client.users.cache.get(message.mentions.users.first().id).username;
    message.channel.send( "Setting points of " + user);


await mongo().then(async (mongoose) => {
                   try{
                     await artServerPointsSchema.findOneAndUpdate({
                       userId: message.mentions.users.first().id,
                     },{
                         totalScore: split[1],
                     }, {
                       upsert: true,
                     }) // findOne
                   }finally {
                     mongoose.connection.close()
                   } // finally
                 }) // await mongo*/

    }
        else { message.channel.send("no auth ");}
  }) // end addPoints


 command(client, ['ViewPoints', 'viewpoints', 'ShowPoints', 'showpoints', 'vp'], async (message) => {
    const {member, channel, content, guild} = message;

        if (guild.id == artServer && (message.member.id == mattId || message.member.id == krepId)){

    let text = content;
    const split = text.split(' ');
    split.shift()
    text = split.join(' ')

    if (!(split[0])){
        message.channel.send("Enter as ViewPoints @<ping user>");
        return;
    } else if (message.mentions.users.first() == null){
    message.channel.send( "plz ping someone ty");
    return;
    }


 else{

              var result2 ;
          await mongo().then(async (mongoose) => {
          try{
            result2 = await artServerPointsSchema.findOne(  { userId: message.mentions.users.first().id });
        }catch{
          message.channel.send("err")
          return
        }
          })
          if (result2 != null){
            //let user = await client.users.fetch(result2.userId).catch(console.error);
                let user = client.users.cache.get(message.mentions.users.first().id).username;
             message.channel.send(user+ " has " + result2.totalScore + " points");
          } else{
             message.channel.send("user not in system")
          }
        }

        }else { message.channel.send("no auth ");}
  }) // end addPoints


command(client, ['RegisterArt', 'ra', 'registerart'], async (message) => {
    const {member, channel, content, guild} = message;

        if (guild.id == artServer){

    let text = content;
    const split = text.split(' ');
    split.shift()
    text = split.join(' ')

        var uncoloredSketch = 4; var coloredSketch = 6; var shadedSketch = 10;
        var uncoloredLined = 6; var coloredLined = 12; var shadedLined = 14;
        var coloredLineless = 12; var shadedLineless = 18; var painted = 20;

        var noBG = 0; var abstractBG = 10; var simpleBG = 20; var complexBG = 30;

        var bustMultiplier = 1; var halfBodyMultipler = 1.5; var fullBodyMultiplier = 2; // only applied to type of art
        var notAnimated = 1; var gifMultiplier = 2; var animaticMultiplier = 4; var fullAnimationMultiplier = 6;

        var calc = 0;

        // Type of art
        // Number of characters?
            // For each character:
                // Bust, half body, or full body?
        // Background?
        // not animated, gif, animatic, or full animation?

        message.channel.send('Starting art registry calculation...')

        var typeOfArt;

        const typeOfArtRow = new MessageActionRow()
          			.addComponents(
          				new MessageSelectMenu()
          					.setCustomId('typeOfArtRow')
          					.setPlaceholder('Select the type of art!')
          					.addOptions([
          						{
          							label: 'Uncolored Sketch',
          							description: '4 points',
          							value: 'Uncolored Sketch',
          						},
          						{
          							label: 'Colored Sketch',
          							description: '6 points',
          							value: 'Colored Sketch',
          						},
                                {
                                    label: 'Shaded Sketch',
                                    description: '10 points',
                                    value: 'Shaded Sketch',
                                },
                                {
                                    label: 'Uncolored Lined',
                                    description: '6 points',
                                    value: 'Uncolored Lined',
                                },
                                {
                                    label: 'Colored Lined',
                                    description: '12 points',
                                    value: 'Colored Lined',
                                },
                                {
                                    label: 'Shaded Lined',
                                    description: '14 points',
                                    value: 'Shaded Lined',
                                },
                                {
                                    label: 'Colored Lineless',
                                    description: '12 points',
                                    value: 'Colored Lineless',
                                },
                                {
                                    label: 'Shaded Lineless',
                                    description: '18 points',
                                    value: 'Shaded Lineless',
                                },
                                {
                                    label: 'Painted',
                                    description: '20 points',
                                    value: 'Painted',
                                },
          					]),
          			);
                    
                    const typeOfArtmessage = await message.reply({content: "What type of art is this?" , components: [typeOfArtRow]})
                    const filter1 = m => m.member.id == interaction.member.id;

                    const collector = typeOfArtmessage.createMessageComponentCollector({ filter1, componentType: 'SELECT_MENU', max:1, time: 180000 });

                    collector.on('collect', async i => {

                            const {customId, values, member} = i
                           for (const id of values){

                                if(id == "Uncolored Sketch"){
                                    calc = calc + uncoloredSketch;
                                } else if(id == "Colored Sketch"){
                                    calc = calc + coloredSketch;
                                } else if(id == "Shaded Sketch"){
                                    calc = calc + shadedSketch;
                                } else if(id == "Uncolored Lined"){
                                    calc = calc + uncoloredLined;
                                } else if(id == "Colored Lined"){
                                    calc = calc + coloredLined;
                                } else if(id == "Shaded Lined"){
                                    calc = calc + shadedLined;
                                } else if(id == "Colored Lineless"){
                                    calc = calc + coloredlineless;
                                } else if(id == "Shaded Lineless"){
                                    calc = calc + shadedLineless;
                                } else if(id == "Painted"){
                                    calc = calc + painted;
                                }

                                await i.update({content: "Selected " + id  + "\nPoints: " + calc, components: []})
                            }

                          }) // char collector

                    await new Promise(resolve => collector.once('collect', async (message) => {
                                            resolve(message);
                                    
                                  }))




                    message.reply('How many characters are in the piece?');

                    const filter = m => m.author.id == message.author.id;

                    var charnum;
                    const charcollector = message.channel.createMessageCollector({ filter, max: 1, time: 180000 });
                    charcollector.on('collect', async collected => {
                    charnum = collected.content;
                    if (isNaN(charnum) == false) { //if charnum is a number


                    const howMuchOfArtRow = new MessageActionRow()
          			.addComponents(
          				new MessageSelectMenu()
          					.setCustomId('howMuchOfArtRow')
          					.setPlaceholder('Select what you drew!')
          					.addOptions([
          						{
          							label: 'Headshot',
          							description: 'x1 multiplier',
          							value: 'Headshot',
          						},
          						{
          							label: 'Half Body',
          							description: 'x1.5 multiplier',
          							value: 'Half Body',
          						},
                                {
                                    label: 'Full Body',
                                    description: 'x2 multiplier',
                                    value: 'Full Body',
                                },
          					]),
          			);

                    calculationWithHHBFB = 0;

                    for(var j = 0; j<charnum; j++ ){


                    var howMuchOfArtmessage = await message.reply({content: "How much of character "+ (j+1) + " did you draw?" , components: [howMuchOfArtRow]})
                    const filter2 = m => m.member.id == interaction.member.id;

                    var collectorhowmuchart = howMuchOfArtmessage.createMessageComponentCollector({ filter2, componentType: 'SELECT_MENU', max:1, time: 180000 });

                    collectorhowmuchart.on('collect', async i => {

                            const {customId, values, member} = i
                           for (const id of values){

                                if(id == "Headshot"){
                                    calculationWithHHBFB += 1;
                                } else if(id == "Half Body"){
                                    calculationWithHHBFB += 1.5;
                                } else if(id == "Full Body"){
                                    calculationWithHHBFB += 2;
                                }

                                await i.update({content: "Selected " + id, components: []})
                            }

                    })

                    await new Promise(resolve => collectorhowmuchart.once('collect', async (message) => {
                                            resolve(message);
                                  }))

                                  message.channel.send(calculationWithHHBFB + " multiplier");


                    }

                        calc = calc * calculationWithHHBFB;
                        message.channel.send(calc + " Points");




                    const bgRow = new MessageActionRow()
          			.addComponents(
          				new MessageSelectMenu()
          					.setCustomId('bgRow')
          					.setPlaceholder('Is there a background?')
          					.addOptions([
                                {
          							label: 'No Background',
          							description: '+0 points',
          							value: 'No Background',
          						},
          						{
          							label: 'Abstract Background',
          							description: '+10 points',
          							value: 'Abstract Background',
          						},
          						{
          							label: 'Simple Background',
          							description: '+20 points',
          							value: 'Simple Background',
          						},
                                {
                                    label: 'Complex Background',
                                    description: '+30 points',
                                    value: 'Complex Background',
                                },
          					]),
          			);

                    var bgmessage = await message.channel.send({content: "Is there a background?" , components: [bgRow]})
                    const filter3 = m => m.member.id == interaction.member.id;

                    var collectorbg = bgmessage.createMessageComponentCollector({ filter3, componentType: 'SELECT_MENU', max:1, time: 180000 });

                    collectorbg.on('collect', async i => {

                            const {customId, values, member} = i
                           for (const id of values){

                                if(id == "No Background"){
                                    calc += noBG;
                                } else if(id == "Abstract Background"){
                                    calc += abstractBG;
                                } else if(id == "Simple Background"){
                                    calc += simpleBG;
                                } else if(id == "Complex Background"){
                                    calc += complexBG;
                                }

                                await i.update({content: "Selected " + id + "\nPoints: " + calc, components: []})
                            }

                    })

                    await new Promise(resolve => collectorbg.once('collect', async (message) => {
                                            resolve(message);
                                    
                                  }))





                    const animRow = new MessageActionRow()
                                        .addComponents(
          				new MessageSelectMenu()
          					.setCustomId('animRow')
          					.setPlaceholder('Is there any animation?')
          					.addOptions([
                                {
          							label: 'No Animation',
          							description: 'x1 Multiplier',
          							value: 'No Animation',
          						},
          						{
          							label: 'Gif',
          							description: 'x2 Multiplier',
          							value: 'Gif',
          						},
          						{
          							label: 'Animatic',
          							description: 'x4 Multiplier',
          							value: 'Animatic',
          						},
                                {
                                    label: 'Full Animation',
                                    description: 'x6 Multiplier',
                                    value: 'Full Animation',
                                },
          					]),
          			);

                    var animmessage = await message.channel.send({content: "Is there any animation?" , components: [animRow]})
                    const filter4 = m => m.member.id == interaction.member.id;

                    var collectoranim = animmessage.createMessageComponentCollector({ filter4, componentType: 'SELECT_MENU', max:1, time: 180000 });

                    collectoranim.on('collect', async i => {

                            const {customId, values, member} = i
                           for (const id of values){

                                if(id == "No Animation"){
                                    calc *= notAnimated;
                                } else if(id == "Gif"){
                                    calc *= gifMultiplier;
                                } else if(id == "Animatic"){
                                    calc *= animaticMultiplier;
                                } else if(id == "Full Animation"){
                                    calc *= fullAnimationMultiplier;
                                }

                                await i.update({content: "Selected " + id + "\nPoints: " + calc, components: []})
                            }

                    })

                    await new Promise(resolve => collectoranim.once('collect', async (message) => {
                                            resolve(message);
                                    
                                  }))


                    await mongo().then(async (mongoose) => {
                   try{
                     await artServerPointsSchema.findOneAndUpdate({
                       userId: message.member.id,
                     },{
                       $inc: {
                         totalScore: calc,
                       },
                     }, {
                       upsert: true,
                     }) // findOne
                   }finally {
                     mongoose.connection.close()
                   } // finally
                 }) // await mongo*/

                 message.channel.send("Gave you " + calc + " points");



                        






                    

                    } // charnum is anumber
                    else{
                        message.reply("I don't think that's a number");
                    }




                        

                        })




        }









  }) // end addPoints

















  }
