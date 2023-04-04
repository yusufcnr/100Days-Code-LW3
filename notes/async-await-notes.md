Promises in JavaScript:

A promise in JavaScript is a promise in real life.
If you promise to do something, that promise may have actually two result:
-Promise is completed (resolved) 
-Promise is failed (rejected)

//Let's define a variable in order to have true/false
//situation so we can have resolved an rejected states


Let's see on action:

let promise = Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 3) {
        resolve('Success');
    } else {
        reject('Failed');
    }

});

So how do we interact with this promise?
with .then() and .catch() methods of course!

Anything in promise.then will run for resolve.

promise.then((message) => {
    console.log("This is in .then " + message);
});

Anything in promise.catch will run for reject.

promise.catch((message) => {
    console.log("This is in .catch " + message);
});


It is useful to use promises instead of callback functions when
you have many nested callback functions(callback hell).
Because we need to use only .then and .catch methods in order.
We do not need to take care of nested functions.


ın order to run a .then method for all promises in an array we can use Promise.all method.

const recordVideoOne = new Promise((resolve, reject)=> {
    resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject)=> {
    resolve("Video 2 Recorded");
})

const recordVideoThree = new Promise((resolve, reject)=>{
    resolve('Video 3 Recorded');
})

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then((messages) => {
    console.log(messages);
});


But what if we do not want to wait all of them to be completed and resolved.
Similarly we can use Promise.race method for this. With this method we can understand which method completed first.

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
    
]).then((message) => {
    console.log("Hepsi kaydedildi!" + message);
});


async await is another way we can use instead of promises:
Put async keyword before the function and await for the process we need to wiat to be completed.

async means "a function always returns a promise".


--------------
JS normalde işlemleri sırayla yapıyor.
Ama biz fonksiyonun başına async yazarsak bunun tamamlanamsını bekleme devam et bitince gel diyoruz.
Sonra bunu başına await yazarak kullanabiliyoruz.
await ile fonksiyonu çağırdığımız zaman bu promisein resolve şeklinde sonucunu alıyoruz. 

The async keyword before a function has two effects:

Makes it always return a promise.
Allows await to be used in it.

