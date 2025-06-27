import { projectManager } from "./projectManager";

function newProjectModal() {
    let modal = document.querySelector("#new-project");
        modal.innerHTML = ""; 
    let modalContainer = document.createElement("div");
        let heading = document.createElement("h2");
        heading.textContent = "Create New Project";
        modalContainer.appendChild(heading);
    let formContainer = document.createElement("div");
        formContainer.classList.add("form-container")

    let form = document.createElement("form");
        form.setAttribute("method", "dialog");

        let titleLabel = document.createElement("label");
            titleLabel.setAttribute("for", "title");
            titleLabel.textContent = "Title";
        let titleInput = document.createElement("input");
            titleInput.setAttribute("id", "title");

    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    let btnWrapper = document.createElement("div");
        btnWrapper.setAttribute("class", "btn-wrapper");
    let submitBtn = document.createElement("button");
    submitBtn.id = "submitBtn"
    submitBtn.textContent = "Submit";
    let cancelBtn = document.createElement("button");
    cancelBtn.id = "cancelBtn";
    cancelBtn.textContent = "Cancel";

    btnWrapper.appendChild(cancelBtn);
    btnWrapper.appendChild(submitBtn);
    
    form.appendChild(btnWrapper);
    formContainer.appendChild(form);
    modalContainer.appendChild(formContainer);

    modal.appendChild(modalContainer);
    modal.showModal();


    //adding event listeners
    submitBtn.addEventListener("click", () => { submitNewProject(titleInput.value) })
    cancelBtn.addEventListener("click", () => {
        titleInput.value = "";
        modal.close();
    })
};


function submitNewProject(titleInput) {
    
    let pname = titleInput    
    projectManager.createProject(pname);
}

export {newProjectModal}