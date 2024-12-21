const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", handleTodoActions);

// Add a new task
function addTodo(e) {
  e.preventDefault();

  const task = todoInput.value.trim();
  if (task === "") {
    alert("Please enter a valid task.");
    return;
  }

  // Create task container
  const todoDiv = document.createElement("div");
  todoDiv.className = "todos";

  // Create task text
  const todoItem = document.createElement("li");
  todoItem.className = "todo-item";
  todoItem.textContent = task;
  todoDiv.appendChild(todoItem);

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completeBtn);

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerHTML = '<i class="fas fa-edit"></i>';
  todoDiv.appendChild(editBtn);

  // Trash button
  const trashBtn = document.createElement("button");
  trashBtn.className = "trash-btn";
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(trashBtn);

  // Append to list
  todoList.appendChild(todoDiv);

  // Clear input field
  todoInput.value = "";
}

// Handle task actions (delete, edit, complete)
function handleTodoActions(e) {
  const item = e.target;

  // Check if the clicked element is a button or icon inside a button
  if (
    item.classList.contains("complete-btn") ||
    item.parentElement.classList.contains("complete-btn")
  ) {
    const todo = item.closest(".todos");
    todo.classList.toggle("completed");
  } else if (
    item.classList.contains("edit-btn") ||
    item.parentElement.classList.contains("edit-btn")
  ) {
    const todo = item.closest(".todos");
    const todoItem = todo.querySelector(".todo-item");
    const updatedTask = prompt("Edit your task:", todoItem.textContent);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      todoItem.textContent = updatedTask.trim();
    }
  } else if (
    item.classList.contains("trash-btn") ||
    item.parentElement.classList.contains("trash-btn")
  ) {
    const todo = item.closest(".todos");
    todo.remove();
  }
}
