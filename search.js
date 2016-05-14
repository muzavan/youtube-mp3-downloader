"use strict"
var system = require("system");

if(system.args.length < 2){
    console.log("Usage : phantomjs search.js <youtube-keyword in quotation marks>");
    phantom.exit();
} else{
    var url = "https://www.youtube.com/results?search_query="+system.args[1];
    console.log(url);
    var pagex = require("webpage").create();
    pagex.open(url, function(status){
        console.log("Test : "+status);
        var x = pagex.evaluate(function() {
           var alls = [];
           var hrefs = [].map.call(document.querySelectorAll('a.yt-uix-sessionlink.yt-uix-tile-link.yt-ui-ellipsis.yt-ui-ellipsis-2.spf-link'), function(link) {
            return link.getAttribute('href');
           });
           
           var texts = [].map.call(document.querySelectorAll('a.yt-uix-sessionlink.yt-uix-tile-link.yt-ui-ellipsis.yt-ui-ellipsis-2.spf-link'), function(link) {
            return link.getAttribute('text');
           });
           
           for(var i in hrefs){
             var j = {
               href : href[i],
               text : text[i],  
             };
             all.push(j);       
           }
           
           return alls;
        });
        for(var i in x){
            console.log(i + " : " +x[i].text;
            console.log(i + " : "+x[i].href);
        }
        console.log(x.length);
        phantom.exit();     
    });
}