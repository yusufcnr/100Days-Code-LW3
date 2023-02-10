//jshint esversion:6

function dropElements(arr, func) {
    let retArr = [];

    for (let i = 0; i < arr.length; i++) {
        if ((func(arr[i]) === true)) {
            retArr = arr.slice(i, arr.length);    
            break;    
           

        } 
    }


    return retArr;
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));