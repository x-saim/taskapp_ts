console.log('tasks');

// Access and store DOM elements with type safety.
const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

// Type Alias
type Task = {
  description: string;
  isCompleted: boolean;
}

const tasks: Task[] = loadTasks();

tasks.forEach(element => {
  renderTask(element);
});

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');

  return storedTasks ? JSON.parse(storedTasks):[]
}

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskDescription = formInput?.value;
  if (taskDescription) {
    
    //set up task and add to list
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    }
    addTask(task);

    //render tasks
    renderTask(task);
      
    //update local storage
    updateStorage();

    console.log(taskDescription);

    formInput.value = '';
  } else {
    alert('Please enter a task description.');
  }
})

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);  
}

function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;
  
  // Checkbox creation
  const taskCheckBox = document.createElement('input');
  taskCheckBox.type = 'checkbox';
  taskCheckBox.checked = task.isCompleted;

  // Toggle checkbox
  taskCheckBox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  })

  taskElement.appendChild(taskCheckBox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}