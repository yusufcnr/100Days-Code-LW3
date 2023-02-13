//jshint esversion:6

function whatIsInAName(collection, source) {
    let finalArr = [];
    let key = Object.keys(source)[0];
    let val= source[key];
    
   
    for (let i = 0; i  < collection.length; i += 1) {    
        if (Boolean(collection[i].hasOwnProperty(key))) {
            
            if (Boolean(collection[i][key] === val)) {
                
                finalArr.push(collection[i]);

            }   
        }
    }
    return finalArr;
        
    }
    
    console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
     { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
     { last: "Capulet" }));