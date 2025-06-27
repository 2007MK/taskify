// Object factory
function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = generateID();
}

function generateID() {
    let id = Math.random().toString(36).substring(2, 9);
    return id;
}
export { Todo };