//jshint esversion:6

function addTogether() {

    //first and second arguments
    const [first, second] = arguments;
    if (typeof(first) !== "number") { //undefined if first element is not a number
        return undefined;
    }

    if (arguments.length === 1 ) { //return a function if the second element is not defined
 
        return function addSecond(second) {
            if (typeof(second) !== "number"){
              return undefined
            }
            return first + second;
        };
    }

    if (typeof(second) !== "number") {
        return undefined;
    }

    return first + second;

}

console.log(addTogether(2)([3]));