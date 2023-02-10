//jshint esversion:6

function smallestCommon2 (num1, num2) {

    let ebob = 1;
    
    for (let i = num2; i>= 1; i--) {
        if (num1 % i == 0 &&  num2 % i == 0) {
            //console.log(i);
            ebob = i;
            break;
        }
    }

    return num1 * num2 / ebob;
  }
    
  console.log(smallestCommon2(15,60));