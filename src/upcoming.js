function upcoming() {
    let main = document.querySelector(".main");
    let heading = document.createElement("h1");
    heading.textContent = "Upcoming";

    main.appendChild(heading);
};

export {upcoming}