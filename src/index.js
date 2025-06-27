import './styles.css';
import { renderStructure, renderNav, renderProjects } from './render';
import { projectManager } from './projectManager';
import { getCurrentTab, setCurrentTab } from './appState';
import {navClickHandler} from './dom';

renderStructure();
renderNav();
renderProjects();

navClickHandler("inbox"); //open inbox by default
setCurrentTab("inbox");


projectManager.createProject("default");