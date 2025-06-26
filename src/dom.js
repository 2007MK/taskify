

function navClick(e) {
    
    let main = document.querySelector(".main");
    main.innerHTML = "";
    switch(e.currentTarget.id) {
        case 'inbox' : inbox(); break;
        case 'today' : today(); break;
        case 'upcoming' : upcoming(); break;
    }
};

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

export {navClick}