/*jshint esversion:6
*/

function destroyer(arr,args) {

    const finalArr = [];

    //Eger arguments[0] içinde argument[1-n] varsa sil.

    for (let i = 1; i < arguments.length; i += 1) {
        if (arr.includes(args[i]) == false) {
            finalArr.push(arguments[i]);
            return finalArr;
        }
    }

    
    return finalArr;
  }
  
  let res = destroyer([1, 2, 3, 1, 2, 3], 2,"a");
  console.log(arguments[0]);