//jshint esversion:6

function translatePigLatin(str) {

  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 's', 't', 'v', 'x', 'z', 'h', 'r', 'w', 'y'];

  const VOWELS = ["a", "e", "i", "u", "o"];

  let regex = (/[aeiuo]/);

  let firstVowelIndex = str.search(regex, str);
  if (firstVowelIndex !== 0) {
    let constPart = str.substring(0, firstVowelIndex);      
    return str.substring(firstVowelIndex, str.length) + constPart + "ay"; 

  } return str + "way";
  } 
   
  
  console.log(translatePigLatin("shwrts"));
  
  