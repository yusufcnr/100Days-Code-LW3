//jshint esversion:6
function steamrollArray(arr) {
    let flatArray=[]; // new array to keep the track of elements

      for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) { // check if the element is array
            
            flatArray.push(... steamrollArray(arr[i])); // call the function to flatten further until find a non-array element
        }
        else flatArray.push(arr[i]); // push non-array items to final array
    }

        return flatArray;  
    }
             
    console.log(steamrollArray([1, [2], [3, [[4]]]]));