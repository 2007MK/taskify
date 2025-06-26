import { projectManager } from "./projectManager";
import { navClick } from "./dom";
import { newProjectModal } from "./modal";

export const render = (function () {

function renderPage() {
    
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

  // Navigation
  let navContainer = document.createElement("div");
  navContainer.className = "nav-container";
  let navUl = document.createElement("ul");

const navItems = [
  { text: "Inbox", icon: "inbox" },
  { text: "Today", icon: "today" },
  { text: "Upcoming", icon: "upcoming" }
];

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
  btn.addEventListener("click", (e) => navClick(e));
  
  // Add button to list
  li.appendChild(btn);
  navUl.appendChild(li);
});


// adding icons beside nav items


navContainer.appendChild(navUl);
sidebar.appendChild(navContainer);

// Projects Section
  let projectsContainer = document.createElement("div");
  projectsContainer.className = "projects-container";

  let headingWrapper = document.createElement("div");
    headingWrapper.className = "headingWrapper";
    let projectsHeading = document.createElement("h3");
    projectsHeading.textContent = "Projects";
    let newProjectBtn = document.createElement("button");
    newProjectBtn.id = "newProjectBtn";
    let newProjectIcon = document.createElement("span");
    newProjectIcon.className = "material-icons";
    newProjectIcon.textContent = "add";
    newProjectBtn.addEventListener("click", () => {newProjectModal()})
    newProjectBtn.appendChild(newProjectIcon);
  
  headingWrapper.appendChild(projectsHeading);
  headingWrapper.appendChild(newProjectBtn);
  projectsContainer.appendChild(headingWrapper);

  let projectsUl = document.createElement("ul");
  projectsUl.id = "project-list";
  
  let projects = projectManager.getProjects();
  projects.forEach((proj) => {
    let li = document.createElement("li");
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
    projectsUl.appendChild(li);
  });
  
  projectsContainer.appendChild(projectsUl);
  sidebar.appendChild(projectsContainer);
  
  // Main content area
  let main = document.createElement("div");
  main.className = "main";
  
  // Append to DOM
  container.appendChild(sidebar);
  container.appendChild(main);
}
// inbox(); // To open inbox by default on load
return { renderPage };
})();

