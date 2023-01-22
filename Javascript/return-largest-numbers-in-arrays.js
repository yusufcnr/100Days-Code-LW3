//Freecodecamp Javascript Tutorial
//Basic Algorithm Scripting 5/16
/*jshint esversion: 6 */


function largestOfFour(arr) {
  const results = [];

  for(let i=0; i<arr.length; i++) {
    let largest = arr[i][0];
    for (let j = 0; j<arr[i].length; j++) {
      if(largest < arr[i][j] ) {
        largest = arr[i][j];
      }
    results[i] = largest;
    }
  }

  return results;
}

let res = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(res);