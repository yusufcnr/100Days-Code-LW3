//jshint esversion:6

function add(x) {
    // Only change code below this line
  return function(y) {
    return function(z) {
        return x + y + z;
    };
  };
  
    // Only change code above this line
  }
  
  console.log(add(20)(30)(20));