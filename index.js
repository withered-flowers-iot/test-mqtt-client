/*
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:3004');

client.on('connect', function() {
  client.subscribe('myevent');
  client.publish('myevent', 'Hello mqtt');
});
*/
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtts://localhost:3005', {
  rejectUnauthorized:false
});
 
client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Hello mqtt');
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
  client.end();
});