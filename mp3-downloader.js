"use strict"
var system = require("system");
var vid;
if(system.args.length < 2){
    console.log("Usage : phantomjs mp3-downloader.js <youtube-v-id>");
    phantom.exit();
} else{
    //var url = "http://www.youtube-mp3.org/#v_id=DeumyOzKqgI";
    var url = "http://www.youtube-mp3.org/";
    vid = system.args[1];
    var pagex = require("webpage").create();
    pagex.open(url, function(status){
        var x = pagex.evaluate(function(vid) {
            document.getElementById("youtube-url").value = "https://www.youtube.com/watch?v="+vid;
            var d = document.getElementById("youtube-url").value;
            document.getElementById("submit").click();
            return d;
        }, vid);
        
        setTimeout(function(){
            var y = pagex.evaluate(function(){
                return document.querySelectorAll("a");
            });
            for(var i in y){
                console.log("Ke "+i);
                for(var j in y[i]){
                    console.log(j + " " + y[i][j]);
                }
            }
            pagex.render("test.png");
            phantom.exit();
        },3000);
        
    });
}
