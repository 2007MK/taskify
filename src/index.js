import { initialLoad } from './initialLoad';
import './styles.css';
import { Todo } from './todo';
import { Project } from './project';
import { projectManager } from './projectManager';
import { formatDistance, subDays } from 'date-fns';


projectManager.createTodo("Study", "Read 1 page", "30-06-2025", "high");
console.log(projectManager.getProjects());



