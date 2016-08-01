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
            text+="Roomintros Saved: edgesroom | universe7 | cosmos";
        }
        else if(a==="edgesroom")
        {
            text+='!htmlbox <div style="background-image:url(http://static.giantbomb.com/uploads/original/1/14898/1422853-flareon_by_rainns.jpg);color:black"><center><font size="3" color="#003d76">Welcome to Edges Room</font><br><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif" width="96" height="96"><br><font size="3" color="#003d76">The dankest room ever</font><br><button class="astext" name="parseCommand" value="/user Digital Edge" style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>Digital Edge</b></font></button><button class="astext" name="parseCommand" value="/user Lost Cause 146" style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>Lost Cause</b></font><button class="astext" name="parseCommand" value="/user havingfun98" style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>havingfun98</b></font></button><a href="https://docs.google.com/spreadsheets/d/1H5WZaddZSmKoFXyQh4weNecAGQ7iLSbxEAnvaO5mJnI/edit?pref=2&pli=1#gid=0"><button style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>NBA-S1</b></font></button></a></button></center></div>';
        }
        else if(a==="universe7")
        {
            text+='!htmlbox <div style="background-image:url(http://ancientexplorers.com/wp-content/uploads/sites/6/2015/12/sparkling-blue-universe_131922.jpg);color:black"><center><font size="3" color="#e300ff">Welcome to Universe 7</font><br><img src="http://pldh.net/media/pokemon/gen5/blackwhite/491.png" width="96" height="96"><br><button class="astext" name="parseCommand" value="/user Lost Cause 146" style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Lost Cause</b></font></button><button class="astext" name="parseCommand" value="/user Digital Edge" style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Digital Edge</b></font></button><a href="https://docs.google.com/spreadsheets/d/1Vao7FI_evygcu2DmUlA-jQMrGDfNoO1ckZcJQ6lkFeQ/edit?usp=sharing"><button style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Rules!</b></font></button></a><a href="https://docs.google.com/spreadsheets/d/1XUPSEpG3yUuRgSWqlEbzp_Z0lSmnM9wGgAfG6c4CXgo/edit#gid=0"><button style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Customs!</b></font></button></a><a href="http://replay.pokemonshowdown.com/ubers-402768950"><button style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Flareon!</b></font></button></a></center></div>';
        }
        else if(a==="cosmos")
        {
            text+='!htmlbox <div style="cursor: url='', auto ; background-image: url(&quot;http://feelgrafix.com/data_images/out/28/999893-cosmos.jpg&quot;) ; background-size: cover ; background-position: center"><center><img src="//imgur.com/7YYXJes.png" width="277" height="95" alt="Cosmos" /><marquee direction="left" behavior="scroll" style="padding: 5px ; border: 1px solid #1a1a1a; background-color: rgba(77,77,77 , 0.4) ; color: #6666ff; text-shadow: -1px -1px 0 #000099, 1px -1px 0 #000099, -1px 1px 0 #000099, 1px 1px 0 #000099; margin: 15px"><b><u>Announcement:</u> Welcome to the new Cosmos server! If you would like a avatar, icon, or room PM an Admin or Leader with the image or room name! | Is our CSS not well made in some spots? Report it too Edge's Dev! | VPS Coming Soon (hopefully, atleast)!</b></marquee><br><button style="border: 1px solid #333333; background: #333333; box-shadow: 0px 1px 1px rgba(255, 255 , 255, 0.3) inset ; color: #6666ff; border-radius: 4px ; margin: 1px 6px ; padding: 2px 4px";type="submit" name="send" value="Hey guys!"><b>&nbsp;&nbsp;&nbsp;Say Hi!&nbsp;&nbsp;&nbsp;</b></button><button style="border: 1px solid #333333; background: #333333; box-shadow: 0px 1px 1px rgba(255, 255 , 255, 0.3) inset ; color: #6666ff; border-radius: 4px ; margin: 1px 6px ; padding: 2px 4px";type="submit" name="send" value="/sr"><b>Server Rules</b></button><button style="border: 1px solid #333333; background: #333333; box-shadow: 0px 1px 1px rgba(255, 255 , 255, 0.3) inset ; color: #6666ff; border-radius: 4px ; margin: 1px 6px ; padding: 2px 4px";type="submit" name="send" value="/shop"><b>Server Shop</b></button><button style="border: 1px solid #333333; background: #333333; box-shadow: 0px 1px 1px rgba(255, 255 , 255, 0.3) inset ; color: #6666ff; border-radius: 4px ; margin: 1px 6px ; padding: 2px 4px";type="submit" name="send" value="/stafflist"><b>Server Auth</b></button></center><br></div><div class="broadcast-blue">Free Icons, Rooms, and Avatars! PM A Leader or higher! Want an emote thats not currently on here? PM Savior Edge with the url to the emote and name and he'll set it for you! 80x80 or image resize it. All images not 80x80 will be <b>rejected</b></div>';
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
               'setintro':function(arg,by,room)
    {
        var a=arg.toLowerCase();//var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
        var text = "";
        if(a==="")
        {
            text+="Roomintros Saved: edgesroom | universe7 | cosmos";
        }
        else if(a==="edgesroom")
        {
            text+='/roomintro <div style="background-image:url(http://static.giantbomb.com/uploads/original/1/14898/1422853-flareon_by_rainns.jpg);color:black"><center><font size="3" color="#003d76">Welcome to Edges Room</font><br><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif" width="96" height="96"><br><font size="3" color="#003d76">The dankest room ever</font><br><button class="astext" name="parseCommand" value="/user Digital Edge" style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>Digital Edge</b></font></button><button class="astext" name="parseCommand" value="/user Lost Cause 146" style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>Lost Cause</b></font><button class="astext" name="parseCommand" value="/user havingfun98" style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>havingfun98</b></font></button><a href="https://docs.google.com/spreadsheets/d/1H5WZaddZSmKoFXyQh4weNecAGQ7iLSbxEAnvaO5mJnI/edit?pref=2&pli=1#gid=0"><button style="border-radius: 1px ; background: #F24117; color: white; font-size: 11px"><font face="Comic Sans MS"><b>NBA-S1</b></font></button></a></button></center></div>';
        }
        else if(a==="universe7")
        {
            text+='/roomintro <div style="background-image:url(http://ancientexplorers.com/wp-content/uploads/sites/6/2015/12/sparkling-blue-universe_131922.jpg);color:black"><center><font size="3" color="#e300ff">Welcome to Universe 7</font><br><img src="http://pldh.net/media/pokemon/gen5/blackwhite/491.png" width="96" height="96"><br><button class="astext" name="parseCommand" value="/user Lost Cause 146" style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Lost Cause</b></font></button><button class="astext" name="parseCommand" value="/user Digital Edge" style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Digital Edge</b></font></button><a href="https://docs.google.com/spreadsheets/d/1Vao7FI_evygcu2DmUlA-jQMrGDfNoO1ckZcJQ6lkFeQ/edit?usp=sharing"><button style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Rules!</b></font></button></a><a href="https://docs.google.com/spreadsheets/d/1XUPSEpG3yUuRgSWqlEbzp_Z0lSmnM9wGgAfG6c4CXgo/edit#gid=0"><button style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Customs!</b></font></button></a><a href="http://replay.pokemonshowdown.com/ubers-402768950"><button style="border-radius: 1px ; background: ##b000ff; color: skyblue; font-size: 11px"><font face="Comic Sans MS"><b>Flareon!</b></font></button></a></center></div>';
        }
        else if(a==="cosmos")
        {
            text+='/roomintro <div style="cursor: url='', auto ; background-image: url(&quot;http://feelgrafix.com/data_images/out/28/999893-cosmos.jpg&quot;) ; background-size: cover ; background-position: center"><center><img src="//imgur.com/7YYXJes.png" width="277" height="95" alt="Cosmos" /><marquee direction="left" behavior="scroll" style="padding: 5px ; border: 1px solid #1a1a1a; background-color: rgba(77,77,77 , 0.4) ; color: #6666ff; text-shadow: -1px -1px 0 #000099, 1px -1px 0 #000099, -1px 1px 0 #000099, 1px 1px 0 #000099; margin: 15px"><b><u>Announcement:</u> Welcome to the new Cosmos server! If you would like a avatar, icon, or room PM an Admin or Leader with the image or room name! | Is our CSS not well made in some spots? Report it too Edge's Dev! | VPS Coming Soon (hopefully, atleast)!</b></marquee><br><button style="border: 1px solid #333333; background: #333333; box-shadow: 0px 1px 1px rgba(255, 255 , 255, 0.3) inset ; color: #6666ff; border-radius: 4px ; margin: 1px 6px ; padding: 2px 4px";type="submit" name="send" value="Hey guys!"><b>&nbsp;&nbsp;&nbsp;Say Hi!&nbsp;&nbsp;&nbsp;</b></button><button style="border: 1px solid #333333; background: #333333; box-shadow: 0px 1px 1px rgba(255, 255 , 255, 0.3) inset ; color: #6666ff; border-radius: 4px ; margin: 1px 6px ; padding: 2px 4px";type="submit" name="send" value="/sr"><b>Server Rules</b></button><button style="border: 1px solid #333333; background: #333333; box-shadow: 0px 1px 1px rgba(255, 255 , 255, 0.3) inset ; color: #6666ff; border-radius: 4px ; margin: 1px 6px ; padding: 2px 4px";type="submit" name="send" value="/shop"><b>Server Shop</b></button><button style="border: 1px solid #333333; background: #333333; box-shadow: 0px 1px 1px rgba(255, 255 , 255, 0.3) inset ; color: #6666ff; border-radius: 4px ; margin: 1px 6px ; padding: 2px 4px";type="submit" name="send" value="/stafflist"><b>Server Auth</b></button></center><br></div><div class="broadcast-blue">Free Icons, Rooms, and Avatars! PM A Leader or higher! Want an emote thats not currently on here? PM Savior Edge with the url to the emote and name and he'll set it for you! 80x80 or image resize it. All images not 80x80 will be <b>rejected</b></div>';
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
