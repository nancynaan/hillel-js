var EventEmitter = require('events').EventEmitter;

var db = new EventEmitter();

function makeEvent(info) {
       self.send(info);
};

function Request() {
   var self = this;

   this.bigData = new Array(1e6).join('*');

   this.send = function(data) {
       console.log(data);
   };

   db.on('data', makeEvent);
}

setInterval(function() {
   var request = new Request();
   console.log(process.memoryUsage().heapUsed);
   db.removeListener('data', makeEvent);
}, 200);


