// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line

function updateRecords(records, id, prop, value) {
if (prop !== "tracks" && value !=="") {
  records[id][prop] = value; 

  //@NoteForMyself başlanıgçta burada records yerine recordCollection kullanıdğım için 
  // problem yaşadım. Tabi ki fonksiyonun içinde parametrelerden birisinin kullanılması gerekiyor.
  //recordCollection fonksiyonun parametrelerinden birisi değil.

}  

  else if (prop === "tracks" && recordCollection[id][prop] == undefined) {
  records[id]["tracks"] = [value];
} 

  else if(prop === "tracks" && value !=="" ) {
  records[id][prop].push(value);
} 

  else if (value ==="") {
  delete records[id][prop];

}

  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");

/*
console.log (recordCollection[5439]["artist"]);

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log (recordCollection[5439]["tracks"][0]);

updateRecords(recordCollection, 2548, "artist", "");
console.log (recordCollection[2548]["artist"]);

updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(recordCollection[2568][""])

updateRecords(recordCollection, 2548, "tracks", "");

console.log (recordCollection[2548]["tracks"][0]);



delete recordCollection[5439]["tracks"];

console.log (recordCollection[5439]["tracks"]);

console.log(recordCollection[5439]);
*/
