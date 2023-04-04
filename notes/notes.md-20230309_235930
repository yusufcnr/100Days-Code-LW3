FreeCodeCamp-Javascript 
DAY1
---
Day 1 of 100DaysofCodeLW3 I started FreeCodeCamp Javascript tutorials. I will be doing it for one month. 
Today I have gone over varialbes and declaration of them. 
I have learnd:
Different variable types:
Different between const, var and let keyword when declaring a variable.

if you use var to declare a varialbe you can overwrite it easily and you do not get an error which makes finding the bugs difficult.
you can use let keyword for declaration so if you try to overwrite the variable with another value it throws an error so you can follow it easily. 
If you declare a variable with const it cannot be changed. It is readonly. 

See you tomorrow. 

------
Difference between a =+ b and a +=b 
If you use - instead of + you can understan better one of them is increment/decrement and one of them is value assingment. 
x = +10 actually no diferent than x = -10 in terms of declaration

use \"SOME string in string \*

"----" === '----'

pop, push, shift, unshift // add ,remove at the end of at the beginning of array


DAY2----
Variables Scope:

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

If you do not return any value from a function returned value is "undefined"
function addFive() {
    sum +=5;
    }

when you call function like :
addFive() ;
it returns "undefined"

DAY3---

Objecti in Javascript:
Object are like arrays but you acces their element using properties not indexes.

DAY 4
----
do {
    do somthing
} while (some condition)


do something will be executed at least one since there is no condition check before it. 
then condition will be checked and if it is true do something will be executed again. otherwise loop will be done.

DAY 5___
Ternary opertators.
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

----
DAY 6
When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

---
const ile tanımlanan object direkt olarak değiştirilmese de elemanların tek tek değiştirilmesiyle aslında değiştirilebiliyor.
Bunu da engellemek için "freeze" methodu kullanıyoruz.
Object.freeze(myObj) ile artık myObj değiştirelemez oluyor.

---
Arrow Function:
On time used function as an argument to another function.
we will not use it anywhere else we do not give a name to it.


var magic = function () {
    return new Date();
}

fonksiyonunu arrow olarak şu şekilde yazabiliriz:

const magic = () => { return new Date};

console.log(magic())


---
Array reduce function:
I just learned about javascript array reduce method and I like it.

myArray.reduce((accumulator, sum) => accumulator + sum ,0)  



(...args) ile istediğimiz kadar argument verebileceğimizi belirtiyoruz.
bu sayede arrayde kaç tane eleman varsa hepsi ile işlem yapabiliriz. reduce map filter gibi işlemleri yapmakta kolaylık sağlamakta.

aynı şekilde (...) spread operator 

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);


----------'USE GETTERS AND SETTERS TO CONTROL ACCESS TO AN OBJECT'---


get paramatre almaz. sadece neyi istediğini söyleyceksin...


-----Promises --
const myPromise = new Promise ((resolve, reject) => {
    //Do something


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
    Normalde bu aramalar en uzun sonucu gösterir. (greedy) ,
    aramaya uyan en kısa sonuç için '?' kullanıyoruz. 
    /t*[a-z]?i/ sonucu (titanic için) ti olur. buna lazy matching diyoruz. 
    ? kullanmasaydık en uzun sonuç olan titani gelecekti sonuç olarak.
    let reCriminals = /C+/; find all C's.
    /^yusuf/ şeklinde yazarsak sadece yusuf ile başlıyorsa bulur.
    /caboose$/ şeklinde yazarsak sadece bu ifadeyle bitiyorsa true. sonuna bakar sadece.
    let longHand = /[A-Za-z0-9_]+/;
    let shortHand = /\w+/; ne var ne yok ara bul.
    büyük W ile kullanırsak tam tersi harf ve rakamlar haricini gösteriyor. 
    uzun hali bu şekilde: /[^A-Za-z0-9_]/
    /\d/ only numbers the same as [0-9]
    /\D/ all non numbers
    \s whitespace 
    non whitepace = \S = [^ \r\t\f\n\v].
    Regex son bir kaç derse yeniden bakmak lazım anlamakta güçlük çektim.
    

    ----

    DEBUGGING

    if (x=y) ifadesi bir karşılaştırma değil atama ifadesidir. Burada x, y değerine atanıyor. bunun sonucunda bu değer bir sayıya eşit olabilir ve sonuç olarak bu sayılar farklı olsa da Boolean(10) değerei true return eder. 

    return Math.pow(b, e);


    ------------
    Arrays 

    indexOf

    for (let i = 0; i < arr.length; i++) {

    if(arr[i].indexOf(elem) == -1) { // indexOf methods returns -1 if it does not match.

      newArr.push(arr[i]);
    } 
  }

  

    --------------
    function mutation(arr) {
// convert element to lowecase string arrays;
let arr0 = arr[0].toLowerCase();
let arr1 = arr[1].toLowerCase();

// Check if each char is included in first element.
//indexOf method takes and argument and returns the index of this element. arr.indexOf("A") returns the index of A in arr.

for(let i=0; i<arr1.length; i++) {
  if (arr0.indexOf(arr1[i]) < 0)  return false;

} return true;
 
}

console.log(mutation(["helylo", "hey"]));



OOP---
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();


---constructor--
Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

conventions

-Uppercase ile başlar. Diğer fonskiyonlardan ayrılması için 
-this.name
this.age
this.methods() gibi this ile başlar. 
tanımlama yapar. genellikle bir şey return etmez.

= kullanılır. : değil.
en sonunda ; kullanılıyor. 

let newObj = new Obj() dediğin zaman consturctor fonksiyonu ile tanımlanan obje olşuturuluyor.
Değerlerini değiştirebiliriz fakat ilk oluştururken işe yaramadı. (contructor fonksihyonda parametre verilmeyince böyle oluyormuş. sonradan farkettim)

functin MyConstructor (param1, param2, param3 { // şeklinde tanımlarsak direkt new Objec(value1, val2, val3) şeklinde yapabiliyoruz.  

myHouse instanceof House // return true or false,
own properties : constructor içinde tanımlanan propertiler.

for (let prop in myObj) {
  if (myObj.hasOwnProperty(prop)) {
    props.push(prop);
  }
}
  
}

Bird.prototype.numLegs = 2; // bu şekilde bütün instancelerda olan property prototype içine atılıyor. 
Böylece tekrara düşmüyoruz. 
bunlar prototype props oluyor.


  return (candidate.constructor === Dog) ; // hangi constructordan oluşturulduğunu gösteriyor. 
  

console.log(Dog.prototype.isPrototypeOf(beagle)); // begle objesinin hangi prototypeini nereden inherit ettiğini gösteriyor.

---ınstance oluşturma yolları--
let duck = Object.create(Animal.prototype); // Inheritance ile
let beagle = Object.create(Animal.prototype); // Inheritance ile

let ducky = new Animal(); // standart ilk kullanılan yol

Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

----Array.Map()
maps takes a function as argument and apply this fallback function for all the elements in given array and returns a new array without chainging original array. 

const everyons = ;
