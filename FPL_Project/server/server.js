//jshint esversion:6
const net = require("net");
const xml2js = require("xml2js");

const flights = [
  { id: "1234", origin: "ABC", destination: "XYZ" },
  { id: "5678", origin: "DEF", destination: "UVW" },
  // Add more flight objects here...
];

const xmlMessages = flights.map((flight) => {
  const xml = `<IOPCLIENT><ALLR><Flight><ID>${flight.id}</ID><Origin>${flight.origin}</Origin><Destination>${flight.destination}</Destination></Flight></ALLR></IOPCLIENT>`;
  return xml;
});

const server = net.createServer((socket) => {
  console.log("Client connected");

  xmlMessages.forEach((xmlMessage) => {
    const parser = new xml2js.Parser();
    parser.parseString(xmlMessage, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        const message = JSON.stringify(result);
        console.log(`Sending message to client: ${message}`);
        socket.write(message);
      }
    });
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server listening on port 3000");
});
