function today() {
let main = document.querySelector(".main");
    let heading = document.createElement("h1");
    heading.textContent = "Today";

    main.appendChild(heading);
};

export { today }