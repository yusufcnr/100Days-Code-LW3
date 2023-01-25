
/*jshint esversion :6 */

function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length ; i++) {
    if (arr2.includes(arr1[i])===false) {
      newArr.push(arr1[i]);
    }
  }

  for(let i = 0; i < arr2.length ; i++) {

    if (arr1.includes(arr2[i])===false) {

      newArr.push(arr2[i]);
    }
    }

  return newArr;
}

let res = diffArray([1, 2, 3,4, 5,6], [1, 2, 3, 4, 5,7]);
console.log(res);

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
