//jshint esversion:6
let time;

function getDate() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentSecond = now.getSeconds();
  const currentTime = new Date().getTime();

  const dateInput = document.querySelector("#selected_date");
  dateInput.defaultValue = "2033-10-29";

  const result = document.querySelector("#result");
  const selectedDate = dateInput.value;
  const timeInput = document.querySelector("#selected_time");
  timeInput.defaultValue = "11:22";
  const selectedTime = timeInput.value;

  // const secondUntil = Date.parse(selectedDate);
  // console.log(secondUntil);

    const selectedTimeString = (selectedDate + " " + selectedTime + "00.000");
    console.log(selectedTimeString);
  

    const duration = Date.parse(selectedTimeString - currentTime).toString();
    //console.log(duration);

    let remainingTime = currentTime;



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

//    console.log(
//       `Years: ${years}, Months: ${months}, Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
// );



    // time = 365 * 24 * 60 * 60 * 1000;
    // const years = Math.floor(delta / time).toString();
    // time = delta - years * time;
    // const months = Math.floor(time / (30 * 24 * 60 * 60 * 1000));
    // time = delta - months * 30 * 24 * 60 * 60 * 1000;
    
    // const days = Math.floor(time / (12 * 24 * 60 * 60 * 1000)); 
    // hours = delta.seconds; // 3600
    // minutes = delta.seconds % 3600; // 60
    // seconds = delta.seconds % 60;

    // console.log(years);
    // console.log(months);
    // console.log(days);

    
}

setInterval(getDate, 1100);
