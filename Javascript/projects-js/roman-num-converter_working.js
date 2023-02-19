//jshint esversion:6

function convertToRoman(num) {

    let arrRes = [];
    let symArr = ['M', 'CM', 'D', 'CD','C', 'XC', 'L', 'XL','X', 'IX', 'V', 'IV', "I"];
    let numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < symArr.length; i++ ){
        let numOfSym = Math.floor(num/numArr[i]);
        let sym = symArr[i];
        arrRes.push(sym.repeat(numOfSym));
        num = num % numArr[i];          
    }
     return arrRes.join("");           
    }
    
    console.log(convertToRoman(2));