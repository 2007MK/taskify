import {projectManager} from './projectManager'
import {Project} from './project';


export const Storage = (function() {

    function updateStorage() {
        let projectsInJSON = JSON.stringify(projectManager.getProjects())
        localStorage.setItem("Project", projectsInJSON);
        console.log("Storage Updated");
    }

    function loadStorage() {
        let isLocalStoragePresent = localStorage.getItem("Project");
        if (!isLocalStoragePresent) {
        let project = new Project("default"); //default project
        projectManager.pushProject(project); 
        projectManager.createTodo("Complete science assignment", "test", "test", "high", "default", true);
        projectManager.createTodo("Get Milk", "test", "test", "medium", "default", true);
        projectManager.createTodo("Workout for 200 mins", "test", "high", "low", "default", false);
        console.log("No storage Present");
        return;
        } 

       let rawProjectsArray = JSON.parse(localStorage.getItem("Project"));
       console.log(rawProjectsArray);
       
        //rehydration
        for (const element of rawProjectsArray) {
            projectManager.rehydrateProject(element.title);
            let todos = element.todos;
            for (const todo of todos) {
                projectManager.rehydrateTodo(todo.title, todo.description, todo.dueDate, todo.priority, element.title, todo.completed);
            }
        }


        

        console.log(projectManager.projects);
        

    }

    return {updateStorage, loadStorage}
})();

