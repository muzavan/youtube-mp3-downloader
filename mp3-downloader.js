"use strict"
var system = require("system");

if(system.args.length < 2){
    console.log("Usage : phantomjs mp3-downloader.js <youtube-v-id>");
    phantom.exit();
} else{
    //var url = "http://www.youtube-mp3.org/#v_id=DeumyOzKqgI";
    var url = "http://www.youtube-mp3.org/";
    var pagex = require("webpage").create();
    pagex.open(url, function(status){
        console.log("OPENED");;
        // window.setTimeout(function () {
        //     var x = pagex.evaluate(function() {
        //         console.log("EVALUATED");
        //         var d =  document.getElementsByTagName("b");
        //         return d;
        //     });
        //     console.log(x.length);
        //     phantom.exit();
        // }, 10000);
            var x = pagex.evaluate(function() {
                console.log("EVALUATED");
                var d =  document.getElementById("youtube-url").value = "https://www.youtube.com/watch?v=DeumyOzKqgI";
                document.getElementById("submit").click();
                return d;
            });
            
            setTimeout(function(p){
                    p.evaluate(function(){
                        document.getElementsByTagName("b")[3].parentElement.click();
                    });
                    setTimeout(function(){
                        p.render("as5.png");
                        phantom.exit();
                    },5000);
            },5000,pagex);
            // pagex.render("as2.png");
            // console.log(x.length);
            // phantom.exit();
    });
}
