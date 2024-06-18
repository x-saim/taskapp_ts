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
  console.log(taskDescription);

    formInput.value = '';
  } else {
    alert('Please enter a task description.');
  }

})