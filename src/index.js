import './style.css';
import { addList, renderTasks } from './app.js';

renderTasks();
// Add function

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addList();
  
});

// Remove function

const clearAll = document.querySelector('.button');
const removeButton = document.createElement('button');
removeButton.textContent = 'Clear all completed';
removeButton.className = 'clear';
clearAll.appendChild(removeButton);
