//jshint esversion:6

const count = document.querySelector(".count");

const add = document.querySelector(".add");
const substract = document.querySelector(".substract");
const reset = document.querySelector(".reset");


const test = document.querySelector(".test");


test.addEventListener.click = test.style.color = "red";

add.addEventListener("onclick", () => {
    count.innerHTML = "Date";
    changeColor();
});

substract.addEventListener("click", () => {
    count.innerHTML --;
    changeColor();
});

reset.addEventListener("click", () => {
    count.innerHTML =0;
    changeColor();
});

function changeColor() {
    if (count.innerHTML < 0) {
        count.style.color ="yellow";
    } else if (count.innerHTML > 0) {
        count.style.color = "black";
    } else  {
        count.style.color = "white";}
}

