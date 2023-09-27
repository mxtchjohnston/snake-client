const print = (data) => console.log(data);
const { connect } = require('./client.js')


console.log("Connecting ...");
const conn = connect('localhost', 50541);

conn.on('connect', () =>{ 
  console.log('connected to server');
  conn.write('Name: MXJ');
  // conn.write('Move: up');
  // setInterval(() => conn.write('Move: up'), 100);
});

conn.on('data', print);