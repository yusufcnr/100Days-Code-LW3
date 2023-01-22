---REGEX---
    ourRegex = /wortToSearch/
    ourRegex.test(bigFile); //true or false
    bigFile.match(ourRegex) //Uygun çıktılar
    /wortToSearch/i //ignore case difference
    /wortToSearch/g // all matches
    /wortToSearch/gi //ignore case sensitivity and find all exacth matches.
    /[a-z]/ search for letters 
    /[0-9]/numbers 
    /s+/g -> string includes s at least once. maybe repeated. 

    ----