import {setCurrentTab, getCurrentTab} from './appState';
import {newProjectModal} from './modal'
import { projectManager } from './projectManager';

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


    // getting all the todos of that particular project
    let todos = projectManager.getTodos(projectName);

    console.log(todos);

};



export {clickHandler, navClickHandler}