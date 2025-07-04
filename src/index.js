import './styles.css';
import { renderStructure, renderNav, renderProjects, renderNewTaskBtn } from './render';
import { projectManager } from './projectManager';
import { getCurrentTab, setCurrentTab } from './appState';
import {navClickHandler} from './dom';
import { Project } from './project';

renderStructure();
renderNav();
renderProjects();
renderNewTaskBtn();

let project = new Project("default"); //default project
projectManager.pushProject(project); 

projectManager.createTodo("Complete science assignment", "test", "test", "test", "default", true);
projectManager.createTodo("Get Milk", "test", "test", "test", "default", true);
projectManager.createTodo("Workout for 20 mins", "test", "test", "test", "default", false);

navClickHandler("inbox"); //open inbox by default
setCurrentTab("inbox");


