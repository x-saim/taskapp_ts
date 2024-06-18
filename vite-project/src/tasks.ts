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

const tasks: Task[] = [];

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

    //update local storage
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