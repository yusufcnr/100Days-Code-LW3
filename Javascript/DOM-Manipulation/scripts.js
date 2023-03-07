//jshint esversion:6

const body = document.body; // select body element
const h1 = document.createElement("h1");
h1.textContent = "this is h1 content";
body.appendChild(h1);

const div = document.createElement("div");
body.appendChild(div);
div.innerText = "<strong> I am strong HTML</strong>";
div.classList.toggle("div");

console.log(div.classList);
div.innerText += "inner Text";

const strong = document.createElement("strong");
strong.innerHTML = "i am strong element inner HTML";
div.appendChild(strong);

strong.remove();
// remove() does not remove the element from existens. when you call it back it appears.

div.appendChild(strong);

div.removeChild(strong); // why do we need this?

const spanHi = document.getElementById("hi");
const spanBye = document.getElementById("bye");

console.log(spanHi.getAttribute("id"));
console.log(spanBye.getAttribute("class"));
spanBye.setAttribute("title", "titleee span bye");
spanBye.setAttribute("data-htkm-test", "this is data item");
spanBye.setAttribute("data-longer-text", "longer data text");

spanBye.title = "askdjjjj"; //bu şekilde de değiştirebiliriz.
spanBye.removeAttribute("title");
console.log(spanBye.dataset);
console.log(spanBye.dataset.longerText);

spanHi.classList.add("new-classe");
spanHi.classList.remove("new-class");
spanBye.classList.toggle("toggle-clas");
spanHi.classList.add("hi-class");

spanHi.classList.toggle("hi-class", false);

spanHi.style.color = "red";
spanBye.style.backgroundColor = "yellow";

/*----------------------------*/

const parent = document.getElementById("parent");
//document.getElementById returns single element. it makes sense coz
//there would be only one element with any id,

const boxes = document.getElementsByClassName("box");
//this selects all the element which has class name "box"

//this returns a list of elements. we can use this list to iterate
//but we need to convert it to Array first in order to use forEach loog

const h11 = document.createElement("h1");
body.appendChild(h11);
h1.innerHTML = "this should be changed by func";
h1.classList.add("h11");

const h12 = document.createElement("h1");
body.appendChild(h12);
h12.innerHTML = "this is from h122";
h12.classList.add("h11");

const boxes_arr = Array.from(document.getElementsByClassName("box"));

boxes_arr.forEach(changeColor);

const selectedElem = document.querySelectorAll("h1");
const selectedElems = document.querySelectorAll("div");

selectedElems.forEach(changeColor);

const h1s = document.querySelectorAll(".h11");
const h1sarr = Array.from(h1s);

h1sarr.forEach(changeColor);

h1s.forEach(yesileBoya);
function changeColor(element) {
  element.style.backgroundColor = "gray";
}

function yesileBoya(element) {
    element.style.color = "green";
}


const grandparent = document.querySelector("grand-parent");
const parents = Array.from(grandparent.children);
parents.forEach(console.log);