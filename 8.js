const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

let tasks = [];

// Add task to array and render
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ name: taskText });
    taskInput.value = '';
    renderTasks();
  }
});

// Event Delegation: Handle clicks on task list
taskList.addEventListener('click', (event) => {
  const li = event.target.closest('li');
  const index = li?.dataset.index;

  if (event.target.classList.contains('delete-btn')) {
    tasks.splice(index, 1);
    renderTasks();
  }
});

// Render tasks with delete buttons
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
