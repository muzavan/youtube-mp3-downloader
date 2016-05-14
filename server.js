"use strict"
var webserver = require("webserver");
var system = require("system");

if (system.args.length < 2){
    console.log("Usage : phantomjs server.js <port>");
} else{
    var app = webserver.create();
    var port = system.args[1];
    console.log("Listening on : http://localhost:"+port+"/<keyword here>");
    
    var service = app.listen(port, function(request, response){
        var query = request.url.substring(1); //exclude '/' 
        var url = "https://www.youtube.com/results?search_query="+ encodeURI(query);
        var pagex = require("webpage").create();
        pagex.open(url, function(status){
            var x = pagex.evaluate(function() {
                return [].map.call(document.querySelectorAll('a.yt-uix-sessionlink.yt-uix-tile-link.yt-ui-ellipsis.yt-ui-ellipsis-2.spf-link'), function(link) {
                    var y = {
                    href : link.getAttribute('href'),
                    text : link.text,   
                    };
                    return y;
                });
            });
            response.statusCode = 200;
            response.write(JSON.stringify(x));
            response.close();  
            //phantom.exit();        
        });
    });
}
