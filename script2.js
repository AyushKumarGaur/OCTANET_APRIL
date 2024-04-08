document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const reloadButton = document.getElementById('reload-btn');
    const todoList = document.getElementById('todo-list');
  
    addButton.addEventListener('click', addTask);
    reloadButton.addEventListener('click', reloadPage);
    inputField.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    function addTask() {
      const task = inputField.value.trim();
      if (task !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.addEventListener('click', function () {
          this.remove();
        });
        todoList.appendChild(listItem);
        inputField.value = '';
      }
    }
  
    function reloadPage() {
      location.reload();
    }
  });
  