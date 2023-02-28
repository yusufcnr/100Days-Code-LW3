//jshint esversion:6

const json = require("body-parser/lib/types/json");

function splitAtX(string) {

    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === "x") {
            console.log(i);
            let first = string.slice(0,i);
            console.log(first);
            let last = string.slice(i+1, string.length);
            console.log(last);
            if(last.length > first.length) {
                return last;
            } return first;
            
        }
    }
    
}
console.log(splitAtX("kjsaxdkljasşaksd"));


function unique(array) {

    let retArr = [];

    for (let i = 0; i < array.length; i++) {
        if (retArr.includes(array[i]) === false) {
            retArr.push(array[i]);

        }
    } return retArr;

}


module.exports = unique;




function addOne(array) {
    let retArr = [];
    for (let i = 0; i<array.length; i++) {
        retArr.push(array[i] + 1);
    }
    return retArr;
}

module.exports = addOne;



function removeOccurrences(array, num) {
    for (let i=array.length-1; i>=0;  i--) { 
        if (array[i] === num) {
            array.splice(i,1);
        }
    }


}
module.exports = removeOccurrences;

function numberOfPizzas(orders) {
    let totalPizzas=0;
    for (let i = 0; i < orders.length; i++) {
        totalPizzas += orders[i].pizzas;

    }return totalPizzas;
    
}
module.exports = numberOfPizzas;


function halfValue(numbers) {
    let newArr = [];
    for (let i = 0; i<numbers.lenght; i++) {
        console.log(numbers[i]/2);
    
    }
    return newArr;
    }
    
    

console.log(halfValue([12,5,77,8]));


function forLoop (numbers) {
    let nA = [];
    for (let i = 0; i<numbers.length; i++) {
        nA.push(Math.round(numbers[i]/2));
    } return nA;
}

function countC(str) {
    let total = 0;
    for (let i = 0; i<str.length; i++) {
        if(str[i].toLowerCase() === "c") {
            total += 1;
        }

    } return total;
    
}

module.exports = countC;



function reverse(string) {
    let arr = [];

    for (let i= 0; i<string.length;i++) {
        
        arr.unshift(string[i]);
    } return arr.join("");
    
}


function isPalindrome(string) {

    for (let i = 0; i < string.length; i++) {
        let last = string.length-1;
        if (string[i].toLowerCase() === string[last].toLowerCase()) {
            return true;
        } return false;
        
    }
}

module.exports = isPalindrome;

console.log(reverse("yusuf"));
console.log(isPalindrome("atA"));


function sumTogether(arr1, arr2) {

    let resArr = [];
    for (let i = 0; i < arr2.length; i++) {
        resArr.push(arr1[i] + arr2[i]);

    } return resArr;
}




function countElements(elements) {
    let elementCount = {}
    
    for (let i = 0; i < elements.length; i++) {
        if (!elementCount[elements[i]]) {
            elementCount[elements[i]] = 1;
        } else {
            
            elementCount[elements[i]] += 1;
        }         
        }
        return elementCount;
    }

module.exports = countElements;


const elements = ["e", "k", "e", "z","k", "e", "z", "i", "z"];

console.log(countElements(elements));





function playerHandScore(hand) {
    let handScore = 0;

    for (let i=0; i < hand.length; i++) {
        if(hand[i] === "K") {
            handScore += 4;
        } else if (hand[i] === "Q") {
            handScore += 3;
        } else {
            handScore += 2;
        }
        
    }

    return handScore;

}

console.log(playerHandScore("KKJQ"));
module.exports = playerHandScore;



function toNumber(string) {

    
    if(!isNaN(string)){
        return parseInt(string);
    }
     return 0;
}
console.log("------------------");
console.log(toNumber("2366"));


module.exports = toNumber;


function toJSON(obj) {
    return JSON.stringify(obj);
    
}

module.exports = toJSON;

console.log(toJSON('{"name":"Jim"}'));



function eitherNotBoth(num) {

    if (num % 15 === 0 ) {
       return false;
    } 
    else if (num % 3 === 0) {
        return true;
    } else if (num % 5 === 0) {
        return true;
    }

}

module.exports = eitherNotBoth;

console.log(eitherNotBoth(10));



function fizzBuzz(numbers) {

    let resArr = [];

for (let i = 0; i < numbers.length; i ++) {

    if (numbers[i] % 15 === 0) {
        resArr.push("fizzbuz");
    } else if (numbers[i] % 3 === 0) {
        resArr.push("fizz");
    } else if (numbers[i] % 5 === 0) {
        resArr.push("buzz");
    }
    
}return resArr.join("");

}

console.log(fizzBuzz([1, 3, 5, 9, 11, 12,15, 20]));

module.exports = fizzBuzz;

/****************************************/

function sortUp(array) {
   return  array.sort(function compare (a,b){
        return b-a;
        
    });


}

module.exports = sortUp;

let arrSort = [3,2,4,1];
console.log(sortUp(arrSort));


