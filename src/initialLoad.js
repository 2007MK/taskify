export const initialLoad = (function () {
  let container = document.querySelector(".container");

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

  ["Inbox", "Today", "Upcoming"].forEach((text) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.textContent = text;
    btn.className = "sidebar-btn";
    li.appendChild(btn);
    navUl.appendChild(li);
  });

  navContainer.appendChild(navUl);
  sidebar.appendChild(navContainer);

  // Projects Section
  let projectsContainer = document.createElement("div");
  projectsContainer.className = "projects-container";

  let projectsHeading = document.createElement("h3");
  projectsHeading.textContent = "Projects";
  projectsContainer.appendChild(projectsHeading);

  let projectsUl = document.createElement("ul");
  projectsUl.id = "project-list";

  ["Default", "test", "test2"].forEach((proj) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.textContent = proj;
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
})();
