// Get the input element with id "input-box" and assign it to the variable 'inputBox'
const inputBox = document.getElementById("input-box");

// Get the ul element with id "list-container" and assign it to the variable 'ListContainer'
const ListContainer = document.getElementById("list-container");

// Function to add a new task
function AddTask() {
    // Check if the input field is empty
    if (inputBox.value === '') {
        // If input field is empty, show an alert message
        alert("you must write something!");
    } else {
        // If input field is not empty, create a new list item element
        let li = document.createElement("li");
        // Set the innerHTML of the new list item to the value of the input field
        li.innerHTML = inputBox.value;
        // Append the new list item to the list container
        ListContainer.appendChild(li);
        // Create a new span element
        let span = document.createElement("span");
        // Set the innerHTML of the span to '×' (close icon)
        span.innerHTML = "\u00d7";
        // Append the span to the new list item
        li.appendChild(span);
    }
    // Clear the input field after adding the task
    inputBox.value = "";
}

// Event listener for clicks on the list container
ListContainer.addEventListener("click", function(e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class on the clicked list item
        e.target.classList.toggle("checked");
        // Save the updated data to local storage
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // If the clicked element is a span (close icon), remove its parent list item
        e.target.parentElement.remove();
        // Save the updated data to local storage
        saveData();
    }
}, false);

// Function to save the data to local storage
function saveData() {
    // Store the HTML content of the list container in local storage under the key "data"
    localStorage.setItem("data", ListContainer.innerHTML);
}

// Function to retrieve and display tasks from local storage
function showTask() {
    // Set the innerHTML of the list container to the data stored in local storage
    ListContainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function to display tasks when the page loads
showTask();