import './styles.css';
import Todo from './todo';
import  Project  from './project';
import { projectManager } from './projectManager';


const content = document.createElement('div');
content.textContent = "🚀 Taskify Ready!";
document.body.appendChild(content);

// creates a default project where the todos go when no other projectName is provided
projectManager.createProject("default");
projectManager.createTodo("Study", "Read 1 page", "30-06-2025", "high");

console.log(projectManager.getProjects());

