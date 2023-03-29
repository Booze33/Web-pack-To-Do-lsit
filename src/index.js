import _ from 'lodash';
import './style.css';

const tasks = [
  { description: 'Work out', completed: false, index: 1 },
  { description: 'Download the resource', completed: false, index: 2 },
  { description: 'Clean your room', completed: true, index: 3 },
  { description: 'Study', completed: false, index: 4 },
  { description: 'Finish the app', completed: true, index: 5 },
];

const taskList = document.querySelector('.input');
taskList.innerHTML = '';

const renderTasks = () => {
  tasks.forEach((task) => {
      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;

      listItem.appendChild(checkbox);
      listItem.className = 'li-input';
      listItem.appendChild(document.createTextNode(task.description));

      taskList.appendChild(listItem);
  })
}
renderTasks();

const clearAll = document.querySelector('.button');
const removeButton = document.createElement('button');
removeButton.textContent = 'Clear all completed';
removeButton.className = 'clear';
clearAll.appendChild(removeButton);