//jshint esversion:6

function convertHTML(str) {

    var strArr = str.split("");
    

    for (let i = 0; i < strArr.length; i += 1) {
        switch (strArr[i]) {
            case '>':
            strArr[i] = "&gt;";
            break;

            case '<':
            strArr[i] = "&lt;";
            break;

            case '&':
            strArr[i] = "&amp;";
            break;

            case "'":
            strArr[i] = "&apos;";
            break;

            case '\"':
            strArr[i] = "&quot;";
            break;

            
        } 
        
    }

    let finalStr = strArr.join('');
    return finalStr;
  }
  
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML('Stuff in "quotation marks"'))
