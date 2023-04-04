//jshint esversion:6
let taskArr = [];

function addNewTask() {
  const input = document.getElementById("myInput").value;
  const list = document.querySelector("ul");
  console.log("value: " + input.innerHTML);

  if (input.length === 0) {
    console.log(input);
    console.log("Enter something");
  } else {
    const newTask = document.createElement("li");
    taskArr.push(newTask);

    // newTask.textContent = input;
    // newTask.classList.add("li");
    // const del = document.createElement("button");
    // del.innerHTML = "X";
    // newTask.append(del.innerHTML);

    // console.log("new task: " + newTask.innerHTML);
    // list.append(newTask);

    // del.addEventListener("onclick", function (e) {
    //   console.log(e);
    // });

  }
}

function clearInput() {
  document.getElementById("myInput").value = "";
}

const input = document.getElementById("myInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addNewTask();
    clearInput();
    showList();
  }
});

function removeTask() {
  

}

function showList() {
  let list = document.querySelector("main-list");
  for (let i = 0; i < taskArr.length; i++) {
    let child = taskArr[i];    
    list.append(child);
  }
}


function showArr() {
  console.log(taskArr);
}