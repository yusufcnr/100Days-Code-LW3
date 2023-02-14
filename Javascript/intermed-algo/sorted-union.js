//jshint esversion:6

function uniteUnique(arr) {

    let finalArr = [];


    for (let i = 0; i<arguments.length; i +=1) {
        for (let j = 0; j < 4; j ++) {
            let elem = arguments[i][j];
            if(typeof(elem) !=="undefined") {
                if(finalArr.includes(elem) !== true) {
                    finalArr.push(elem);
                }
                
            }            
        }
        
    }console.log(finalArr);


    return finalArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);