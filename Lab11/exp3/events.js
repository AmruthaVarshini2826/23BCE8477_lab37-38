const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Listener 1
eventEmitter.on('greet', (name) => {
    console.log("Hello " + name);
});

// Listener 2
eventEmitter.on('greet', (name) => {
    console.log("Welcome " + name);
});

// Trigger event
eventEmitter.emit('greet', 'Amrutha');