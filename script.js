document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
  
    addBtn.addEventListener('click', function() {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = '';
      }
    });
  
    function createTodoItem(todoText) {
      const todoItem = document.createElement('li');
      todoItem.className = 'todo-item';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      const text = document.createElement('span');
      text.textContent = todoText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Delete';
  
      deleteBtn.addEventListener('click', function() {
        todoItem.remove();
      });
  
      todoItem.appendChild(checkbox);
      todoItem.appendChild(text);
      todoItem.appendChild(deleteBtn);
  
      return todoItem;
    }
  });
  