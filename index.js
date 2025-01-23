const newTask = document.getElementById('input');
const addTask = document.getElementById('addtask-btn');
const taskList = document.getElementById('tasks');
const clear = document.getElementById('clear-btn');

addTask.addEventListener("click", () => {
    addToList();
});

newTask.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        addToList();
    } 
});

clear.addEventListener("click", () => {
    taskList.innerHTML = '';
}); 

document.addEventListener("keydown", (e) => {
    if (e.metaKey && e.key === 'r') {
        taskList.innerHTML = '';
    }
});

document.addEventListener("keydown", (e) => {
    if (e.metaKey && e.key === 'k') {
        document.getElementById("input").focus();
    }
});

function addToList() {
    let text = newTask.value;
    if (text) {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const span = document.createElement('span');
        span.className = 'text';
        span.textContent = text;

        const closeButton = document.createElement('span');
        closeButton.className = 'material-symbols-outlined';
        closeButton.textContent = 'remove';

        listItem.addEventListener('click', () => {
            listItem.clicked = !listItem.clicked;
            if (listItem.clicked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
        });

        // listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(closeButton);
        taskList.appendChild(listItem);

        closeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        newTask.value = '';
    }   
}
