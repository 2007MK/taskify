import { Todo }from "./todo";
import { Project } from "./project";
import { renderNav, renderProjects } from "./render";
import { getCurrentTab } from "./appState"
import { navClickHandler, projectsClickHandler } from "./dom" 

const projectManager = (function() {
    let projects = []; //private 

    function getProjects() {
        return projects;
    }


    function createTodo(title, description, dueDate, priority, projectName, checked) {
        let todo = new Todo(title, description, dueDate, priority, checked);
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

    function getTodos(projectTitle) {
        for (const project of projects) {
            if(project.title == projectTitle) {
                return project.todos;
            }
        }
    }

    function getAllTodos() {
        let todos = [];
        for (const proj of projects) {
            for (const todo of proj.todos) {
                todos.push(todo);
            }
        }

        return todos;
    }

    function toggleStatus(e) {
        let todoID = e.target.id;
        let {projIndex, todoIndex} = findSpecificTodo(todoID);
        let project = projects[projIndex];
        let todo = project.todos[todoIndex];


        todo.completed = !todo.completed;

        if (getCurrentTab() === "inbox") {
            navClickHandler("inbox");
        }

    }

    function deleteTodo(id) {
        let {projIndex, todoIndex} = findSpecificTodo(id);
        let project = projects[projIndex];
        let todos = project.todos;
        todos.splice(todoIndex, 1);

        console.log(projects);

        if (getCurrentTab() === "inbox") {
            navClickHandler("inbox");
        } else {
            projectsClickHandler(getCurrentTab());
        }
        
    }


    function findSpecificTodo(id) {
        let projIndex;
        let todoIndex;
        for (const [index, proj] of projects.entries()) {
            let todos = proj.todos;
            for (const [index, todo] of todos.entries()) {
                if (todo.id === id) {
                    todoIndex = index;
                    break;
                }
            }
            projIndex = index;
            return {projIndex, todoIndex};
        }
    }


    function getCompletedTodos() {
        let todos = getAllTodos();
        let completedTodos = [];
        for (const todo of todos) {
            if (todo.completed) {
                completedTodos.push(todo);
            }
        }
        return completedTodos;
    }

    function getPendingTodos() {
        let todos = getAllTodos();
        let pendingTodos = [];
        for (const todo of todos) {
            if (!todo.completed) {
                pendingTodos.push(todo);
            }
        }
        return pendingTodos;
    }

    

    return {getProjects, createProject, createTodo, pushProject, getTodos, getAllTodos, toggleStatus, deleteTodo, getCompletedTodos, getPendingTodos}
})();

export {projectManager}