exports.commands = {
        'salandit':function(arg,by,room)
    {
        var a=arg.toLowerCase();//var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
        var text = "";
        if(a==="")
        {
            text+="Salandit Commands: Rules | Shop";
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
            'roomintro':function(arg,by,room)
    {
        var a=arg.toLowerCase();//var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
        var text = "";
        if(a==="")
        {
            text+="Roomintros Saved: Edge | universe7";
        }
        else if(a==="edge")
        {
            text+='!htmlbox <div style="background-image:url(http://static.giantbomb.com/uploads/original/1/14898/1422853-flareon_by_rainns.jpg);color:black"><center><font size="3" color="#003d76">Welcome to Edges Room</font><br><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif" width="96" height="96"><br><font size="3" color="#003d76">The dankest room ever</font><br><button class="astext" name="parseCommand" value="/user Digital Edge" style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>Digital Edge</b></font></button><button class="astext" name="parseCommand" value="/user Lost Cause 146" style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>Lost Cause</b></font><br><a href="https://docs.google.com/spreadsheets/d/1H5WZaddZSmKoFXyQh4weNecAGQ7iLSbxEAnvaO5mJnI/edit?pref=2&pli=1#gid=0"><button style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>NBA-S1</b></font></button></a></button></center></div>';
        }
        else if(a==="lost")
        {
            text+='/roomintro <div style="background-image:url(http://ancientexplorers.com/wp-content/uploads/sites/6/2015/12/sparkling-blue-universe_131922.jpg);color:black"><center><font size="3" color="#e300ff">Welcome to Universe 7</font><br><img src="http://pldh.net/media/pokemon/gen5/blackwhite/491.png" width="96" height="96"><br><button class="astext" name="parseCommand" value="/user Lost Cause 146" style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Lost Cause</b></font></button><button class="astext" name="parseCommand" value="/user Digital Edge" style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Digital Edge</b></font></button><a href="https://docs.google.com/spreadsheets/d/1Vao7FI_evygcu2DmUlA-jQMrGDfNoO1ckZcJQ6lkFeQ/edit?usp=sharing"><button style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Rules!</b></font></button></a><a href="https://docs.google.com/spreadsheets/d/1XUPSEpG3yUuRgSWqlEbzp_Z0lSmnM9wGgAfG6c4CXgo/edit#gid=0"><button style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Customs!</b></font></button></a><a href="http://replay.pokemonshowdown.com/ubers-402768950"><button style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Flareon!</b></font></button></a></center></div>';
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
