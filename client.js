const { Server } = require("http");
const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  })
  conn.on("connect", () => {
    console.log("successfully connected", )
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    conn.write('Name: KEO')
  });

  // conn.on("connect", () => {
  //   setTimeout(() => {console.log("Move: up")}, 5000);
  //   setTimeout(() => {console.log("Move: up")}, 7000);
  // })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //will use conn to handle messages from server
  return conn;
};

module.exports = {connect};