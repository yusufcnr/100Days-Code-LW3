//jshint esversion:6

function fearNotLetter(str) {

    for (let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) < 97 || str.charCodeAt(i+1) > 121 ) {
            return undefined;
          }
        if(str.charCodeAt(i) + 1 !== str.charCodeAt(i+1)) {
    
           
            let fazla = str[i+1];
            let eksik = String.fromCharCode(str.charCodeAt(i) + 1 );
            return eksik;
        }
        }  
           
    } 
    console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));