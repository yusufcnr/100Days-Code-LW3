//jshint esversion:6

function whatIsInAName(collection, source) {
    let finalArr = [];
    let key = Object.keys(source);
    
    for (let i = 0; i  < collection.length; i += 1) {    
        if (collection[i].hasOwnProperty(key[0]) === true) {
            
            if (!Boolean(collection[i][key[0]] === key[0])) {
                finalArr.push(collection[i][key[0]]);

            } 
            
        }

    }
    return finalArr;
    
    //console.log(source[Object.keys(source)]);
    
    }
    
    console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
     { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
     { last: "Capulet" }));