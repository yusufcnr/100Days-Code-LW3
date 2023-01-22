/*jshint esversion: 6 */

function mutations (arr) {

    let arr0 = arr[0].toLowerCase();
    let arr1 = arr[1].toLowerCase();

    for (let i = 0; i < arr[1].length; i++) {
        if (arr0.indexOf(arr[i]) < 0) return false;
    }
    return true;

}

console.log(mutations(["yusuf", "cin"]));