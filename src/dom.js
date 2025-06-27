

function clickHandler(e) {
  let currentTab = e.target.id; 
  let item = e.currentTarget; 
  let parent = item.closest('div');
  console.log(`Clicked on ${item}`);
  console.log(`The parent container is ${parent.classList}`);

  if (parent.classList == "nav-container") {
    navClickHandler(item.id)
    return;
}

if(parent.classList == "projects-container") {
    console.log("Going to projectclickhandler");
    projectsClickHandler(item.id);
    return;
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

}

function projectsClickHandler(item) {
    let main = document.querySelector(".main");
    main.innerHTML = "";
};


export {clickHandler}