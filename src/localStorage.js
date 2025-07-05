import {projectManager} from './projectManager'
import {Project} from './project';
import { format, addDays } from 'date-fns'


export const Storage = (function() {

    function updateStorage() {
        let projectsInJSON = JSON.stringify(projectManager.getProjects())
        localStorage.setItem("Project", projectsInJSON);
        // console.log("Storage Updated");
    }

    function loadStorage() {
        let isLocalStoragePresent = localStorage.getItem("Project");
        if (!isLocalStoragePresent) {
        let project1 = new Project("Personal"); //default project
        let project2 = new Project("Home"); //default project
        let project3 = new Project("Work"); //default project
        projectManager.pushProject(project1); 
        projectManager.pushProject(project2); 
        projectManager.pushProject(project3);

        let today = format(new Date(), 'yyyy-MM-dd').toString(); //getting today's date

        projectManager.createTodo("Complete science assignment", "complete", '2025-12-12', "high", "Personal", false);
        projectManager.createTodo("Get Milk", "test", today, "medium", "Home", false);
        projectManager.createTodo("Workout for 30 mins", "test", today, "low", "Personal", false);
        projectManager.createTodo("Watch lecture", "complete", '2025-12-12', "medium", "Personal", true);
        projectManager.createTodo("Clean room", "test", today, "high", "Home", true);
        console.log("No storage Present");
        return;
        } 

       let rawProjectsArray = JSON.parse(localStorage.getItem("Project"));
    //    console.log(rawProjectsArray);
       
        //rehydration
        for (const element of rawProjectsArray) {
            projectManager.rehydrateProject(element.title);
            let todos = element.todos;
            for (const todo of todos) {
                projectManager.rehydrateTodo(todo.title, todo.description, todo.dueDate, todo.priority, element.title, todo.completed);
            }
        }


        

        // console.log(projectManager.projects);
        

    }

    return {updateStorage, loadStorage}
})();

