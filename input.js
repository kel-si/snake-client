const { builtinModules } = require("module");

let connection;

//stdin object that is returned will allow us to listen for keyboard input and react to it
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};

  //function for controlling responses to user input
  const handleUserInput = function(key) {
      if (key === '\u0003') {
        process.exit();
      }
      if( key === 'w') {
        connection.write("Move: up")
      }
      if( key === 'a') {
        connection.write("Move: left")
      }
      if( key === 's') {
        connection.write("Move: down")
      }
      if( key === 'd') {
        connection.write("Move: right")
      }
      if( key === 't') {
        connection.write("Say: im a snake")
      }
      if( key === 'r') {
        connection.write("Say: food!")
      }
  };
  

module.exports = {setupInput};