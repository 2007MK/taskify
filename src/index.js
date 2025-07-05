import './styles.css';
import { renderStructure, renderNav, renderProjects, renderNewTaskBtn } from './render';
import { projectManager } from './projectManager';
import { getCurrentTab, setCurrentTab } from './appState';
import {navClickHandler} from './dom';
import { Project } from './project';
import {Storage} from './localStorage';


renderStructure();
renderNav();
renderProjects();
renderNewTaskBtn();

Storage.loadStorage();


navClickHandler("inbox"); //open inbox by default
setCurrentTab("inbox");


