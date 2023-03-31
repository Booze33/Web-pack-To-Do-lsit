import './style.css';
import { addList, renderTasks } from './app.js';

renderTasks();
// Add function

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addList();
});
