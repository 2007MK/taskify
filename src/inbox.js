function inbox() {
    let main = document.querySelector(".main");
    let heading = document.createElement("h1");
    heading.textContent = "Inbox";

    main.appendChild(heading);
}


export { inbox }