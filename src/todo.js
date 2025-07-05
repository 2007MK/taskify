// Object factory
function Todo(title, description, dueDate, priority, checked, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = checked;
    this.id = id;
    if(id == undefined) this.id = generateID();
}

function generateID() {
    let id = Math.random().toString(36).substring(2, 9);
    return id;
}
export { Todo };