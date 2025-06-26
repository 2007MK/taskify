import { inbox } from "./inbox";
import { today } from "./today";
import { upcoming } from "./upcoming";

function navClick(e) {
    
    let main = document.querySelector(".main");
    main.innerHTML = "";
    switch(e.currentTarget.id) {
        case 'inbox' : inbox(); break;
        case 'today' : today(); break;
        case 'upcoming' : upcoming(); break;
    }
};

export {navClick}