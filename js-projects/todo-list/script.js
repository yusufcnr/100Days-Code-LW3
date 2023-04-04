//jshint esversion:6
let counter = 0;

function addNewTask() {
  const input = document.getElementById("myInput").value;
  const list = document.querySelector("ul");
  console.log("value: " + input.innerHTML);

  if (input.length === 0) {
    console.log(input);
    console.log("Enter something");
  } else {
    const newTask = document.createElement("li");

    newTask.textContent = input;
    newTask.classList.add("li");
    console.log(list);

    console.log("new task: " + newTask.innerHTML);
    newTask.setAttribute("id", "li-" + counter);
    list.appendChild(newTask);
    counter++;
    newTask.addEventListener("click", function () {
      newTask.classList.toggle("completed");
    });

    newTask.addEventListener("dblclick", () => {
      newTask.remove();
    });
    
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
  }
});

function removeAllTasks() {
  const tasks = document.querySelectorAll("li");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].remove();
    console.log(`${tasks[i]} removed. `);
  }

}