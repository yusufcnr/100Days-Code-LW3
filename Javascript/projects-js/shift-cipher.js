//jshint esversion:6
function rot13(str) {
    let strArr = str.split("");
    let charCodeArr = [];
    let finalArr = [];
    let finalStr;
    for (let i = 0; i < str.length; i ++) {
        let charCode = strArr[i].charCodeAt(0);
        //console.log(charCode);
        charCodeArr.push(charCode);        
      }   
    for (let j = 0; j < charCodeArr.length; j++) {

        if (charCodeArr[j] >= 65 && charCodeArr[j] <= 90) {
            if (charCodeArr[j] > 77) {
                charCodeArr[j] = charCodeArr[j] -26; // there are 26 uppercase letter.
            }
            charCodeArr[j] += 13; 
        }

        finalArr.push(String.fromCharCode(charCodeArr[j]));
    }
   return finalArr.join("");
  }
  
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));

  