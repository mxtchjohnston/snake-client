const print = (data) => console.log(data);
const movement = {
  'w': 'Move: up',
  's': 'Move: down',
  'a': "Move: left",
  'd': "Move: right" 
};

let connection;

const handleUserInput = key => {
  if (key === '\u0003') {
    console.log("Disconnecting...")
    process.exit();
  }

  const cmd = movement[key];
  if (cmd) connection.write(cmd);
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };