//jshint esversion:6 
let promise = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 3) {
        resolve('Success');
    } else {
        reject('Failed');
    }

});

promise.then((message) => {
    console.log("This is in .then " + message);
});

promise.catch((message) => {
    console.log("This is in .catch " + message);
});

const recordVideoOne = new Promise((resolve, reject)=> {
    resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
});

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
    
]).then((message) => {
    console.log("Hepsi kaydedildi!" + message);
}).catch((message) => {
    console.log("we have some problem: " + message);
});


Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
});
