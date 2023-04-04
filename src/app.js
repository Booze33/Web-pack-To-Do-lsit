let tasks = [];

export const setItems = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const getItems = () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  if (data) {
    tasks = data;
  }
};

export const renderTasks = () => {
  const taskList = document.querySelector('.input');
  taskList.innerHTML = '';
  getItems();

  tasks.forEach((task, id) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const inputText = document.createElement('input');
    const menuImg = document.createElement('div');
    inputText.className = 'text';
    inputText.type = 'text';
    inputText.value = task.description;
    inputText.addEventListener('blur', (e) => {
      task.description = e.target.value;
      setItems();
    });

    inputText.style.width = '20rem';
    menuImg.className = 'menu';
    menuImg.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    menuImg.addEventListener('click', (e) => {
      e.preventDefault();
      removeList(tasks.indexOf(task));
    });

    const updateList = (index) => {
      for (let i = index; i < tasks.length; i += 1) {
        tasks[i].index = i + 1;
      }
    };

    const removeList = (index) => {
      tasks.splice(index, 1);
      updateList(index);
      setItems();
      renderTasks();
    };

    const refresh = document.querySelector('.fa-refresh');
    if (tasks.length >= 1) {
      refresh.addEventListener('click', (e) => {
        tasks.splice(0, tasks.length);

        updateList(e);
        removeList();
        setItems();
      })
    }

    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    const ChangeStats = (id, stats) => {
      tasks[id].completed = stats;
      setItems();
      renderTasks();
    };

    checkbox.addEventListener('change', (e) => {
      ChangeStats(id, e.target.checked);
    });

    listItem.appendChild(checkbox);
    listItem.className = 'li-input';
    listItem.appendChild(inputText);
    listItem.appendChild(menuImg);
    taskList.appendChild(listItem);
  });
};

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
  }
};

const clearAll = document.querySelector('.button');
const removeButton = document.createElement('button');
removeButton.textContent = 'Clear all completed';
removeButton.className = 'clear';
clearAll.appendChild(removeButton);

const all = () => {
  tasks = tasks.filter((task) => !task.completed);
  setItems();
  renderTasks();
};

removeButton.addEventListener('click', all);