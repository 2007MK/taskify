// Object factory
function Todo(title, description, dueDate, priority, checked) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = generateID();
    this.completed = checked;
}

function generateID() {
    let id = Math.random().toString(36).substring(2, 9);
    return id;
}
export { Todo };