//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('filter-todo');

// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event) {
    event.preventDefault();
    // CREATE ELEMENT
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // CREATE li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // CHECKMARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // APPEND TO LIST
    todoList.appendChild(todoDiv)
    //  Clear todo INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target

    // DELETE TODO
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    if (item.classList[0]==="complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

function filterTodo(e){
    const todos = todoList.childNodes
    console.log(todos)
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                break;
            case "completed":
                if(todo.classList.contains("complete")){
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
        }
    }
}
 