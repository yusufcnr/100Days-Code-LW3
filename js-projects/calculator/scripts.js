//jshint esversion:6

const subBtn = document.querySelector("#sub-btn");
subBtn.addEventListener("click", () => {
    getNumbers();
    sub();
    showResult();    

});



const sumBtn = document.querySelector("#sum-btn");
sumBtn.addEventListener("click", () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    let result = num1 + num2;
    const resultText = document.querySelector("#result-area");
    resultText.textContent = result;
    
});


function getNumbers() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    let numbers = { num1, num2 };
    return numbers;
    
}

function showResult() {
    const resultText = document.querySelector("#result-area");
    resultText.textContent = add();

}

function everything() {
    const { num1, num2 } = getNumbers();
    let result = add(num1, num2);    
    showResult(result);
}

function add() {
    const {num1, num2} = getNumbers();
    return num1 + num2;
}

function sub() {
    const { num1, num2 } = getNumbers();
    return num1 - num2;

    
}

    
