//jshint esversion:6

function truthCheck(collection, pre) {

    let result = true;

    for (let i = 0; i < collection.length; i++) {
        if (!collection[i].hasOwnProperty(pre) || !(Boolean(collection[i][pre]))) {
            console.log(Boolean(collection[i].pre));
            result=false;
            // console.log(collection[i]);
            // console.log(i);
            break;
            //console.log(pre);
        }
        
        }

   
    //console.log(Object.keys(collection[i])[j]);
       
    return result;
    
    }
    
    //console.log(truthCheck([{isim: "Quincy", role: "Founder", askermi:true , isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isim"));
    
    console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));
    