//jshint esversion:6

function whatIsInAName(collection, source) {
    let finalArr = [];
   
   
    for (let i = 0; i  < collection.length; i += 1) {   
         
        let isMatch = true;
        for (let key in source) {
            if(!collection[i].hasOwnProperty(key) || collection[i][key] !== source[key]) {
              isMatch = false;
              break;  
            }
        }

    if (isMatch) {
        finalArr.push(collection[i]);
    }
    }
    return finalArr;
        
    }
    
    console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
     { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
     { last: "Capulet" }));