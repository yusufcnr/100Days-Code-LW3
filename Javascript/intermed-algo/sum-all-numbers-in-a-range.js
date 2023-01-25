function sumAll(arr) {
let sum = 0;
let small = Math.min(arr[0], arr[1]);
let big = Math.max(arr[0], arr[1]);

for (let i = small; i <= big; i ++) {
  sum += i; 
}
 return sum;
}

console.log(sumAll([3,8]))