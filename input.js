const _ = require('./constants');
let currentDirection = _.MOVEMENT['a'];

const handleUserInput = key => {
  if (key === _.EXIT) {
    console.log("Disconnecting...")
    process.exit();
  }

  const cmd = _.MOVEMENT[key];
  if (cmd) currentDirection = cmd;
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  setInterval(() => conn.write(currentDirection), _.SPEED);
  return stdin;
};

module.exports = { setupInput };