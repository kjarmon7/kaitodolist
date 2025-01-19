//Variable for the input field
const newTask = document.getElementById('input');
// Variable for the add task button
const addTask = document.getElementById('addtask-btn');
// Variable for the list of tasks
const taskList = document.getElementById('tasks');
// Variable for the clear button
const clear = document.getElementById('clear-btn');

// Adds a task to the list when the button is clicked
addTask.addEventListener("click", () => {
    addToList();
});

// Adds a task to the list when the enter key is pressed
newTask.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        addToList();
    } 
});

// Clears all tasks when the button is clicked
clear.addEventListener("click", () => {
    taskList.innerHTML = '';
}); 

// Clears all tasks when the command + R keys are pressed
document.addEventListener("keydown", (e) => {
    if (e.metaKey && e.key === 'r') {
        taskList.innerHTML = '';
    }
});

// Puts cursor in the the text field when Command + K is pressed
document.addEventListener("keydown", (e) => {
    if (e.metaKey && e.key === 'k') {
        document.getElementById("input").focus();
    }
});

// Function that adds task to the list
function addToList() {
    // Variable that gets the value from the input field
    let text = newTask.value;
    // If statement that checks if there is a value in the input field
    if (text) {
        // Variable that creates a new list item
        const listItem = document.createElement('li');
        // Creates a CSS class for the list item
        listItem.className = 'task-item';

        // Variable that creates a new span element so the text can be displayed
        const span = document.createElement('span');
        // Creates a CSS class for the span element
        span.className = 'text';
        // Sets the value of the text variable to the span element which adds the text from the input field to the list item
        span.textContent = text;

        // Variable that creates an input field
        const checkbox = document.createElement('input');
        // Sets the input field type to checkbox
        checkbox.type = 'checkbox';
        // Creates a CSS class for the checkbox
        checkbox.className = 'checkbox-btn';

        // Variable that creates a close button for each list item
        const closeButton = document.createElement('span');
        closeButton.className = 'material-symbols-outlined';
        closeButton.textContent = 'remove';

        // Adds a strikethrough to the span text if the checkbox is clicked
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
        });

        // Adds a strikethrough to the span text if the list item is clicked
        listItem.addEventListener('click', () => {
            listItem.clicked = !listItem.clicked;
            if (listItem.clicked) {
                span.style.textDecoration = 'line-through';
                checkbox.checked = true;
            } else {
                span.style.textDecoration = 'none';
                checkbox.checked = false;
            }
        });

        // Actually adds the checkbox to the list iitem
        listItem.appendChild(checkbox);
        // Actually adds the span to the list item
        listItem.appendChild(span);
        // Actually adds the close button to the list item
        listItem.appendChild(closeButton);
        // Adds the list item to the task list
        taskList.appendChild(listItem);

        // adds an event listener to the closeButton that removes the listItem from the parent which is taskList
        closeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        // Clears the input field after the task is added
        newTask.value = '';
    }   
}
