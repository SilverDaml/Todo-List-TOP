import { TodoCreator } from './modules/todoCreator.js';

export const blankProjectLoad = () => {
    const todoCreator = new TodoCreator('todo-container');

    // Create a default todo item
    const defaultTodo = new TodoItem("Default Todo", "This is a default todo item", "2024-03-25", "Low");
    
    // Render the default todo item
    todoCreator.renderTodoItem(defaultTodo);

    // Button to add new todo items
    const addTodoBtn = document.createElement('button');
    addTodoBtn.textContent = 'Add Todo';
    addTodoBtn.addEventListener('click', () => {
        const newTodo = new TodoItem("New Todo", "Description goes here", "2024-03-26", "Medium");
        todoCreator.renderTodoItem(newTodo);
    });

    // Append the button to the container
    const todoContainer = document.getElementById('todo-container');
    if (todoContainer) {
        todoContainer.appendChild(addTodoBtn);
    } else {
        console.error("Container 'todo-container' not found");
    }
}

class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
