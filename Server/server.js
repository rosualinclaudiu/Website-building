var http = require("http")

function start() {
    function onRequest(request, response){
        response.writeHead (200, {"Content-Type": "text / html"});
        response.write ("Hello World from Module");
        response.end ();
    }
    var server = http.createServer(onRequest)
    server.listen(8887)
}

exports.start = start