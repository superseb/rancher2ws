/*
Websocket test for connecting to Rancher 2 (https://rancher.com) using NodeJS ws library.
Usage:
  Create an API key in Rancher 2, save the Bearer token (`token-xxxxx:string`) and run:

  node rancher2ws.js rancher_server_hostname_or_ip bearer-token

Based on https://gist.github.com/vincent99/491afed2306ba448dd89 (for Rancher 1.6) to test websocket connections to Rancher
*/
var WebSocket = require('ws');

var host = process.argv[2];
var bearerToken = process.argv[3];

var url = 'wss://'+bearerToken+'@'+host+'/v3/subscribe';
var socket = new WebSocket(url);

socket.on('open', function() {
  console.log('Socket opened');
});

socket.on('message', function(messageStr) {
  console.log(messageStr);
  var message = JSON.parse(messageStr);

  if ( message.name === 'ping' )
  {
    console.log('ping');
  }
  else if ( message.name === 'resource.change' && message.data )
  {
    var resource = message.data;

    var info = 'name='+resource.name + ', state='+resource.state;
    if ( resource.transitioning !== 'no' )
    {
      info += ', transitioning='+resource.transitioning + ', message='+resource.transitioningMessage
    }

    console.log(resource.type, resource.id, 'changed:', info);
  }
});

socket.on('close', function() {
  console.log('Socket closed');
});

process.on('SIGINT', function() {
    process.exit();
});
