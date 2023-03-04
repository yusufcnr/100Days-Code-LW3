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
