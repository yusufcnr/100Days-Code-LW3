// numbers is an array full of numbers
// let's add all the numbers and return the sum
// i.e. [1,2,3,4,5] => 15
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue // <-- sum the numbers here!
    });
}

module.exports = sum;


// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {

        return (accumulator > currentValue ? accumulator : currentValue)// <-- determine largest value
    }, 1);
}

module.exports = largest;


// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {

        return (accumulator > currentValue ? accumulator : currentValue)// <-- determine largest value
    }, 1);
}

module.exports = largest;


// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        // TODO: reduce logic
        if (accumulator.indexOf(current) ===-1 ) {
            accumulator.push(currentValue);
        } return currentValue;

    },[] /* TODO: add initial value */ );
}

module.exports = removeDuplicates;





// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        // TODO: reduce logic

        accumulator[currentValue.type] = accumulator[currentValue] || [] accumulator[currentValue.type].push (currentValue.food);
        return accumulator;
        

    }, {} /* TODO: add initial value */ );
}

module.exports = group;






