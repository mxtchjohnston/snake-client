const net = require("net");
const print = (data) => console.log(data);

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
const conn = connect();

conn.on('connect', () => console.log('connected to server', conn));
conn.on('data', print);