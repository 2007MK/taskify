import { projectManager } from "./projectManager";
import { clickHandler, inbox } from "./dom";
import { getCurrentTab } from "./appState";
import { newTodoModal } from "./modal";


function renderStructure() {

  let container = document.querySelector(".container");
  container.innerHTML = "";
  
  // Sidebar
  let sidebar = document.createElement("div");
  sidebar.className = "sidebar";

// Logo
let logo = document.createElement("h1");
logo.className = "logo";
logo.textContent = "Taskify";
sidebar.appendChild(logo);

// nav
let navContainer = document.createElement("div");
navContainer.className = "nav-container";

// projects
let projectsContainer = document.createElement("div");
projectsContainer.className = "projects-container";

// Main content area
let main = document.createElement("div");
main.className = "main";


// Append to DOM
sidebar.appendChild(navContainer);
sidebar.appendChild(projectsContainer);
container.appendChild(sidebar);
container.appendChild(main);
}
   


function renderNav() {
  let navContainer = document.querySelector(".nav-container");
    navContainer.innerHTML = "";
  let navUl = document.createElement("ul");
  const navItems = [
    { text: "Inbox", icon: "inbox" },
    { text: "Today", icon: "today" },
    { text: "Upcoming", icon: "upcoming" }
  ];

  // Navigation
  
  navItems.forEach(({ text, icon }) => {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.className = "sidebar-btn";
  btn.id = text.toLowerCase();
  
  // Create the icon span
  let iconSpan = document.createElement("span");
  iconSpan.className = "material-icons";
  iconSpan.textContent = icon;
  
  // Create the label span
  let labelSpan = document.createElement("span");
  labelSpan.textContent = text;
  
  // Add both to the button
  btn.appendChild(iconSpan);
  btn.appendChild(labelSpan);
  
  // Add click event
  btn.addEventListener("click", (e) => clickHandler(e));
  
  // Add button to list
  li.appendChild(btn);
  navUl.appendChild(li);
  });

  //appending
  navContainer.appendChild(navUl);
}


function renderProjects() {
  let projectsContainer = document.querySelector(".projects-container");
  projectsContainer.innerHTML = ""; //clearing the content if any

  // creating the Projects Heading with a button to create a new Project
  let headingWrapper = document.createElement("div");
    headingWrapper.className = "headingWrapper";
    let projectsHeading = document.createElement("h3");
    projectsHeading.textContent = "Projects";
    let newProjectBtn = document.createElement("button");
    newProjectBtn.id = "newProjectBtn";
    newProjectBtn.addEventListener("click", (e) => { clickHandler(e) })
    let newProjectIcon = document.createElement("span");
    newProjectIcon.className = "material-icons";
    newProjectIcon.textContent = "add";
    newProjectBtn.appendChild(newProjectIcon);
    
    // appending
    headingWrapper.appendChild(projectsHeading);
    headingWrapper.appendChild(newProjectBtn);
    projectsContainer.appendChild(headingWrapper);
    
    let projectsUl = document.createElement("ul");
    projectsUl.id = "project-list";
    
    let projects = projectManager.getProjects();
    
    
    projects.forEach(proj => {
      let li = document.createElement("li");
      li.id = proj.title;
      
      let btn = document.createElement("button");
      let iconSpan = document.createElement("span");
      iconSpan.setAttribute("class", "material-icons")
    iconSpan.textContent = "tag";
    let labelSpan = document.createElement("span");
    labelSpan.textContent = proj.title;
    btn.appendChild(iconSpan);
    btn.appendChild(labelSpan);
    btn.className = "project-btn";
    li.appendChild(btn);
  
    li.addEventListener("click", (e) => { clickHandler(e) }) //to display only those tasks if clicked on a project
  
    projectsUl.appendChild(li);
  });
  
  projectsContainer.appendChild(projectsUl);  
};


function renderNewTaskBtn() {
  let main = document.querySelector(".main");
  let newTaskBtn = document.createElement("button");
    newTaskBtn.setAttribute("class", "new-task-btn");
    let iconSpan = document.createElement("span");
    iconSpan.setAttribute("class", "material-icons");
    iconSpan.textContent = "add";

    newTaskBtn.addEventListener("click", () => { newTodoModal() } )
    
   newTaskBtn.appendChild(iconSpan);
   main.appendChild(newTaskBtn);
    
}



export {renderStructure, renderNav, renderProjects, renderNewTaskBtn}