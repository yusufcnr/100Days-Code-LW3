//jshint esversion:6

let count = document.querySelector(".count");

function add() {
    count.innerHTML++;
    changeColor();
} 

function subtract() {
    count.innerHTML --;
    changeColor();
}

function reset () {
    count.innerHTML = 0;
    changeColor();
}

function changeColor() {
    if (count.innerHTML < 0) {
        count.style.backgroundColor="red";
        
    }
    else if (count.innerHTML > 0) {
        count.style.backgroundColor="green";
    } else {
        count.style.backgroundColor = "blue";
    }
}