//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event listeners
todoButton.addEventListener('click', addTodo);

// Functions
function addTodo(event) {
    event.preventDefault();
    console.log('hello')
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = "hey";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // CHECKMARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check> <i/>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash> <i/>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
}
