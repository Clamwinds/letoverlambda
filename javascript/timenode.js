var http = require('http');
var net = require('net');
var tcpport = process.argv[2];


var d = new Date();


var server = net.createServer(function (socket) {


    // socket handling logic
    socket.write(data);
    console.log(data);
    socket.end();

});

server.listen(tcpport);