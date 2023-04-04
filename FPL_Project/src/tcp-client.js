//jshint esversion:6
const net = require("net");

const client = new net.Socket();
const serverAddress = "127.0.0.1"; // replace with server IP address
const serverPort = 3000; // replace with server port number

// Connect to the server
client.connect(serverPort, serverAddress, function () {
  console.log("Connected to server");

  // Send a message to the server
  const message =
    "login";
  client.write(message);
});

// Receive data from the server
client.on("data", function (data) {
  console.log("Received data from server:", data.toString());

  // Parse the XML message
  // Do something with the message
});

// Handle errors
client.on("error", function (error) {
  console.error("Error:", error.message);
});

// Close the connection when finished
client.on("close", function () {
  console.log("Connection closed");
});
