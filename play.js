const print = (data) => console.log(data);
const { connect } = require('./client.js')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

console.log("Connecting ...");
const conn = connect('localhost', 50541);

const handleUserInput = key => {
  if (key === '\u0003') {
    console.log("Disconnecting...")
    process.exit();
  }
  
};

const stdin = setupInput();
stdin.on("data", handleUserInput);

conn.on('connect', () =>{ 
  console.log('connected to server');
  conn.write('Name: MXJ');
  // conn.write('Move: up');
  // setInterval(() => conn.write('Move: up'), 100);
});

conn.on('data', print);