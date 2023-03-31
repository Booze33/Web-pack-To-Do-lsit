let tasks = [];

const setItems = () => {
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

  tasks.forEach((task) => {
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
    menuImg.innerHTML = '<i class="fa fa-ellipsis-v" aria-hidden="true"></i>';
    menuImg.addEventListener('click', (e) => {
      e.preventDefault();
      const section = document.createElement('div');
      const change = document.createElement('button');
      const clickImg = document.querySelector('.fa-ellipsis-v');

      const removeList = (index) => {
        tasks.splice(index, 1);
        setItems();
        renderTasks();
      };
      change.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
      change.addEventListener('click', () => {
        removeList(tasks.indexOf(task));
      });

      clickImg.style.display = 'none';
      section.className = 'section';
      section.appendChild(change);
      menuImg.appendChild(section);
    });
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

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