import { projectManager } from "./projectManager";
function newProjectModal() {
    console.log("new Project button clicked");
    let modal = document.querySelector("#new-project");
    let form = document.querySelector(".form-container > form")
    let submitBtn = document.querySelector("#submitBtn");
    let cancelBtn = document.querySelector("#cancel");
    modal.showModal();

    cancelBtn.addEventListener("click", () => {
        modal.close();
        form.querySelectorAll("input").forEach(input => input.value = "");
    })
    
    submitBtn.addEventListener("click", () => {
        let title = document.querySelector("#title").value;
        console.log(title);
        projectManager.createProject(title);
        modal.close();
        form.querySelectorAll("input").forEach(input => input.value = "");
    })
};
export {newProjectModal}