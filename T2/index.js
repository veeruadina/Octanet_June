const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const dueDateButton = document.getElementById('due-date-button');
const priorityInput = document.getElementById('priority-input');
const todoList = document.getElementById('todo-list');

dueDateButton.addEventListener('click', function() {
  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'due-date-input';
  dueDateInput.style.marginRight = '10px';
  dueDateButton.parentNode.insertBefore(dueDateInput, dueDateButton);
  dueDateButton.remove();
});

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const task = todoInput.value;
  const dueDate = document.getElementById('due-date-input').value;
  const priority = priorityInput.value;

  if (task && dueDate && priority) {
    const listItem = document.createElement('li');
    const tickBox = document.createElement('input');
    const taskText = document.createElement('span');
    const infoContainer = document.createElement('div');
    const dueDateDiv = document.createElement('div');
    const priorityDiv = document.createElement('div');
    const dueDateSpan = document.createElement('span');
    const prioritySpan = document.createElement('span');

    tickBox.type = 'checkbox';
    tickBox.classList.add('tick-box');
    taskText.classList.add('task-text');
    taskText.textContent = task;

    dueDateSpan.classList.add('due-date');
    dueDateSpan.textContent = dueDate;

    prioritySpan.classList.add('priority');
    prioritySpan.classList.add(priority);
    prioritySpan.textContent = priority.toUpperCase();

    dueDateDiv.textContent = 'Due Date: ';
    dueDateDiv.appendChild(dueDateSpan);

    priorityDiv.textContent = 'Priority: ';
    priorityDiv.appendChild(prioritySpan);

    infoContainer.appendChild(dueDateDiv);
    infoContainer.appendChild(priorityDiv);

    listItem.appendChild(tickBox);
    listItem.appendChild(taskText);
    listItem.appendChild(infoContainer);

    listItem.classList.add(priority);
    todoList.appendChild(listItem);

    tickBox.addEventListener('change', function() {
      if (tickBox.checked) {
        listItem.remove();
      }
    });

    todoInput.value = '';
    priorityInput.value = '';
  }
});