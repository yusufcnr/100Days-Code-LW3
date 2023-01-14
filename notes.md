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