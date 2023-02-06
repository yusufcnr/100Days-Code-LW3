//jshint esversion:6

// Convert the string to array; done
//find the index for the before check first letter uppercase or lowercase and converst first letter of after to it.
//convert before it to after
//return string with new values

function myReplace(str, before, after) {

    let arrStr = str.split(" ");
    if (before[0].toUpperCase() === before[0])  {
       after = after.charAt(0).toUpperCase() + after.slice(1);
    } 
    after = after.charAt(0).toLowerCase() + after.slice(1);


    arrStr[arrStr.indexOf(before)] = after;
    str = arrStr.join(" ");
    return str;
   
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Atladi"));
  
