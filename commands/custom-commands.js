/*
	Custom Commands
*/
exports.commands = {
        cc:function(arg,by,room)
    {
        var a=arg.toLowerCase();//var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
        var text = "";
        if(a==="")
        {
					this.reply('Please use **list** (must be global bot, roomleader/globalleader, admin, or roomowner to show) __or__ **text** (Gives you a message like this for each command) after the command.')
        }
        else if(a==="list")
        {
					this.reply('!htmlbox <div style="background-color: #000; color: #fff; border: 3px solid #fff; font-family: comicsansms,ubuntu;"><center><font size=5>Custom Commands</font><br><div style="width: 95%"><font size=2>Boney | Potato | Eevee | Beerus | DarkEevee | Die | TPoll (random or tier) | DankTrump | Pawwz | db | eggsandlegs | Cena | Pikachu | Diancie | Flareon | Sans | God | WhoAmI | Dance | Punish | Boof | Lopunny | 9 | summon - leave | hi/hey | jump | btahb | dank | dankharambe | numel | vapenation | green | windows | dancing | youareanidiot | face | 7 | cell | 666 | bucks | temmie | afk - back | spheal | calm | poliswag | chill | ded | overcomb | harambeharrison | squiddab | greendance | bravo | chickenfame | dog | smile | nemo | books | nword | lost | bnow | shady | plan | highnoot | nootfather | nooty | comingtotheaters | duel | faze | fire | annoy | 4</font></div><br></center></div>');
        }
        else if(a==="text")
        {
					this.restrictReply('Custom Commands (1): Boney | Potato | Eevee | Beerus | DarkEevee | Die | TPoll (random | tier) | DankTrump | Pawwz | db | eggsandlegs | Cena | Pikachu | Diancie | Flareon | Sans | God | WhoAmI | Whereisedge | Dance | Punish | Boof | Lopunny | 9 | summon - leave'),
					this.restrictReply('Custom Commands (2): hi/hey | jump | btahb | dank | dankharambe | numel | vapenation | green | windows | dancing | youareanidiot | face | 7 | cell | 666 | bucks | temmie | afk - back | spheal | bnowlin | calm | poliswag | chill | ded | overcomb'),
					this.restrictReply('Custom Commands (3): harambeharrison | squiddab | greendance | bravo | chickenfame | dog | smile | nemo | books | nword | lost | bnow | shady | plan | highnoot | nootfather | nooty | comingtotheaters | duel | faze | fire | annoy | 4');
        }
/* ---Might be used later, links to ghostbin for a list.---
			else if(a==="link")
        {
            this.reply('this shouldn't be able to show up...report to bot maintainer please');
        }
*/
        if(by.charAt(0)=='+' || by.charAt(0)=='%' || by.charAt(0)=='@' || by.charAt(0)=='#' || by.charAt(0)=='&' || by.charAt(0)=='~')
        {
        this.say(room,text);
        }
        else
        {
        this.pmReply (text);
        }

    },
};
/*
//			Old code, reuse if problems occur (there shouldn't lol). New code hasnt been tested yet, so you might want to use this if you don't trust me, which I don't blame you, I don't trust myself.
//
exports.commands = {
	commands: 'cc',
	commandlist: 'cc',
	cmds:'cc',
	cc:function() {
		this.reply('!htmlbox <div style="background-color: #000; color: #fff; border: 3px solid #fff; font-family: comicsansms,ubuntu;"><center><font size=5>Custom Commands</font><br><div style="width: 95%"><font size=2>Boney | Potato | Eevee | Beerus | DarkEevee | Die | TPoll (random or tier) | DankTrump | Pawwz | db | eggsandlegs | Cena | Pikachu | Diancie | Flareon | Sans | God | WhoAmI | Dance | Punish | Boof | Lopunny | 9 | summon - leave | hi/hey | jump | btahb | dank | dankharambe | numel | vapenation | green | windows | dancing | youareanidiot | face | 7 | cell | 666 | bucks | temmie | afk - back | spheal | calm | poliswag | chill | ded | overcomb | harambeharrison | squiddab | greendance | bravo | chickenfame | dog | smile | nemo | books | nword | lost | bnow | shady | plan | highnoot | nootfather | nooty | comingtotheaters | duel | faze | fire | annoy</font></div><br></center></div>');
	},
};
/*
Yes, I've switched from the old text-based code to something more "clean".
Don't like it?
Old code below just for convinence. This will NOT be updated, so you're going to have to do this manually. Unless the one of the servers I use it on doesn't allow bots to use !htmlbox.
	this.restrictReply('Custom Commands (1): Boney | Potato | Eevee | Beerus | DarkEevee | Die | TPoll (random | tier) | DankTrump | Pawwz | db | eggsandlegs | Cena | Pikachu | Diancie | Flareon | Sans | God | WhoAmI | Whereisedge | Dance | Punish | Boof | Lopunny | 9 | summon - leave')
	this.restrictReply('Custom Commands (2): hi/hey | jump | btahb | dank | dankharambe | numel | vapenation | green | windows | dancing | youareanidiot | face | 7 | cell | 666 | bucks | temmie | afk - back | spheal | bnowlin | calm | poliswag | chill | ded | overcomb')
	this.restrictReply('Custom Commands (3): harambeharrison | squiddab | greendance | bravo | chickenfame | dog | smile | nemo | books | nword | lost | bnow | shady | plan | highnoot | nootfather | nooty | comingtotheaters | duel | faze | fire | annoy')
*/




/* also if i get bored and do this in the future:

/htmlbox <div style="background-color: #333 ; color: #ff9933 ; border: 3px solid #ff9933 ; font-family: "comicsansms" , "ubuntu"" class="infobox-limited"><center><h2>Custom Commands</h2><div style="width: 90%"><button style="background-color: #333 ; color: #ff9933 ; border: 2px solid #ff9933 ;">kek</button></div><br></center></div>

*/
