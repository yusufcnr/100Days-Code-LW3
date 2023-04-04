//jshint esversion:6

const fs = require("fs");
fs.writeFile("deneme.txt", "this should go to in the file", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("file is ready");
  }
});

fs.appendFile("deneme.txt", "yusuf cinar", function (err) {
  console.log(err);
});

fs.writeFile("yusuf", "deneme.txt", function (err) {
  if (err) {
    console.log("we have this error: " + err);
  }
});

fs.write("deneme.text", 4, "yusuf");

const { makeFood } = require("./Kitchen");

class Order {
  constructor() {
    this.isReady = false;
  }
  request(food) {
    makeFood(food)
      .then(() => {
        this.isReady = true;
      })
      .catch((error) => {
        this.error = error;
      });
  }
}

module.exports = Order;

const myPromise = new Promise(function (resolve, reject) {
  if (resolve) {
    console.log("no problem so far");
  } else if (reject) {
    console.log(reject);
  }
});

function timer() {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      res();
    }, 1000);
  });
}

module.exports = timer;


const { getResults } = require("./lab");
const { sendResults } = require("./messaging");
const { logResponse, logError } = require("./logs");

async function handleResults(patientId) {

  const result = await getResults(patient);
  const response = await sendResults(patientId, response);
  await logResponse(response);
}

module.exports = handleResults;
