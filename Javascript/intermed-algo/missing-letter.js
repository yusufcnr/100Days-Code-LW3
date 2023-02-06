//jshint esversion:6

function fearNotLetter(str) {
    let letters = "abcdefghijklmnopqrstuvwxyz";

    let startingIndex = letters.search(str.charAt(0));
    console.log("starting Index : " + startingIndex);

    let lastIndex = startingIndex + str.length-1;
    let missingLetter;

    console.log("Last index :" + lastIndex);

    for (let i = startingIndex ; i <= lastIndex; i ++ ) {
        console.log
        
            
    }

    //let lastIndex = letters.search(str.charAt(son));
  
     
  
    return missingLetter;
  }
  
  fearNotLetter("abcdefhijkl");