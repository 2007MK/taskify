import { Todo }from "./todo";
import { Project } from "./project";
import { renderNav, renderProjects } from "./render";

const projectManager = (function() {
    let projects = []; //private 

    function getProjects() {
        return projects;
    }

    function createTodo(title, description, dueDate, priority, projectName) {
        let todo = new Todo(title, description, dueDate, priority);
        pushTodo(todo, projectName);
        
    }

    function createProject(title) {
        if (projectExist(title) == false) {   
            let project = new Project(title);
            pushProject(project);
        } else {
            alert("Project Already Exists")
        }
        
    }

    function pushTodo(todo, projectName) {
        //if projectName given, search the array and push the todo in it.
        if(!(projectName === undefined)) {
            for (const proj of projects) {
                if(proj.title == projectName) {
                    proj.todos.push(todo);
                    break;
                }
            }
        } else {
            projects[0].todos.push(todo); //if no projectName given then simply push the todo to the first item, which will be "default" project
        }
        renderNav();
        renderProjects();
    }

    function pushProject(project) {
        projects.push(project);
        renderProjects();
    }

    function projectExist(title) {
        let projects = getProjects();
        for (let pObj of projects) {
                if(pObj.title == title) {
                    return true;
                } 
            }
            return false;
    }

    return {getProjects, createProject, createTodo, pushProject}
})();

export {projectManager}