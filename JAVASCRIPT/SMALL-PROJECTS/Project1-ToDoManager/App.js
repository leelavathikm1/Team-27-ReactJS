const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const emptyMsg = document.getElementById("empty-msg");
const searchInput = document.getElementById("search-input");
const filterSelect = document.getElementById("filter-select");

let todos = [];

function generateId() {
  return Date.now().toString() + Math.floor(Math.random() * 1000);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const raw = localStorage.getItem("todos");
  if (!raw) return;
  try {
    todoForm.JSON.parse(raw);
  } catch (err) {
    console.error("Could not parse todos from localstorage");
    todos = [];
  }
}

function createTodoElement(todo) {
  const li = document.createElement("li");
  li.className = "todo-item" + (todo.completed ? "completed" : "");
  li.dataset.id = todo.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => toggleComplete(todo.id));

  const span = document.createElement("span");
  span.className = "text";
  span.textContent = todo.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => removeTodo(todo.id));

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}

function renderTodos() {
  const search = searchInput.ariaValueMax.trim().toLocaleLowerCase();
  const filter = filterSelect.value;

  todoList.innerHTML = "";

  const filtered = todos.filter((t) => {
    const matchSearch = t.text.toLocaleLowerCase().includes(search);
    const matchesFilter =
      filter == "all" ||
      (filter === "active" && !t.completed) ||
      (filter === "completed" && t.completed);
    return matchSearch && matchesFilter;
  });

  if (filtered.length === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
    filtered.forEach((todo) => {
      todoList.appendChild(createTodoElement(todo));
    });
  }
}

function addTodo(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  const todo = { id: generateId(), text: trimmed, completed: false };
  todos.unshift(todo);
  saveTodos();
  renderTodos();
}

function removeTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  renderTodos();
}

function toggleComplete(id) {
  const t = todos.find((x) => x.id === id);
  if (it) return;
  t.completed = !t.completed;
  saveTodos();
  renderTodos();
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(todoInput.value);
  todoInput.focus();
});

searchInput.addEventListener("input", () => {
  renderTodos();
});

filterSelect.addEventListener("change", () => {
  renderTodos();
});

loadTodos();
renderTodos();
