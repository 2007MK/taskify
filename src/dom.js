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

        let cardsContainer = document.createElement("div");
            cardsContainer.setAttribute("class", "cards-container");
        
        // making the cards
        let totalTodosDiv = document.createElement("div");
            totalTodosDiv.setAttribute("class", "inbox-card");
            totalTodosDiv.setAttribute("id", "total-todos");
        
            let totalTodosTitle = document.createElement("h2");
            totalTodosTitle.textContent = "Total Todos";

            let allTodos = projectManager.getAllTodos();
            let totalTodos = document.createElement("h3");
            totalTodos.textContent = allTodos.length;
            totalTodos.setAttribute("class", "card-content");

            totalTodosDiv.appendChild(totalTodosTitle);
            totalTodosDiv.appendChild(totalTodos);
            cardsContainer.appendChild(totalTodosDiv);

        let totalCompletedDiv = document.createElement("div");
            totalCompletedDiv.setAttribute("class", "inbox-card");
            totalCompletedDiv.setAttribute("id", "total-completed");
        
            let totalCompletedTitle = document.createElement("h2");
            totalCompletedTitle.textContent = "Completed";

            let completedTodos = projectManager.getCompletedTodos();
            let totalCompletedTodos = document.createElement("h3");
            totalCompletedTodos.textContent = completedTodos.length;
            totalCompletedTodos.setAttribute("class", "card-content");

            totalCompletedDiv.appendChild(totalCompletedTitle);
            totalCompletedDiv.appendChild(totalCompletedTodos);
            cardsContainer.appendChild(totalCompletedDiv);

        let totalPendingDiv = document.createElement("div");
            totalPendingDiv.setAttribute("class", "inbox-card");
            totalPendingDiv.setAttribute("id", "total-pending");
        
            let totalPendingTitle = document.createElement("h2");
            totalPendingTitle.textContent = "Pending";
            
            let pendingTodos = projectManager.getPendingTodos();
            let totalPendingTodos = document.createElement("h3");
            totalPendingTodos.textContent = pendingTodos.length;
            totalPendingTodos.setAttribute("class", "card-content");

            
            totalPendingDiv.appendChild(totalPendingTitle);
            totalPendingDiv.appendChild(totalPendingTodos);
            cardsContainer.appendChild(totalPendingDiv);


        
        main.appendChild(heading);
        main.appendChild(cardsContainer);

        let listHeading = document.createElement("h3");
        listHeading.textContent = "All Tasks";
        main.appendChild(listHeading);
        projectsClickHandler("inbox");
        console.log(projectManager.getProjects());
        
    }
    
    function today() {
    let main = document.querySelector(".main");
    main.innerHTML="";    
    let heading = document.createElement("h1");
        heading.textContent = "Today";
    
        main.appendChild(heading);

        projectsClickHandler("today");
    };
    
    function upcoming() {
        let main = document.querySelector(".main");
        main.innerHTML="";
        let heading = document.createElement("h1");
        heading.textContent = "Upcoming";
    
        main.appendChild(heading);

        projectsClickHandler("upcoming");
    };


function projectsClickHandler(projectName) {
    let todos = projectManager.getTodos(projectName);
    let main = document.querySelector(".main");

    // if (projectName === "inbox") {
    //     todos = projectManager.getAllTodos();    
    // } else {
    //     main.innerHTML="";
    //     let heading = document.createElement("h1");
    //     heading.textContent = projectName;
    //     main.appendChild(heading);
    //     renderNewTaskBtn();
    // }

    switch(projectName) {
        case 'inbox': todos = projectManager.getAllTodos(); break;
        case 'today': todos = projectManager.getTodayTodos(); break;
        case 'upcoming': todos = projectManager.getUpcomingTodos(); break;
        default : {
            main.innerHTML="";
            let heading = document.createElement("h1");
            heading.textContent = projectName;
            main.appendChild(heading);
            renderNewTaskBtn();
            break;
        } 
    }

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
                checkbox.addEventListener('change', (e) => projectManager.toggleStatus(e));

            if (todo.completed) {
                checkbox.checked = true;
            }

            switch(todo.priority) {
                case 'high': li.classList.add("high"); break;
                case 'medium': li.classList.add("medium"); break;
                case 'low': li.classList.add("low"); break;
            }
            
            let taskName = document.createElement("label");
                taskName.textContent = todo.title;
                taskName.setAttribute("for", todo.id);
                checkbox.setAttribute("id", todo.id);

        leftSection.appendChild(checkbox);
        leftSection.appendChild(taskName);

        let rightSection = document.createElement("div");
            rightSection.setAttribute("class", "right-section");
        let deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class", "todo-delete-btn");
            deleteBtn.addEventListener("click", (e) => projectManager.deleteTodo(todo.id));
        let iconSpan = document.createElement("span");
            iconSpan.setAttribute("class", "material-icons");
            iconSpan.textContent = "delete";

        deleteBtn.appendChild(iconSpan);
        rightSection.appendChild(deleteBtn);

        li.appendChild(leftSection);
        li.appendChild(rightSection);
        todoList.appendChild(li);
        
        todoContainer.appendChild(todoList);
        main.appendChild(todoContainer);
    }
        
};
    


export {clickHandler, navClickHandler, projectsClickHandler}