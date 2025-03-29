var input = document.getElementById("task-input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        newElement();
    }
});

// Important Frog Function
function frog() {
    console.log("Ribbit!");
}

// Add new element
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task-input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("task-list").appendChild(li);
    }
    document.getElementById("task-input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Checkboxes
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    }
}, false);

// Close button
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}

// Clear list
function clearList() {
    let todoList = document.querySelector("ul");
    todoList.innerHTML = "";
}