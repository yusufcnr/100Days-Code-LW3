//jshint esversion:6

function updateTime() {

    const today = new Date();
    const hours = today.getHours().toString().padStart(2,"0");
    const minutes = today.getMinutes().toString().padStart(2,"0");
    const seconds = today.getSeconds().toString().padStart(2,"0");
    const time = document.getElementById("time");

    time.textContent = `${hours} : ${minutes} :  ${seconds} `;

} 

setInterval(updateTime, 1000);