import { formatDistance, subDays } from "date-fns";
    //todo factory function
 function Todo(title, description, dueDate, priority, projectName) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectName = projectName;
}

function dateFormatter() {
    // add functionality later, while starting the DOM part to see how the format of the inputted date will be
}


export { Todo };