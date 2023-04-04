JavaScript DOM Manipulation
0-Selecting Elements
1-Adding Elements
2-Creating Elements
3-Modifying Elements:Texts
4-Modifying Elements: HTML
5-Removing Elements
6-Modifying Element Attributes
7-Modifying Data Attributes
8-Modifying Element Classes
9-Modifying Element Style

const body = document.body; ile body elementini seçelim.
sonrasında bunun üzerinde işlemler yapacağız.

Öncelikle script.js body kısmının en altında olacak. Yoksa önce sctipt çalışıp sonra html'in kalan kısmı çalıştığı için sctiptte yapılan işlemler yapılmıyor. hata veriyor.

--append and appendChild
Tamamen aynı şekilde çalışıyor fakat appendChild ile text ekleyemiyoruz. append ile hem text hem de başka bir child element ekleyebiliriz.

--

bir elementin başka bir elemente eklemek için öncelikle createElement methodu ile oluştur.
Sonra appendChild ile parente ekle.

const div = document.createElement("div");
body.appendChild(div);

div.innerText = "asda"
div.textContenct = "kasjd"

Difference between innerText and innerHTML: Yazdığımız text html olarak işlenmesini istiyorsak innerHTML kullaacağız.
Yoksa ne yazarsak hepsini string olarak geçer.

div.innerText = "<strong> I am strong HTML</strong>";
div.innerHTML = "<strong> I am strong HTML</strong>";
ama direkt olarak innerHTML almak security açısından problem olabilir.

const strong = document.createElement("strong");
strong.innerHTML = "i am strong element inner HTML";
div.appendChild(strong);

şeklinde kullanılabilir.

in order to remove an element just use;
element.remove()

we can also use removeChild() method

get attributes of the element

const spanHi = document.getElementById("hi");
const spanBye = document.getElementById("bye");

console.log(spanHi.getAttribute("id"));
console.log(spanBye.getAttribute("class"));

similaryl if we want to change the attributes we can use setAttributes method.
spanBye.setAttribute("title", "this is title");

we can also remove attributes like:

spanBye.removeAttributes("id");

Data attribute

when we set a data attribute to an element like this:
spanBye.setAttribute("data-htkm-test", "this is data item");
JS initializes an array with dataset:
we can check it with:
console.log(spanBye.dataset);
JS removes the data part and change rest of it to camelCase

so it finally like this:

htkmTest: "this is data item"

class ekleme/çıkarma

div.classList.add("divClas")
div.classList.remove("divClas")
div.classList.toggle("divClas")

finally modify style:

spanHi.style.backgroundColor="red";

---

Learn JavaScript DOM Traversal

00:00 - Introduction
01:34 - getElementById
03:04 - getElementsByClassName
04:16 - QuerySelector
06:48 - querySelectorAll
07:50 - Selecting Children
09:19 - Selecting Descendants
10:39 - Selecting Parents
12:00 - Selecting Ancestors
13:15 - nextElementSibling
13:51 - previousElementSibling

const parent = document.getElementById("parent");
//document.getElementById returns single element. it makes sense coz
//there would be only one element with any id,

const boxes = document.getElementsByClassName("box");
//this selects all the element which has class name "box"

//this returns a list of elements. we can use this list to iterate
//but we need to convert it to Array first in order to use forEach loog

const boxes_arr = Array.from(document.getElementsByClassName("box"));

boxes_arr.forEach((style.color = "red"));

const selectedElem = document.querySelectorAll("h1");
const selectedElems = document.querySelectorAll("div");

in order to select all elements with class = h11;
const h1s = document.querySelectorAll(".h11");

if we want to select all with id we can use;
const h1s = document.querySelector("#h11");

---

Selecting parents and children

const grandparent = document.querySelector("grand-parent");
const parents = Array.from(grandparent.children);
parents.forEach(console.log);
const parent1 = parents[0];
const children = Array.from(parent1.children);
changeColor(children[0]);

querySelector burada da kullanılabilir.
const childs = grandparent.querySelectorAll(".child");

---going upwards--

const parenta = children.parentElement;

const grandparents = parents.parentElement;

changeColor(parenta);
changeColor(grandparents);

Peki bir parent atlamak istersek

closest ile yapıyoruz.
const grandgrandparent = childOne.closest(".randgrandparent");

Select siblings
const child2 = childOne.nextElementSibling;
changeColor(child2);

const child0 = childOne.previousElementSibling;
