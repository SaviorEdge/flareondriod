exports.commands = {
        'salandit':function(arg,by,room)
    {
        var a=arg.toLowerCase();//var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
        var text = "";
        if(a==="")
        {
            text+="Salandit Server Commands: Rules | Shop";
        }
        else if(a==="rules")
        {
            text+="Please follow the **rules:** https://docs.google.com/spreadsheets/d/1JaOKCFy5jFUfHctYw7Rovd2nHXVA56R28CVFcY8fEQQ/edit#gid=0"
        }
        else if(a==="shop")
        {
            text+="Want to spend your hard earn bucks? Go here: https://docs.google.com/spreadsheets/d/1BkNrXhBvFfowE6WNcIbIobNM8Q8Atz7weHjg0V5KeUk/edit?pref=2&pli=1#gid=0";
        }

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
