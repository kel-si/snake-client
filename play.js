const { Server } = require("http");
const net = require("net");
const connect = require("./client")


console.log("Connecting ...");
connect();


//stdin object that is returned will allow us to listen for keyboard input and react to it
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //function for controlling responses to user input
  const handleUserInput = function() {
    stdin.on("data", (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    });
  };
  stdin.on("data", handleUserInput);
  
  return stdin;
};

setupInput();