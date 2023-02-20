//jshint esversion:6

function telephoneCheck (str) {

    let mayHaveAPlusAtBeginning = /^(\+?1[- ]?)?/;
    //Optionally it may start with country code 1 with + sign before it.
    //If it has country code it may have a space or - after country code.
    
    let areaCode = /(\([- ]?\d{3}\)|\d{3})/; 
    //First part is with opening and closing paranthesis | second part is without paranthesis
    //Either is true;
    
    let first3Chars = /[- ]?\d{3}/;
    //It can have optional hyphen or space 
    
    let last4Chars = /[- ]?\d{4}/;
    //May have - or space before it.

    let endTheNumber = /$/;
    
    let finalRegex= /^(\+?1[- ]?)?(\([- ]?\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;


    return finalRegex.test(str);

}