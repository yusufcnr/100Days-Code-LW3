//jshint esversion:6

function spinalCase(str) {

    //First we need to find if any camelCase things there. some words start with uppercase after lowecase word.
    //Then we will replace these ones the same words but a space between them.    

    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");


    //Then we need to convert all the spaces and underscores to dash.
    //In order to do this we need to find them with regex:

    str = str.replace(/\s+|_+/g, "-"); //find all the spaces and _s and replace with a dash.
    return str.toLowerCase(); //convert all the string to lowercase
    
    }
    
    console.log(spinalCase('this IsS pinal_Tap'));