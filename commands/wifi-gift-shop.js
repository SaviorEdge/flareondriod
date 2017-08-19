const quotesDataFile = AppOptions.data + 'wifigiftshop.json';
const jokesDataFile = AppOptions.data + 'jokes.json';

var quotesFFM = new Settings.FlatFileManager(quotesDataFile);
var jokesFFM = new Settings.FlatFileManager(jokesDataFile);

var quotes = {};
var jokes = {};

try {
	quotes = quotesFFM.readObj();
} catch (e) {
	errlog(e.stack);
	error("Could not import quotes: " + sys.inspect(e));
}

try {
	jokes = jokesFFM.readObj();
} catch (e) {
	errlog(e.stack);
	error("Could not import jokes: " + sys.inspect(e));
}

var saveQuotes = function () {
	quotesFFM.writeObj(quotes);
};

var saveJokes = function () {
	jokesFFM.writeObj(jokes);
};

var rand = function (obj) {
	var keys = Object.keys(obj);
	if (!keys.length) return null;
	return obj[keys[Math.floor(Math.random() * keys.length)]];
};

Settings.addPermissions(['quote', 'joke']);

exports.commands = {
	/*
	* Quotes
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
			if (quotes[id] && cmd !== "set") return this.reply(this.trad('quote') + ' "' + id + '" ' + this.trad('already'));
			var text;
			if (quotes[id]) {
				text = this.trad('quote') + ' "' + id + '" ' + this.trad('modified');
			} else {
				text = this.trad('quote') + ' "' + id + '" ' + this.trad('created');
			}
			quotes[id] = content;
			saveQuotes();
			this.sclog();
			this.reply(text);
		} else if (cmd === "delcon") {
			if (!this.isRanked('admin')) return false;
			var id = toId(arg);
			if (!id) return this.reply('Please use a valid acceptant.');
			if (!quotes[id]) return this.reply(this.trad('quote') + ' "' + id + '" ' + this.trad('n'));
			delete quotes[id];
			saveQuotes();
			this.sclog();
			this.reply(this.trad('quote') + ' "' + id + '" ' + this.trad('d'));
		} else if (cmd === "alsoignorethiscauseitsimportantmate") {
			var id = toId(arg);
			if (!id) return this.reply(this.trad('noid'));
			if (!quotes[id]) return this.restrictReply(this.trad('quote') + ' "' + id + '" ' + this.trad('n'), 'quote');
			return this.restrictReply(Tools.stripCommands(quotes[id]), "quote");
		} else {
			return this.restrictReply("Commands are: confirmed (add service) | delcon (delete service) | confirmations (hastebin the services)");
		}
	},
	conlist: 'confirmations',
	confirmations: function (arg, by, room, cmd) {
		if (!this.isRanked('admin')) return false;
		var data = '';
		for (var i in quotes) {
			data += i + ' provided the service of and to ' + quotes[i] + '\n';
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
* Quotes -> Con
* Probably see if it crashes
* Get rid of extra commands without it crashing
*/