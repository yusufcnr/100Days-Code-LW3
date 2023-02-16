//jshint esversion:6

function convertToRoman(num) {

    let resArr = [];
    let M = Math.floor(num/1000);    
    let D = Math.floor((num - binlik * 1000) /500);
    let C;
    let L;
    let X;
    let V;
    let I;
    resArr.push(binlik);
    resArr.push(besyuzluk);
     return resArr;
    }
    
    console.log(convertToRoman(3506));