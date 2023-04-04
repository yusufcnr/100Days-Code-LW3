Destructuring 
With destructuring we can "unpack" an object and assign its properties to new variables. For example, let's look at object destructuring:

const obj = {
  a: 2,
  b: 3,
}

// destructure assignment
const { a, b } = obj;

console.log(a); // 2
console.log(b); // 3


The rest parameters syntax can assign function arguments as an array. For example:

function log(...args) {
    console.log(args);
}

log(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]


Spread Arguments 
This is sort of the opposite of the rest syntax. Instead of saying "grab me the rest of the values", we're saying "spread these values out".

Let's see what that means:

const numbers = [1, 2, 3];

function add(a, b, c) {
  return a + b + c;
}

const sum = add(...numbers);

console.log(sum); // 6



subclasses

class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    
}


function addScore(players) {
    return players.map(function(player, index) {
        if(index <=2) {
            player.score += 10;
        } 
        return player;
    });
    
}

module.exports = addScore;
