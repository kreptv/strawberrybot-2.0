
const mongo = require('./mongo')
const command = require('./command')
const userSchema = require('./schemas/user-schema')


module.exports = (client) => {

  var testServer = "990165733931638804";
  var mattServer = "733261752241750037";
  var dailyServer = "1163641455244480512";


  var matt = '326066108421373955';
  var froge = '451897645657620482';
  var spook = '730995738091454546';
  var krep = '192453379816030208';
  var ray = '424405011989004288';
  var bean = '423259232935215106';


  command(client, ['pet', 'pat'], async (message) => {
    const {member, channel, content, guild} = message;


    if (guild.id != testServer && guild.id != mattServer && guild.id != dailyServer){
      //channel.send("command can't be used here!")
      return;
    } else {
      //channel.send("command is working as intended!")
    //  return;
    }


    let text = content;

    const split = text.split(' ');
    split.shift() // remove first element from array
    text = split.join(' ')

    if (split[0].toLowerCase() == "tilian" || split[0].toLowerCase() == "til"){

      var prob = (Math.floor(Math.random(1) * (5)));
      var prob2 = (Math.floor(Math.random(1) * (5)));

           if (prob == 0) { // tidelian
             message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1044825422417903677/f06ef127-581f-4223-8fc7-ace9eb896e66.gif')
             if (prob2 == 0) {message.channel.send("Ooh, wow. Okay. We're doing it like that.")}
             else if (prob2 == 1) {message.channel.send("Out of everything in this world... I choose you.")}
             else if (prob2 == 2 && message.author.id == froge){message.channel.send("F-Froge... Can I kiss you?")}
             else if (prob2 == 2) {message.channel.send("I... I guess this is okay.")}
             else if (prob2 == 3) {message.channel.send("Your hand feels... really nice.")}
             else if (prob2 == 4 && message.author.id == froge){message.channel.send("*Tilian's ears perk up at the sight of you, Froge. You're his favorite.*")}
             else if (prob2 == 4) {message.channel.send("I think I like it??")}
           } else if (prob == 1) { // >:// what
             message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1044825422732464178/bc489851-66a2-4b0e-9ac2-18746c33b515.gif')
             if (prob2 == 0) {message.channel.send("Have you washed your hands recently? I just... don't want all of that in my hair, y'know.")}
             else if (prob2 == 1) {message.channel.send("S-slow down a bit...")}
             else if (prob2 == 2) {message.channel.send("You're treating me like a dog!")}
             else if (prob2 == 3 && message.author.id == froge){message.channel.send("So, when are you letting me out of your basement, Froge? >:((")}
             else if (prob2 == 3) {message.channel.send("Feeling a little skeptical on this one.")}
             else if (prob2 == 4 && (message.author.id == matt)){message.channel.send("Wanna see my feet, Matt?")}
             else if (prob2 == 4) {message.channel.send("Don't pat there!! I'm sensitive there.")}
           } else if (prob == 2) { // heavy blushu
             message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1044825423395176458/0ea98465-7540-4b11-a22f-44d67f2e6e55.gif')
             if (prob2 == 0) {message.channel.send("WOW uh?? Yeah keep going.")}
             else if (prob2 == 1) {message.channel.send(":flushed: :flushed: :flushed:")}
             else if (prob2 == 2 && message.author.id == matt){message.channel.send("I need your chemicals, Matt.... :sob:")}
             else if (prob2 == 2) {message.channel.send("Yeah, yeah, okay, yeah, keep going please...")}
             else if (prob2 == 3) {message.channel.send("You feel incredible.")}
             else if (prob2 == 4) {message.channel.send("*Lewd moan*")}
           } else if (prob == 3) { // feels good man
             message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1044825423063822376/6b1554bc-8bca-47ed-ae00-82e53d67f695.gif')
             if (prob2 == 0) {message.channel.send("*blushes*")}
             else if (prob2 == 1) {message.channel.send("Stop teasing me, faster, faster!")}
             else if (prob2 == 2 && message.author.id == froge){message.channel.send("Froge! You should pat my cock next. :wink:")}
             else if (prob2 == 2) {message.channel.send("I like it...  Oh my god, I like it...")}
             else if (prob2 == 3) {message.channel.send("^ Your sugar daddy. :wink:")}
             else if (prob2 == 4) {message.channel.send("I could deepthroat the mic if I wanted. I'm an expert.")}
           } else if (prob == 4) { // pubby :3
             message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1044825423722319953/ea199006-5d5a-44e7-81b9-be3a6110aa30.gif')
             if (prob2 == 0) {message.channel.send("Keep rubbing, kitten.")}
             else if (prob2 == 1) {message.channel.send("Feeling cocky, might delete.")}
             else if (prob2 == 2) {message.channel.send("Grr, baby, very grr.")}
             else if (prob2 == 3) {message.channel.send("I will never let you leave my side...")}
             else if (prob2 == 4 && message.author.id == froge){message.channel.send("Don't forget, I'm downstairs if you need anything. :wink:")}
             else if (prob2 == 4) {message.channel.send("Need some attention, please, honey.")}
           }
  } // tilian
  else if (split[0].toLowerCase() == "jon"){

    var prob = (Math.floor(Math.random(1) * (5)));
    var prob2 = (Math.floor(Math.random(1) * (5)));

         if (prob == 0) { // EXCITEMENT INTENSIFIES
           message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1044825424032706600/52f5abba-3bdf-4ad6-8320-096740765559.gif')
           if (prob2 == 0) {message.channel.send("OH SHIT YEAH")}
           else if (prob2 == 1) {message.channel.send("*actually bites your hand*"); message.channel.send("congrats, you have contracted rabies!")}
           else if (prob2 == 2) {message.channel.send("*extremely overstimulated catboy at your disposal. use as desired.*")}
           else if (prob2 == 3) {message.channel.send("you're making me the happiest man alive right now thank you")}
           else if (prob2 == 4) {message.channel.send("giant sky hand is back!!!!")}
         } else if (prob == 1) { // >:// lookdown
           message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1044825424330506271/bec44fe3-8c0a-4691-bd70-a1000759e50f.gif')
           if (prob2 == 0 && member.id == matt){message.channel.send("fuck, matt, fuuuuuck. fuck that goes so hard.")}
           else if (prob2 == 0) {message.channel.send("i can't believe i'm letting you do this lol")}
           else if (prob2 == 1) {message.channel.send("*thinking about tilian*")}
           else if (prob2 == 2) {message.channel.send("don't stop, though, ok?")}
           else if (prob2 == 3) {message.channel.send("s-scratch around my ears...")}
           else if (prob2 == 4) {message.channel.send("uhhh.... hiiii. :flushed:")}
         } else if (prob == 2) { // red ahhh
           message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1044825424636678174/e14aea9d-abf0-48e3-9ac0-eab5e8dc67bb.gif')
           if (prob2 == 0) {message.channel.send("nnnnnnnn yeah just like that")}
           else if (prob2 == 1) {message.channel.send("you know, i don't think i'd mind if you... stayed a while...")}
           else if (prob2 == 2) {message.channel.send("*he leaned so far into your pat, you're petting his face rather than his head.*")}
           else if (prob2 == 3 && message.author.id == matt){message.channel.send("*is about to start pissing on your feet. watch out, matt. watch out.*")}
           else if (prob2 == 3) {message.channel.send("*thinking about piss*")}
           else if (prob2 == 4) {message.channel.send("you smell really good...")}
         } else if (prob == 3) { // mmm
           message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1044825424926093343/e913f239-4186-4e26-95eb-34840b9f2412.gif')
           if (prob2 == 0) {message.channel.send("the way you're petting down my hair, it's... it's really making me feel something here.")}
           else if (prob2 == 1) {message.channel.send("damn, that's a nice ass hand...")}
           else if (prob2 == 2) {message.channel.send("would you like to go out sometime?")}
           else if (prob2 == 3) {message.channel.send("*he's trying to stay calm and act unamused, but the happy curl of his tail betrays him*")}
           else if (prob2 == 4 && (message.author.id == matt)){message.channel.send("*actively pissing on matt's feet*")
           setTimeout(() => { message.channel.send("*still pissing on matt's feet*");}, "10000");
           setTimeout(() => { message.channel.send("*the stream never ebs, this is getting awkward*");}, "20000");
           setTimeout(() => { message.channel.send("*matt makes eye contact with the cat man pissing on his feet*");}, "20000");
           setTimeout(() => { message.channel.send("*cat man whispers 'hi'. his flow slows to a trickle.*");}, "20000");
           setTimeout(() => { message.channel.send("*matt is soaked. good job matt.*");}, "20000");}
           else if (prob2 == 4) {message.channel.send("i'm so glad you're here...")}
         } else if (prob == 4) { // he likes it rough
           message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1044825425253253222/ff32d857-5b8c-4ec6-88e6-8d5056da553a.gif')
           if (prob2 == 0) {message.channel.send("keep going!!!")}
           else if (prob2 == 1) {message.channel.send("harder!")}
           else if (prob2 == 2) {message.channel.send("better than the worm")}
           else if (prob2 == 3) {message.channel.send("i could *mmmph* sit here and *mmmph* take this,, all day...")}
           else if (prob2 == 4) {message.channel.send("50 ducks")}
         }
} // jon
      
      
    else if (split[0].toLowerCase() == "koda"){
    var prob = (Math.floor(Math.random(1) * (5)));
    var prob2 = (Math.floor(Math.random(1) * (5)));

         if (prob == 0) { // blushu happy
           message.channel.send('https://media.discordapp.net/attachments/459493950676533250/1115736236590641324/bf2e42a3-21b0-4fce-82e4-f8158f454a54.gif')
           if (prob2 == 0) {message.channel.send("y-yeah, you can... you can keep going, if you want to.")}
           else if (prob2 == 1) {message.channel.send("i-i'd like to pat you too!")}
           else if (prob2 == 2) {message.channel.send("wanna just love a little bit? and hug a little bit?")}
           else if (prob2 == 3) {message.channel.send("how about we go minecraft and chill ❤️")}
           else if (prob2 == 4) {message.channel.send("this is amazing, thank you")}
         } else if (prob == 1) { // antlers sadboi
           message.channel.send('https://cdn.discordapp.com/attachments/459493950676533250/1115736236066361405/67ace22d-a8ad-4bb7-878d-f30e6a0c462c.gif')
			if (prob2 == 0) {message.channel.send("do you really still want me?")}
           else if (prob2 == 1) {message.channel.send("i don't feel so alone anymore")}
           else if (prob2 == 2) {message.channel.send("don't stop, ok? please stay with me")}
           else if (prob2 == 3) {message.channel.send("you can... you can touch the antlers... if you want...")}
           else if (prob2 == 4) {message.channel.send("i think... yeah, i think i'm ok with this.")}
         } else if (prob == 2) { // big grin
           message.channel.send('https://cdn.discordapp.com/attachments/459493950676533250/1115736235537870890/2efb2687-ade2-4c90-9ce5-b3c493ea8ca9.gif')
           if (prob2 == 0) {message.channel.send("*excited fox yipping*")}
           else if (prob2 == 1) {message.channel.send("can i hold your hand?")}
           else if (prob2 == 2) {message.channel.send("you make me happy!")}
           else if (prob2 == 3) {message.channel.send("*he's wagging his tail!!*")}
           else if (prob2 == 4) {message.channel.send("i think we'd make a good pair!")}
         } else if (prob == 3) { // frog blushu
           message.channel.send('https://cdn.discordapp.com/attachments/459493950676533250/1115736235021979669/1bbd308c-5483-4630-bc25-43daa6a66824.gif')
           if (prob2 == 0) {message.channel.send("*stuttering and stammering*")}
           else if (prob2 == 1) {message.channel.send("r-right now?? like right now??")}
           else if (prob2 == 2) {message.channel.send("w-w-wait a second, i'm not ready")}
           else if (prob2 == 3 && message.author.id == froge){message.channel.send("fuck, eddie... uhghh...")}
          else if (prob2 == 3 && message.author.id == bean){message.channel.send("*koda leans into the touch from fen's monsterous paw*")}
           else if (prob2 == 3 && message.author.id == matt){message.channel.send("*koda lets out a long, playful moan--* messsssyyyy....")}
       	 else if (prob2 == 3 && message.author.id == ray){message.channel.send("r-r-ray, please...")}
           else if (prob2 == 3) {message.channel.send("i-i can't believe i'm... ughh...")}
           else if (prob2 == 4) {message.channel.send("*you could probably make him cum right now, for the whole server to see, but you decide against it, out of the kindness of your heart. he'll thank you later.*")}
         } else if (prob == 4) { // he likes it rough
           message.channel.send('https://cdn.discordapp.com/attachments/459493950676533250/1115736234464129135/69471556-c57a-4587-ad07-c174a0be09f9.gif')
           if (prob2 == 0) {message.channel.send("k-k-k-keep... pounding... hhhn")}
           else if (prob2 == 1) {message.channel.send("y-you could untie me, you know... i won't run...")}
           else if (prob2 == 2) {message.channel.send("l-let me go... fuuuck...")}
           else if (prob2 == 3 && message.author.id == froge){message.channel.send("y-you're in kahoots with radiel, aren't you, eddie! i fuckin' knew it... i fuckin'knew it...")
		 message.channel.send("w-w-wait, what? no don't stop! i didn't... i didn't mean stop... i can take it...")}
           else if (prob2 == 3) {message.channel.send("l-let me out! please!")}
           else if (prob2 == 4) {message.channel.send("*groaning*")}
         }
} // koda

else if (split[0].toLowerCase() == "sergio" || split[0].toLowerCase() == "serg"){
    var prob = (Math.floor(Math.random(1) * (3)));
    var prob2 = (Math.floor(Math.random(1) * (3)));

         if (prob == 0) { // halloween HMM
           message.channel.send('https://i.imgur.com/JLS70hY.gif')
           if (prob2 == 0) {message.channel.send("*Sergio looks at you, absolutely confuzzled as you dig your hands into his locks.* Um... Not even a hello??")}
           else if (prob2 == 1) {message.channel.send("*You tug on his hair, he smacks your hand away.* No pulling, *he mutters.*")}
           else if (prob2 == 2) {message.channel.send("*You patted his hair ^w^*")}
         } else if (prob == 1) { // yellow mmMM
           message.channel.send('https://i.imgur.com/f7I3XxK.gif')
			if (prob2 == 0) {message.channel.send("*Sergio smiles softly, he thinks this is little weird but he doesn't mind.*")}
           else if (prob2 == 1) {message.channel.send("*Sergio is too focused on playing to notice. You peacefully played with his hair.*")}
           else if (prob2 == 2) {message.channel.send("*You patted his hair ^w^*")}
         } else if (prob == 2) { // happy serg
           message.channel.send('https://i.imgur.com/dOVOIV9.gif')
           if (prob2 == 0) {message.channel.send("*You pat his hair, Sergio gives you a friendly smile*")}
           else if (prob2 == 1) {message.channel.send(":D")}
           else if (prob2 == 2) {message.channel.send(":}")}
         }
} // sergio








  })


}
