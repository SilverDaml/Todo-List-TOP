export class TodoCreator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            throw new Error(`Container with ID '${containerId}' not found`);
        }
    }

    renderTodoItem(todoItem) {
        const { title, description, dueDate, priority } = todoItem;

        // Create todo item elements
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-item');

        const titleElement = document.createElement('h2');
        titleElement.textContent = `Title: ${title}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${description}`;

        const dueDateElement = document.createElement('p');
        dueDateElement.textContent = `Due date: ${dueDate}`;

        const priorityElement = document.createElement('span');
        priorityElement.textContent = `Priority: ${priority}`;

        // Append elements to todo item container if it exists
        if (this.container) {
            todoElement.appendChild(titleElement);
            todoElement.appendChild(descriptionElement);
            todoElement.appendChild(dueDateElement);
            todoElement.appendChild(priorityElement);

            // Append todo item to the container
            this.container.appendChild(todoElement);
        } else {
            console.error("Container not found");
        }
    }
}
