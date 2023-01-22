

// we use "/" at beginning and end of the word we we want to search for. 
// Let's thinks we have a string and we want to search special word from it:

var ourString = "hinks we have a string and we want to search special word from it:"

var ourRegex = /^want/;

var result = ourRegex.test(ourString);

var resultMatch = ourString.match(ourRegex);


console.log("Initial content is : " + ourString);
console.log("Our Regex is : " + ourRegex);
console.log ("Does content have our regex: " + result); //.test 
console.log("these are the matches: " + resultMatch); //.match 

