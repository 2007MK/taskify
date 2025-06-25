import './styles.css';
import { Todo } from './todo';
import { Project } from './project';
import { projectManager } from './projectManager';
import { formatDistance, subDays } from 'date-fns';


const content = document.createElement('div');
content.textContent = "🚀 Taskify Ready!";
document.body.appendChild(content);

projectManager.createTodo("Study", "Read 1 page", "30-06-2025", "high");
console.log(projectManager.getProjects());

let date = new Date();
console.log(date);


