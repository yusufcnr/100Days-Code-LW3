/*jshint esversion: 6*/

function Dog(name) {
this.name = name;  
}

let beagle = new Dog ("Eaaagle");

beagle.prototype = {
  numLeg:4,
  eat: function () {
    console.log(this.name + " eats.");
  },
  describe: function () {
    console.log("this is " + this.name);
  },
} 

console.log(Dog.prototype.isPrototypeOf(beagle));
console.log(Dog.isPrototypeOf(beagle));

console.log(Object.prototype.isPrototypeOf(Dog.prototype));
console.log(beagle.hasOwnProperty("name"));