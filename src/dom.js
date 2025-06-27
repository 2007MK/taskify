import {setCurrentTab, getCurrentTab} from './appState';
import {newProjectModal} from './modal'
import { projectManager } from './projectManager';
import { renderNewTaskBtn } from './render';

function clickHandler(e) {
  let item = e.currentTarget; 
  let parent = item.closest('div');

    if (parent.classList == "nav-container") {
        //storing the current tab, so that its easier to render todos for corresponding tabs later
        setCurrentTab(item.id); 
        console.log(`The Current tab is ${getCurrentTab()}`);
        navClickHandler(item.id)
        return;
    }
    
    if(parent.classList == "projects-container") {
        //storing the current tab, so that its easier to render todos for corresponding tabs later
        setCurrentTab(item.id);
        console.log(`The Current tab is ${getCurrentTab()}`);
        projectsClickHandler(item.id);
        return;
    }

    if(parent.classList == 'headingWrapper') {
        console.log("New Project btn clicked");
        newProjectModal();
    }

}


function navClickHandler(item) {
    let main = document.querySelector(".main");
    main.innerHTML = "";

    switch(item) {
        case 'inbox' : inbox(); break;
        case 'today' : today(); break;
        case 'upcoming' : upcoming(); break;
    }
}

    function inbox() {
        let main = document.querySelector(".main");
        let heading = document.createElement("h1");
        heading.textContent = "Inbox";
    
        main.appendChild(heading);
    }
    
    function today() {
    let main = document.querySelector(".main");
        let heading = document.createElement("h1");
        heading.textContent = "Today";
    
        main.appendChild(heading);
    };
    
    function upcoming() {
        let main = document.querySelector(".main");
        let heading = document.createElement("h1");
        heading.textContent = "Upcoming";
    
        main.appendChild(heading);
    };


function projectsClickHandler(projectName) {
    let main = document.querySelector(".main");
    main.innerHTML = "";
    let heading = document.createElement("h1");
    heading.textContent = projectName;
    main.appendChild(heading);
    renderNewTaskBtn();

    // getting all the todos of that particular project
    let todos = projectManager.getTodos(projectName);
    console.log(todos);

    //making the container and the list where all the todos go
    let todoContainer = document.createElement("div");
        todoContainer.setAttribute("class", "todo-container");
    
    let todoList = document.createElement("ul");
        todoList.setAttribute("class", "todo-list");

    for (const todo of todos) {
        
        let li = document.createElement("li");
        let leftSection = document.createElement("div");
            leftSection.setAttribute("class", "left-section");
            let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
            let taskName = document.createElement("label");
                taskName.textContent = todo.title;
                taskName.setAttribute("for", todo.id);
                checkbox.setAttribute("id", todo.id);

        leftSection.appendChild(checkbox);
        leftSection.appendChild(taskName);
        li.appendChild(leftSection);
        todoList.appendChild(li);
        
        todoContainer.appendChild(todoList);
        main.appendChild(todoContainer);
    }
        
};
    


export {clickHandler, navClickHandler, projectsClickHandler}