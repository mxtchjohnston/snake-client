const print = (data) => console.log(data);
const { connect } = require('./client.js');
const { setupInput } = require('./input.js');
const _ = require('./constants');

console.log("Connecting ...");
const conn = connect(_.IP, _.PORT);
const stdin = setupInput(conn);

const reConnect = () => { 
  console.log('connected to server');
  conn.write(_.NAME);
  setInterval(() => {
    let rand = Math.floor(Math.random() * _.SAYS.length);
    conn.write(`Say: ${_.SAYS[rand]}`);
  },_.SAYS_INTERVAL);
};

conn.on('connect', reConnect);

const exit = () => process.exit();

conn.on('data', data => {
  print(data);
  if (data === _.SERVER_EXIT) {
    conn.close();
  }
});