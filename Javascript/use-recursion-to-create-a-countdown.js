// Only change code below this line
function countdown(n){
if (n < 1) {
  return [];

} else {
  const seri = countdown(n-1);
  seri.unshift(n);
  return seri;
}


}
// Only change code above this line
console.log(countdown(20));