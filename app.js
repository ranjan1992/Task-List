// Define the UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event Listeners

loadEventListeners();

// Load all event Listeners

function loadEventListeners() {
  // Add Task Event
  form.addEventListener("submit", addTask);

  //Remove Task Event
  taskList.addEventListener("click", removeTask);
}

//Add Task

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  } else {
    // Create an li element
    const li = document.createElement("li");
    //Add a Class
    li.className = "collection-item";
    //Create the text-node
    li.appendChild(document.createTextNode(taskInput.value));
    //Create a new link
    const link = document.createElement("a");
    //Add class
    link.className = "delete-item secondary-content";
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);

    console.log(li);

    //Clear Input

    taskInput.value = "";

    e.preventDefault();
  }
}

//Remove Task

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you Sure ?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
