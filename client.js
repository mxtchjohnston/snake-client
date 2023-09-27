const net = require("net");

// establishes a connection with the game server
const connect = function (host, port) {
  const conn = net.createConnection({
   host,
   port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };