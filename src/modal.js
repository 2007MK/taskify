import { getCurrentTab } from "./appState";
import { projectsClickHandler } from "./dom";
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
            titleInput.setAttribute("type", "text");
            titleInput.setAttribute("id", "title");

    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    let btnWrapper = document.createElement("div");
        btnWrapper.setAttribute("class", "btn-wrapper");
    let submitBtn = document.createElement("button");
    submitBtn.id = "submitBtn"
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("type", "submit");
    let cancelBtn = document.createElement("button");
    cancelBtn.id = "cancelBtn";
    cancelBtn.textContent = "Cancel";
    cancelBtn.setAttribute("type", "button");

    btnWrapper.appendChild(cancelBtn);
    btnWrapper.appendChild(submitBtn);
    
    form.appendChild(btnWrapper);
    formContainer.appendChild(form);
    modalContainer.appendChild(formContainer);

    modal.appendChild(modalContainer);
    modal.showModal();


    //adding event listeners
    form.addEventListener('submit', (e) => { 
        modal.close();
        e.preventDefault();
        submitNewProject(titleInput.value) 
    })
    cancelBtn.addEventListener("click", () => {
        titleInput.value = "";
        modal.close();
    })
};




function submitNewProject(titleInput) {
    let pname = titleInput    
    projectManager.createProject(pname);
}



function newTodoModal() {
    let modal = document.querySelector("#new-todo");
        modal.innerHTML = ""; 
    let modalContainer = document.createElement("div");
        let heading = document.createElement("h2");
        heading.textContent = "Create New Todo";
        modalContainer.appendChild(heading);
    let formContainer = document.createElement("div");
        formContainer.classList.add("form-container")

    let form = document.createElement("form");
        form.setAttribute("method", "dialog");

        // Title input
        let titleLabel = document.createElement("label");
            titleLabel.setAttribute("for", "title");
            titleLabel.textContent = "Title";
            let titleInput = document.createElement("input");
            titleInput.setAttribute("id", "title");
            titleInput.setAttribute("type", "text");


        // priority input
        let prioritySelectorLabel = document.createElement("label");
            prioritySelectorLabel.setAttribute("for", "priority")
            prioritySelectorLabel.textContent = "Priority";
        let prioritySelector = document.createElement("select");
            prioritySelector.setAttribute("name", "priority");
            prioritySelector.setAttribute("id", "select");
                let optHigh = document.createElement("option");
                    optHigh.setAttribute("value", "high");
                    optHigh.textContent = "High";
                let optMedium = document.createElement("option");
                    optMedium.setAttribute("value", "medium");
                    optMedium.textContent = "Medium";
                let optLow = document.createElement("option");
                    optLow.setAttribute("value", "low");
                    optLow.textContent = "Low";

        prioritySelector.appendChild(optLow);
        prioritySelector.appendChild(optMedium);
        prioritySelector.appendChild(optHigh);


        //dueDate input
        let dueDateLabel = document.createElement("label");
            dueDateLabel.setAttribute("for", "dueDate");
            dueDateLabel.textContent = "Select Due Date:"
        let dueDate = document.createElement("input");
            dueDate.setAttribute("type", "date");
            dueDate.setAttribute("id", "dueDate");

        //Description
        let descriptionLabel = document.createElement("label");
            descriptionLabel.setAttribute("for", "description");
            descriptionLabel.textContent="Description";
        let description = document.createElement("textarea");
            description.setAttribute("id", "description");
            description.setAttribute("placeholder", "Enter some details about the task...");
            description.setAttribute("rows", "3");


    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(description);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);
    form.appendChild(prioritySelectorLabel);
    form.appendChild(prioritySelector);

    let btnWrapper = document.createElement("div");
        btnWrapper.setAttribute("class", "btn-wrapper");
    let submitBtn = document.createElement("button");
    submitBtn.id = "submitBtn"
    submitBtn.textContent = "Create Task";
    submitBtn.setAttribute("type", "submit");
    let cancelBtn = document.createElement("button");
    cancelBtn.id = "cancelBtn";
    cancelBtn.textContent = "Cancel";
    cancelBtn.setAttribute("type", "button");

    btnWrapper.appendChild(cancelBtn);
    btnWrapper.appendChild(submitBtn);
    
    form.appendChild(btnWrapper);
    formContainer.appendChild(form);
    modalContainer.appendChild(formContainer);

    modal.appendChild(modalContainer);
    modal.showModal();


    //adding event listeners
    form.addEventListener('submit', (e) => { 
        modal.close();
        e.preventDefault();
        submitNewTodo(titleInput.value) 
    })
    cancelBtn.addEventListener("click", () => {
        titleInput.value = "";
        modal.close();
    })
};


function submitNewTodo(title, description, dueDate, priority) {
    let pname = getCurrentTab();
    projectManager.createTodo(title, description, dueDate, priority, pname);
    projectsClickHandler(pname);
}

export {newProjectModal, newTodoModal}