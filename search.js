"use strict"
var system = require("system");

if(system.args.length < 2){
    console.log("Usage : phantomjs search.js <youtube-keyword in quotation marks>");
    phantom.exit();
} else{
    var query = system.args[1];
    var url = "https://www.youtube.com/results?search_query="+ encodeURI(query);
    console.log(url);
    var pagex = require("webpage").create();
    pagex.open(url, function(status){
        console.log("Test : "+status);
        var x = pagex.evaluate(function() {
           console.log("Evaluate");
           return [].map.call(document.querySelectorAll('a.yt-uix-sessionlink.yt-uix-tile-link.yt-ui-ellipsis.yt-ui-ellipsis-2.spf-link'), function(link) {
            var y = {
              href : link.getAttribute('href'),
              text : link.text,   
            };
            return y;
           });
        });
        
        for(var i in x){
            console.log(x[i].text);
            console.log(x[i].href);
        }
        phantom.exit();        
    });
}
