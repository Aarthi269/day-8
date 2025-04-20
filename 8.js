const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ name: taskText });
    taskInput.value = '';
    renderTasks();
  }
});

taskList.addEventListener('click', (event) => {
  const li = event.target.closest('li');
  const index = li?.dataset.index;

  if (event.target.classList.contains('delete-btn')) {
    tasks.splice(index, 1);
    renderTasks();
  }
});

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.dataset.index = index;
    li.innerHTML = `
  <span>${task.name}</span>
  <button class="delete-btn">Delete</button>
`;
    taskList.appendChild(li);
  });
}
