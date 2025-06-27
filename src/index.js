import './styles.css';
import { renderStructure, renderNav, renderProjects } from './render';
import { projectManager } from './projectManager';
import { getCurrentTab, setCurrentTab } from './appState';
import {navClickHandler} from './dom';
import { Project } from './project';

renderStructure();
renderNav();
renderProjects();

let project = new Project("default"); //default project
projectManager.pushProject(project); 

projectManager.createTodo("test", "test", "test", "test", "default");

navClickHandler("inbox"); //open inbox by default
setCurrentTab("inbox");

