//jshint esversion:6
function getDate() {

    const today = new Date();
    const currentDateTime = today.getTime();
    const dateInput = document.querySelector("#selected_date");
    dateInput.defaultValue = "2033-10-29";

    const timeInput = document.querySelector("#selected_time");
    timeInput.defaultValue = "11:22";

    const selectedDate = dateInput.value;
    const selectedTime = timeInput.value;

    //Do not forget to convert it Date() object
    const selectedDateTime = new Date(selectedDate + " " + selectedTime + ":00.000");

    let duration = selectedDateTime.getTime() - currentDateTime;
    console.log(duration);

    let remainingTime = duration;

    const years = Math.floor(remainingTime / (365 * 24 * 60 * 60 * 1000));
    remainingTime -= years * 365 * 24 * 60 * 60 * 1000;

    const months = Math.floor(remainingTime / (30 * 24 * 60 * 60 * 1000));
    remainingTime -= months * 30 * 24 * 60 * 60 * 1000;

    const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
    remainingTime -= days * 24 * 60 * 60 * 1000;

    const hours = Math.floor(remainingTime / (60 * 60 * 1000));
    remainingTime -= hours * 60 * 60 * 1000;

    const minutes = Math.floor(remainingTime / (60 * 1000));
    remainingTime -= minutes * 60 * 1000;

    const seconds = Math.floor(remainingTime / 1000);
    remainingTime -= seconds * 1000;

    //show in the result area:
    const countDownMessage = `Time remaining: Years: ${years}, Months: ${months}, Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
    const result = document.querySelector("#result");

    result.textContent = countDownMessage;
    // console.log(countDownMessage);

 

}
setInterval(getDate, 1100);
