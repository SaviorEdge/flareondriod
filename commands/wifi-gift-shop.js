const wgsDataFile = AppOptions.data + 'wifigiftshop.json';

var wgsFFM = new Settings.FlatFileManager(wgsDataFile);

var wgs = {};

try {
	wgs = wgsFFM.readObj();
} catch (e) {
	errlog(e.stack);
	error("Could not import wgs: " + sys.inspect(e));
}

var saveWGS = function () {
	wgsFFM.writeObj(wgs);
};

var rand = function (obj) {
	var keys = Object.keys(obj);
	if (!keys.length) return null;
	return obj[keys[Math.floor(Math.random() * keys.length)]];
};

Settings.addPermissions(['wgs']);

exports.commands = {
	/*
	* wgs
	*/
	confirmed: 'wgs',
	ignorethiscauseitsimportantmate: 'wgs',
	delcon: 'wgs',
	alsoignorethiscauseitsimportantmate: 'wgs',
	wgs: function (arg, by, room, cmd) {
		if (cmd === "confirmed" || cmd === "ignorethiscauseitsimportantmate") {
			if (!this.isRanked('moderator')) return false;
			var args = arg.split(",");
			if (args.length < 3) return this.reply('Use the format: ``.confirmed acceptant, service, user``');
			var id = toId(args[0]);
			if (!id) return this.reply(this.trad('noid'));
			args.splice(0, 1);
			var content = Tools.stripCommands(args.join(',').trim());
			if (!content) return this.reply(this.trad('u1') + ": " + this.cmdToken + cmd + " " + this.trad('u2'));
			if (wgs[id] && cmd !== "set") return this.reply(this.trad('wgs') + ' "' + id + '" ' + this.trad('already'));
			var text;
			if (wgs[id]) {
				text = this.trad('wgs') + ' "' + id + '" ' + this.trad('modified');
			} else {
				text = this.trad('wgs') + ' "' + id + '" ' + this.trad('created');
			}
			wgs[id] = content;
			saveWGS();
			this.sclog();
			this.reply(text);
		} else if (cmd === "delcon") {
			if (!this.isRanked('admin')) return false;
			var id = toId(arg);
			if (!id) return this.reply('Please use a valid acceptant.');
			if (!wgs[id]) return this.reply(this.trad('wgs') + ' "' + id + '" ' + this.trad('n'));
			delete wgs[id];
			saveWGS();
			this.sclog();
			this.reply(this.trad('wgs') + ' "' + id + '" ' + this.trad('d'));
		} else if (cmd === "alsoignorethiscauseitsimportantmate") {
			var id = toId(arg);
			if (!id) return this.reply(this.trad('noid'));
			if (!wgs[id]) return this.restrictReply(this.trad('wgs') + ' "' + id + '" ' + this.trad('n'), 'wgs');
			return this.restrictReply(Tools.stripCommands(wgs[id]), "wgs");
		} else {
			return this.restrictReply("Commands are: confirmed (add service) | delcon (delete service) | confirmations (hastebin the services)");
		}
	},
	conlist: 'confirmations',
	confirmations: function (arg, by, room, cmd) {
		if (!this.isRanked('admin')) return false;
		var data = '';
		for (var i in wgs) {
			data += i + ' provided the service of and to ' + wgs[i] + '\n';
		}
		if (!data) return this.reply('Sorry ' + by + '...it is all gone');
		Tools.uploadToHastebin('*****WiFi Confirmations*****\n' + data, function (r, link) {
			if (r) return this.pmReply('Here it is ' + by + '! ' + link);
			else this.pmReply(this.trad('err'));
		}.bind(this));
	}
};


/* TODO:
* FIx database names.
* wgs -> Con
* Probably see if it crashes
* Get rid of extra commands without it crashing
*/
