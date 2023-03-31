import { tasks, setItems, renderTasks } from './index.js';

export const addList = () => {
  const InputText = document.querySelector('.add-input');
  
  const Text = InputText.value;
  if (Text.trim().length !== 0) {
    const myTask = {
      description: Text,
      index: tasks.length + 1,
      completed: false,
    };
    tasks.push(myTask);
    setItems();
    renderTasks();
    InputText.value = '';
  };
}

export const removeList = (index) => {
  tasks.splice(index, 1);
  setItems();
  renderTasks();
};