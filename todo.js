var input = document.getElementById("task-input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    addTodo();
    }
});

function frog() {
    console.log("Ribbit!");
}

function addTodo() {
    let task = document.getElementById("task-input").value;
    let todoList = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerText = task;
    todoList.appendChild(li);
}

function clearList() {
    let todoList = document.querySelector("ul");
    todoList.innerHTML = "";
}
