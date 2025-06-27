import './styles.css';
import { renderStructure, renderNav, renderProjects } from './render';
import { projectManager } from './projectManager';

renderStructure();
renderNav();
renderProjects();


projectManager.createProject("default");