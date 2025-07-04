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

projectManager.createTodo("1", "test", "test", "test", "default", true);
projectManager.createTodo("2", "test", "test", "test", "default", true);
projectManager.createTodo("3", "test", "test", "test", "default", false);

navClickHandler("inbox"); //open inbox by default
setCurrentTab("inbox");

