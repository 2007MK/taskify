import { Todo }from "./todo";
import { Project } from "./project";

const projectManager = (function() {
    let projects = []; //private 

    function getProjects() {
        return projects;
    }

    //create todo
    function createTodo(title, description, dueDate, priority, projectName) {
        let todo = new Todo(title, description, dueDate, priority, projectName);
        pushTodo(todo);
    }

    //create a project and push it to the projects Array
    function createProject(title) {
        let project = new Project(title);
        projects.push(project);
    }


    function pushTodo(todo) {
        // if projectName provided then push to the todos array of the respective project object
        if(todo.projectName) {
            projects.forEach(project => {
                if(project.title == todo.projectName) {project.todos.push(todo)};
            })
        } else {
            //pushed to the default project, if no projectName provided
            projects.forEach(project => {
                if(project.title == "default") {project.todos.push(todo)}
            })
        }

    }

    // creates a default project where the todos go when no other projectName is provided
    createProject("default");

    return {getProjects, createTodo, createProject, };
})();

export {projectManager}