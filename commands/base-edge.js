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

		whereisedge:'whereisedge',
	whereisedge: function() {
		this.restrictReply('!htmlbox <p style="font-size:30x;color:skyblue;text-shadow:2px 2px 2px #000"><i><b>Edge is currently online.</b></i></p>')
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
    bnow: 'bnowlin',
    bnowlin1999: function () {
        this.restrictReply('!showimage https://thumbs.dreamstime.com/z/little-boy-screaming-22367908.jpg, 300, 400')
    }
	// dont worry http://hastebin.com/ciqoriyico.sm
	};
