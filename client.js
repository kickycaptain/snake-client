const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '172.24.213.35',
    port:  50541,
  });
  conn.on("data", (data) => {
    console.log(data)
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
  })
  conn.on("connect", () => {
    conn.write("Name: CRC");
  });
  conn.on("connect", () => {
    setInterval(() => {
      conn.write("Move: up");
    }, 50)
  });
  return conn;
};

module.exports = connect