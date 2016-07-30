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
		kys:'kys',
	kys: function() {
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
			this.restrictReply('!showimage http://orig10.deviantart.net/9d0a/f/2012/326/e/b/flareon_pokeball_by_samxwow-d5ltn8j.png, 1000, 900')
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
        	this.restrictReply('!htmlbox <div class="broadcast-red"</div><div style="background-image:url(http://imgur.com/vga5VB4.png);position:center;color:black"><center><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"></center><center><p style="font-size:60px;color:skyblue;text-shadow:2px 2px 2px #000"><b>Edge</b></p><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"><img src="http://forest-tbs41195.c9users.io/avatars/digitaledge.gif" width="50" height="50"></center></div>')
        },

		whereisedge:'whereisedge',
		whereisedge: function() {
			this.restrictReply('!htmlbox <p style="font-size:30x;color:skyblue;text-shadow:2px 2px 2px #000"><i><b>Edge is currently online.</b></i></p>')
		}
	// dont worry http://hastebin.com/ciqoriyico.sm
	};