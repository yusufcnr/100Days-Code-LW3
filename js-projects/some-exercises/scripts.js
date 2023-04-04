//jshint esversion:6
let number = document.querySelector(".num-area");
let zeynep = document.querySelector(".zeynep");
    

function newRandom() {
    console.log("clicked");

    document.querySelector(".num-area").innerHTML = Math.floor(Math.random() *100);

}

const btn = document.querySelector(".btnColor");
const dblBtn = document.querySelector(".dblClk");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const rndColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
    document.body.style.backgroundColor = rndColor;
});


dblBtn.addEventListener("dblclick", () => {
    console.log("doduble clicked");
    dblBtn.style.color="red";
    dblBtn.innerHTML = "i was doubl clicked";
});


btn.addEventListener("mouseover", () => {
    btn.innerHTML = "There is a pointer over me";
});

btn.addEventListener("mouseout", () => {
    btn.innerHTML = "Pointer just gtoh!";
});


zeynep.addEventListener("mouseover", () => {
    zeynep.innerHTML = "Baba Zeynep'i çok seviyor! ♥♥♥";
    bigFont();
});

zeynep.addEventListener("mouseout", () => {
    zeynep.innerHTML= "Hala Seviyor ♥♥♥";
});

function bigFont() {
    zeynep.style.width = '200px';
    zeynep.style.width='200px';
    zeynep.style.height='100px';
    zeynep.rotate = "90deg";
    
}