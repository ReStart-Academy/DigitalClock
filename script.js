// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add event listener for adding tasks
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task item
  const taskItem = document.createElement('li');
  taskItem.className = 'task';

  // Task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<img src="bin.png">';
  deleteBtn.style.padding="3px 17px 3px 17px ";
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });

  // Append elements
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = '';
}
