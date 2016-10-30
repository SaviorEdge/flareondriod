/*
	Edge Commands
*/
exports.commands = {
		boney: 'boney',
	boney: function () {
		this.restrictReply('!showimage http://i.imgur.com/MqHnW4m.png, 300, 300');
	},

		potato: 'potato',
		potato: 'danktrump',
		potato: 'potatotrump',
	potato: function () {
		this.restrictReply('!showimage http://img.ifcdn.com/images/4582a38f7b50e3c38e59dbb393097fd78b30e3c8a8d4dc7938e6c12b2139245c_1.jpg, 250, 300');
	},

		eevee:'edgeavatar',
		edgeavatar:'edgeavatar',
	eevee: function () {
		this.restrictReply('!showimage http://imgur.com/fylE14s.gif, 80, 80')
	},

		beerus:'beerus',
	beerus: function () {
		this.restrictReply('!htmlbox <font size="10" color="skyblue"> ( ᚖ 人 ᚖ ) </font>')
	},

		darkeevee:'darkeevee',
	darkeevee: function() {
		this.restrictReply('!showimage http://orig04.deviantart.net/d2b3/f/2012/092/1/8/darkrai_eevee_sprite_by_sandy19801-d4urc18.png, 300, 300')
	},
		die: function (arg) {
		if (!arg) return;
		if (!this.can('say')) return;
		this.restrictReply('/me pulls out a gun'),
		this.reply('/me 360 no-scopes ' + Tools.stripCommands(arg)),
		this.restrictReply('gg mate')
	},
		tpoll:'tpoll',
	tpoll: function() {
		this.restrictReply('/poll create Type Of Tournament, Tier (AG  Ubers  OU  ect), Random (RandomBattles  BattleFactory cc1v1 ect)')
		this.restrictReply('/poll timer 2')
	},
		tier:'tier',
	tier: function() {
		this.restrictReply('/poll create Tier Of Tournament, Ubers, OU, UU, RU, NU, PU, Monotype'),
		this.restrictReply('/poll timer 2')
	},
		random:'random',
	random:function() {
		this.restrictReply('/poll create Tier Of Tournament, Random Battle, Battle Factory, cc1v1, Hackmons Cup, Gen1 Random Battle')
		this.restrictReply('/poll timer 2')
	},

		danktrump:'danktrump',
	danktrump: function() {
		this.restrictReply('!showimage http://i0.kym-cdn.com/photos/images/original/001/102/474/a6c.jpeg, 300, 300')
	},
		pawwz:'pawwz',
	pawwz: function() {
		this.restrictReply('/me abuses Pawwz'),
		this.restrictReply('**Pawwz raged quit.**')
	},
		db:'db',
	db: function() {
		this.restrictReply('/me uses sacred fire Lord Beerus 35'),
		this.restrictReply('**Lord Beerus 35 was burnt to death!**'),
		this.restrictReply('gg mate. u thought u was god hahahahahaha')
	},
		eggsandlegs:'eal',
	eggsandlegs: function () {
		this.restrictReply('**Legs so hot**'),
		this.restrictReply('**You can fry an egg**'),
		this.restrictReply('!showimage https://cdn.drawception.com/images/panels/2015/12-31/OfXGk4ADDy-3.png, 300, 250')
	},

		pikachu:'pikachu',
	pikachu: function() {
		this.restrictReply('!showimage https://i.ytimg.com/vi/Wa4l0wtO-WY/maxresdefault.jpg, 300, 250')
	},
		5:'pikachu',
	5: function() {
		this.restrictReply('!showimage http://imgur.com/o3bjhZ1.png, 447, 25')
	},
		cena:'cena',
	cena: function() {
		this.restrictReply('!htmlbox <img src="http://cdn.makeagif.com/media/9-29-2015/ehBR19.gif" width="300" height="300">')
	},
		dance:'dance',
	dance: function() {
		this.restrictReply('/me dances'),
		this.restrictReply('**How did you like my dancing?**'),
		this.restrictReply('**Because I r8\'d it 8/8 m8**'),
		this.restrictReply(':3')
	},
			punish: function (arg) {
		if (!this.isRanked('voice')) return false;
		if (!arg) return;
		if (!this.can('say')) return;
		this.reply('/warn ' + Tools.stripCommands(arg) + ', warning4u'),
		this.reply('/mute ' + Tools.stripCommands(arg) + ', mute also 4 u'),
		this.reply('/hm ' + Tools.stripCommands(arg) + ', and hour mute!'),
		this.reply('/unmute '+ Tools.stripCommands(arg))
	},
			diancie:'diancie',
			diancie: function () {
			this.restrictReply('!showimage https://67.media.tumblr.com/0970a9844ef76d80ff2bb283ec717faf/tumblr_nf5nqhMvyV1t1n4q8o2_r2_500.gif, 300, 300')
	},
			whoami:'whoami',
		whoami: function() {
			this.restrictReply('!htmlbox <font size="5" color="red"> i am a bot made by,</font> <font size="6" color="skyblue"> Digital Edge</font>')
	},
			flareon:'flareon',
		flareon: function() {
			this.restrictReply('!showimage http://orig10.deviantart.net/9d0a/f/2012/326/e/b/flareon_pokeball_by_samxwow-d5ltn8j.png, 300, 250')
	},
			sans:'sans',
		sans: function() {
			this.restrictReply('!showimage http://i.imgur.com/ai4twyK.png, 201, 395'),
			this.restrictReply('__**Oh yes**__')
		},
		    god:'god',
		 god: function() {
		     this.restrictReply('!showimage http://i.imgur.com/WDxMf.jpg, 437, 369')
		 },
		    boof:'boof',
		 boof: function() {
		     this.restrictReply('!showimage http://cdn.bulbagarden.net/upload/thumb/f/f5/399Bidoof.png/250px-399Bidoof.png, 250, 250')
		 },
            lopunny:'lopunny',
        lopunny: function() {
            this.restrictReply('!showimage http://vignette3.wikia.nocookie.net/pokemon/images/a/a1/MD2_Lopunny_art.png/revision/latest?cb=20140809040754, 200, 200')
        },
        	edge:'edge',
        edge: function() {
        	this.restrictReply('!htmlbox <div class="broadcast-red"</div><div style="background-image:url(http://imgur.com/vga5VB4.png);position:center;color:black"><center><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"></center><center><p style="font-size:60px;color:skyblue;text-shadow:2px 2px 2px #000"><b>Edge</b></p><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"><img src="http://imgur.com/C1rzoy1.gif" width="50" height="50"></center></div>')
        },

	9: function() {
		this.restrictReply('!htmlbox <h5>1051541451431641621571721571511441234567881234567812345678123678326470547<br>2999999259923478990124999995689902993413269916749953349999914649932724997<br>2994567809912568990139956799809929936781467998299634699818991169966144990<br>2999994569970124995699801323459999012615302799995324993243699019923412993<br>2994567801993569980299356780239999456725634569974326992644399243992369936<br>2994567801992689901239967899029939945745315319931253399436998011992349950<br>2998012345299999388352999991039953991232012479934673289999982640499999415<br><br></h5>Step1: Highlight the numbers<br>Step2: Ctrl and F<br>Step3: Put 9 in<br>Step4: Enjoy﻿')
	},
	rp: function (arg) {
		if (!arg) return;
		if (!this.can('say')) return;
		this.reply('!randpoke ' + Tools.stripCommands(arg))
	},
	ripsyoureyes: function() {
		this.restrictReply('!htmlbox <img src="http://i.imgur.com/WPeazU8.gif" width="800" height="800">')
	},
	summon: function (arg) {
		if (!arg) return;
		if (!this.can('say')) return;
		this.reply('/a |j| ' + Tools.stripCommands(arg))
	},
	leave: function (arg) {
		if (!arg) return;
		if (!this.can('say')) return;
		this.reply('/a |l| ' + Tools.stripCommands(arg))
	},
	hey: 'hi',
	hi: function (arg) {
		if (!arg) return;
		if (!this.can('say')) return;
		this.reply('hey ' + Tools.stripCommands(arg) + '!')
		this.reply('how are you doing ' + Tools.stripCommands(arg) + '?')
		this.reply('u better be doing good ' + Tools.stripCommands(arg))
		this.reply('pls respond quicker ' + Tools.stripCommands(arg))
		this.reply(Tools.stripCommands(arg) + ' ' + Tools.stripCommands(arg) + Tools.stripCommands(arg) + ' ' + Tools.stripCommands(arg) + Tools.stripCommands(arg) + ' ' + Tools.stripCommands(arg) + Tools.stripCommands(arg) + ' ' + Tools.stripCommands(arg) + Tools.stripCommands(arg) + ' ' + Tools.stripCommands(arg) + Tools.stripCommands(arg) + ' ' + Tools.stripCommands(arg) + Tools.stripCommands(arg) + ' ' + Tools.stripCommands(arg) + Tools.stripCommands(arg) + ' ' + Tools.stripCommands(arg) + Tools.stripCommands(arg) + ' ' + Tools.stripCommands(arg) + Tools.stripCommands(arg) + ' ' + Tools.stripCommands(arg))
		this.reply(Tools.stripCommands(arg) + ' u made me sad ;(')
	},
	jump: function () {
		this.restrictReply('!showimage http://imgur.com/pxTJDj4.png, 300, 275')
	},
	btahb: function () {
		this.restrictReply('!showimage http://i.imgur.com/Dz5dgJj.jpg, 300, 220')
	},
	uranium: function () {
		this.restrictReply('Pokemon Uranium Download: https://drive.google.com/drive/folders/0B0TiKxLInJ2iMFl5VGhGaDI3bjQ')
	},
	dank: function () {
		this.restrictReply('!showimage http://i.imgur.com/4I3f8Cs.jpg, 300, 260')
	},
	dankharambe: function () {
		this.restrictReply('!showimage http://i.imgur.com/BieQzvS.jpg, 450, 500')
	},
	numel: function () {
		this.restrictReply('!showimage http://i.imgur.com/Zx8ri4d.jpg, 525, 432')
	},
	vapenation: function () {
		this.restrictReply('!showimage http://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/12934848_1673875246212684_1549603743_n.jpg?ig_cache_key=MTIyNzYxNDUzMTM4OTkzMzA3OA%3D%3D.2, 400, 450')
	},
	green: function () {
		this.restrictReply('!showimage http://imgur.com/z7Trnx6.png, 500, 300')
	},
	windows: function () {
		this.restrictReply('!showimage http://i.imgur.com/PAZIr0Z.png, 303, 131')
	},
	dancing: function () {
		this.restrictReply('!showimage https://66.media.tumblr.com/c38e5b80d1d0143f8b6f5173712918f9/tumblr_nza09bbdHf1tgtl2ao1_400.gif, 300, 300')
	},
	youareanidiot: function () {
		this.restrictReply('!showimage http://stream1.gifsoup.com/view1/2376523/you-are-an-idiot-o.gif, 300, 300')
	},
	face: function () {
		this.restrictReply('!showimage http://i.imgur.com/nu5c8bI.jpg, 500, 160')
	},
	7: function () {
		this.restrictReply('!showimage http://i.imgur.com/jPcihNt.png, 228, 26')
	},
	cell: function () {
		this.restrictReply('!showimage http://65.media.tumblr.com/9b9a06a39ab88a13d19a20e0b4509c03/tumblr_nzfe93ycX21uh8f6yo1_1280.jpg, 500, 400')
	},
	666: function () {
		this.restrictReply('!showimage http://i.imgur.com/9514Fk0.png,210, 218')
	},
	bucks: function () {
		this.restrictReply('!showimage https://cdn.meme.am/instances/500x/70966435.jpg, 400, 400')
	},
	tem: 'temmie',
     	temmie: function () {
        	this.restrictReply('!htmlbox ░░░░░░░░░░▄▄░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░██▀█▄░░▄██▀░░░░▄██▄░░░░░░░░░░░<br>░░░░░░░░██▄▄▄████████▄▄█▀░▀█░░░░░░░░░░░<br>░░░░░░░▄██████████████████▄█░░░░░░░░░░░<br>░░░░░░▄██████████████████████░░░░░░░░░░<br>░░░░░▄████████▀░▀█████████████░░░░░░░░░<br>░░░░░███████▀░░░░▀████████████▄░░░░░░░░<br>░░░░██████▀░░░░░░░░▀███████████▄▄▄▀▀▄░░<br>░▄▀▀████▀░░░▄▄░░░░░░░░░████████░░░░░█░░<br>█░░░▀█▀█░░░░▀▀░░░░░░██░░███░██▀░░░░▄▀░░<br>█░░░░▀██▄░░░▄░░░▀░░░▄░░░███░██▄▄▄▀▀░░░░<br>░▀▄▄▄▄███▄░░▀▄▄▄▀▄▄▄▀░░░███░█░░░░░░░░░░<br>░░░░░░████▄░░░░░░░░░░░░▄██░█░░░░░░░░▄▀▀<br>░░░░░░███▀▀█▀▄▄▄▄▄▄▄▄▄▀█████░░░░░░▄▀░░▄<br>░░░░░░█▀░░█░▀▄▄▄▄▄▄▄▄▄▀░███░█▀▀▀▄▀░░▄▀░<br>░░░░░░░░░▄▀░░░░░░░░░░░░░▀█▀░░█░░░░█▀░░░<br>░░░░░░░░░█░░░█░░░░░░░░░░░░░░░█░░░░░█░░░<br>░░░░░░░░░█▄▄█░▀▄░░█▄░░░░░░░░█░░▄█░░█░░░<br>░░░░░░░░░▀▄▄▀░░█▀▀█░▀▀▀▀█▀▀█▀▀▀▀█░█░░░░')
     	},
	choose: 'pick',
	pick: function (arg) {
		var choices = arg.split(",");
		choices = choices.filter(function (i) {return (toId(i) !== '');});
		if (choices.length < 2) return this.pmReply(this.trad('err'));
		var choice = choices[Math.floor(Math.random() * choices.length)];
		this.restrictReply('I like **' + Tools.stripCommands(choice) + '** more.', 'pick');
	},
	away: 'afk',
    gone: 'afk',
    afk: function (arg, by) {
        if (!arg) return;
		if (!this.can('say')) return;
        this.reply('**' + by + '** is now __afk__ because ' + '**' + Tools.stripCommands(arg) + '**')
    },
    back: function (user, by) {
        this.reply('**' + by + '** is now __back__!')
    },
    spheal: function () {
        this.restrictReply('!showimage http://media.tumblr.com/tumblr_mcxlz8IW0u1rnaa1i.jpg, 300, 300')
    },
    bnow: 'bnowlin1999',
    bnowlin: 'bnowlin1999',
    bnowlin1999: function () {
        this.restrictReply('!showimage https://thumbs.dreamstime.com/z/little-boy-screaming-22367908.jpg, 300, 400')
    },
    calm: function () {
        this.restrictReply('!showimage https://cdn.meme.am/instances/500x/54562070.jpg, 400, 400')
    },
    poliswag: function() {
		this.reply('!showimage http://image.blingee.com/images19/content/output/000/000/000/7da/816733212_1351938.gif, 300, 300')
    },
    chill: function() {
		this.reply('!showimage https://s-media-cache-ak0.pinimg.com/564x/d7/c2/37/d7c2373c84b2312f25eed56239409a40.jpg, 300, 300')
    },
    ded: function(arg, by, room) {
	 this.reply('/rb ' + arg + ', ded af')
	 this.reply('/roomunban ' + arg)
	 this.reply('/invite ' + arg)
   },
	overcomb: function() {
		this.reply('!htmlbox  <img src=https://img.ifcdn.com/images/a5c06858a012df0398b21cbb3caac5920b7d84c696ea4c4fb38d073087d0de08_1.jpg width=250 height=350/>');
   },
	harambeharrison: function() {
		this.reply('!htmlbox <img src=http://i1.kym-cdn.com/photos/images/original/001/160/017/9fe.jpg width=300 height=400>');
   },
	squiddab: function() {
   		this.reply('!htmlbox <img src=http://i.imgur.com/NKo9LhU.gif width=300 height=300>')
   },
	greendance: function() {
   		this.reply('!htmlbox <img src=http://i.imgur.com/7N40Dx8.gif width=300 height=300>');
   },
	bravo: function() {
		this.reply('!htmlbox <img src=http://i.imgur.com/9MZQW.gif width=450 height=300>');
   },
	chickenfame: function() {
		this.reply('!htmlbox <img src=http://i.imgur.com/roZjpC5.gif width=450 height=300>');
   },
	dog: function() {
		this.reply('!htmlbox ░▄▀▄▀▀▀▀▄▀▄░░░░░░░░░<br>░█░░░░░░░░▀▄░░░░░░▄░<br>█░░▀░░▀░░░░░▀▄▄░░█░█<br>█░▄░█▀░▄░░░░░░░▀▀░░█<br>█░░▀▀▀▀░░░░░░░░░░░░█<br>█░░░░░░░░░░░░░░░░░░█<br>█░░░░░░░░░░░░░░░░░░█<br>░█▄░░▄▄▄▄░░▄▄░░█░<br>░█░▄▀▀░░█░▄▀█░▄▀░<br>░░▀░░░▀░░░░░▀░░░▀░░░<br>');
   },
	smile: function() {
		this.reply('!htmlbox ▒▒▒▒▒▒▒▒▒▒▒▒<br>▒▒▒▒▓▒▒▓▒▒▒▒<br>▒▒▒▒▓▒▒▓▒▒▒▒<br>▒▒▒▒▒▒▒▒▒▒▒▒<br>▒▓▒▒▒▒▒▒▒▓▒▒<br>▒▓▓▓▓▓▓▓▓▓▒▒<br>▒▒▒▒▒▒▒▒▒▒▒▒')
   },
};
/*
// dont worry http://hastebin.com/ciqoriyico.sm
Why do I still have this here? lol
Also I looked up harambe text art, got this instead. Enjoy!
_______ad88888888888888888888888a,
________a88888"8888888888888888888888,
______,8888"__"P88888888888888888888b,
______d88_________`""P88888888888888888,
_____,8888b_______________""88888888888888,
_____d8P'''__,aa,______________""888888888b
_____888bbdd888888ba,__,I_________"88888888,
_____8888888888888888ba8"_________,88888888b
____,888888888888888888b,________,8888888888
____(88888888888888888888,______,88888888888,
____d888888888888888888888,____,8___"8888888b
____88888888888888888888888__.;8'"""__(888888
____8888888888888I"8888888P_,8"_,aaa,__888888
____888888888888I:8888888"_,8"__`b8d'__(88888
____(8888888888I'888888P'_,8)__________88888
_____88888888I"__8888P'__,8")__________88888
_____8888888I'___888"___,8"_(._.)_______88888
_____(8888I"_____"88,__,8"_____________,8888P
______888I'_______"P8_,8"_____________,88888)
_____(88I'__________",8"__M""""""M___,888888'
____,8I"____________,8(____"aaaa"___,8888888
___,8I'____________,888a___________,8888888)
__,8I'____________,888888,_______,888888888
_,8I'____________,8888888'`-===-'888888888'
,8I'____________,8888888"________88888888"
8I'____________,8"____88_________"888888P
8I____________,8'_____88__________`P888"
8I___________,8I______88____________"8ba,.
(8,_________,8P'______88______________88""8bma,.
_8I________,8P'_______88,______________"8b___""P8ma,
_(8,______,8d"________`88,_______________"8b_____`"8a
__8I_____,8dP_________,8X8,________________"8b.____:8b
__(8____,8dP'__,I____,8XXX8,________________`88,____8)
___8,___8dP'__,I____,8XxxxX8,_____I,_________8X8,__,8
___8I___8P'__,I____,8XxxxxxX8,_____I,________`8X88,I8
___I8,__"___,I____,8XxxxxxxxX8b,____I,________8XXX88I,
___`8I______I'__,8XxxxxxxxxxxxXX8____I________8XXxxXX8,
____8I_____(8__,8XxxxxxxxxxxxxxxX8___I________8XxxxxxXX8,
___,8I_____I[_,8XxxxxxxxxxxxxxxxxX8__8________8XxxxxxxxX8,
___d8I,____I[_8XxxxxxxxxxxxxxxxxxX8b_8_______(8XxxxxxxxxX8,
___888I____`8,8XxxxxxxxxxxxxxxxxxxX8_8,_____,8XxxxxxxxxxxX8
___8888,____"88XxxxxxxxxxxxxxxxxxxX8)8I____.8XxxxxxxxxxxxX8
__,8888I_____88XxxxxxxxxxxxxxxxxxxX8_`8,__,8XxxxxxxxxxxxX8"
__d88888_____`8XXxxxxxxxxxxxxxxxxX8'__`8,,8XxxxxxxxxxxxX8"
__888888I_____`8XXxxxxxxxxxxxxxxX8'____"88XxxxxxxxxxxxX8"
__88888888bbaaaa88XXxxxxxxxxxxXX8)______)8XXxxxxxxxxXX8"
__8888888I,_``""""""8888888888888888aaaaa8888XxxxxXX8"
__(8888888I,______________________.__```"""""88888P"
___88888888I,___________________,8I___8,_______I8"
____"""88888I,________________,8I'____"I8,____;8"
___________`8I,_____________,8I'_______`I8,___8)
____________`8I,___________,8I'__________I8__:8'
_____________`8I,_________,8I'___________I8__:8
______________`8I_______,8I'_____________`8__(8
_______________8I_____,8I'________________8__(8;
_______________8I____,8"__________________I___88,
______________.8I___,8'_______________________8"8,
______________(PI___'8_______________________,8,`8,
_____________.88'____________,@@___________.a8X8,`8,
_____________(88_____________@@@_________,a8XX888,`8,
____________(888_____________@@'_______,d8XX8"__"b_`8,
___________.8888,_____________________a8XXX8"____"a_`8,
__________.888X88___________________,d8XX8I"______9,_`8,
_________.88:8XX8,_________________a8XxX8I'_______`8__`8,
________.88'_8XxX8a_____________,ad8XxX8I'________,8___`8,
________d8'__8XxxxX8ba,______,ad8XxxX8I"__________8__,__`8,
_______(8I___8XxxxxxX888888888XxxxX8I"____________8__II__`8
_______8I'___"8XxxxxxxxxxxxxxxxxxX8I'____________(8__8)___8;
______(8I_____8XxxxxxxxxxxxxxxxxX8"______________(8__8)___8I
______8P'_____(8XxxxxxxxxxxxxxX8I'________________8,_(8___:8
_____(8'_______8XxxxxxxxxxxxxxX8'_________________`8,_8____8
_____8I________`8XxxxxxxxxxxxX8'___________________`8,8___;8
_____8'_________`8XxxxxxxxxxX8'_____________________`8I__,8'
_____8___________`8XxxxxxxxX8'_______________________8'_,8'
_____8____________`8XxxxxxX8'________________________8_,8'
_____8_____________`8XxxxX8'________________________d'_8'
_____8______________`8XxxX8_________________________8_8'
_____8________________"8X8'_________________________"8"
_____8,________________`88___________________________8
_____8I________________,8'__________________________d)
_____`8,_______________d8__________________________,8
______(b_______________8'_________________________,8'
_______8,_____________dP_________________________,8'
_______(b_____________8'________________________,8'
________8,___________d8________________________,8'
________(b___________8'_______________________,8'
_________8,_________a8_______________________,8'
_________(b_________8'______________________,8'
__________8,_______,8______________________,8'
__________(b_______8'_____________________,8'
___________8,_____,8_____________________,8'
___________(b_____8'____________________,8'
____________8,___d8____________________,8'
____________(b__,8'___________________,8'
_____________8,,I8___________________,8'
_____________I8I8'__________________,8'
_____________`I8I__________________,8'
______________I8'_________________,8'
______________"8_________________,8'
______________(8________________,8'
______________8I_______________,8'
______________(b,___8,________,8)
______________`8I___"88______,8i8,
_______________(b,__________,8"8")
_______________`8I__,8______8)_8_8
________________8I__8I______"__8_8
________________(b__8I_________8_8
________________`8__(8,________b_8,
_________________8___8)________"b"8,
_________________8___8(_________"b"8
_________________8___"I__________"b8,
_________________8________________`8)
_________________8_________________I8
_________________8_________________(8
_________________8,_________________8,
_________________Ib_________________8)
_________________(8_________________I8
__________________8_________________I8
__________________8_________________I8
__________________8,________________I8
__________________Ib________________8I
__________________(8_______________(8'
___________________8_______________I8
___________________8,______________8I
___________________Ib_____________(8'
___________________(8_____________I8
___________________`8_____________8I
____________________8____________(8'
____________________8,___________I8
____________________Ib___________8I
____________________(8___________8'
_____________________8,_________(8
_____________________Ib_________I8
_____________________(8_________8I
______________________8,________8'
______________________(b_______(8
_______________________8,______I8
_______________________I8______I8
_______________________(8______I8
________________________8______I8,
________________________8______8_8,
________________________8,_____8_8'
_______________________,I8_____"8"
______________________,8"8,_____8,
_____________________,8'_`8_____`b
____________________,8'___8______8,
___________________,8'____(a_____`b
__________________,8'_____`8______8,
__________________I8/______8______`b,
__________________I8-/_____8_______`8,
__________________(8/-/____8________`8,
___________________8I/-/__,8_________`8
___________________`8I/--,I8________-8)
____________________`8I,,d8I_______-8)
______________________"bdI"8,_____-I8
___________________________`8,___-I8'
____________________________`8,,--I8
_____________________________`Ib,,I8
______________________________`I8I
*/
