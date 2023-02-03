//jshint esversion:6

function whatIsInAName(collection, source) {

    console.log(Object.entries(collection[1])[0].keys());
    
    }
    
    whatIsInAName([{ first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" });


