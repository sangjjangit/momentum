const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function deleteTodo(event) {
  // todoList.removeChild(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  saveTodos();
}

function deleteTest (item) {
  console.log(item);
  return item.id !== li.id;
}

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo (newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  li.id = newTodo.id;
  li.classList.add("flex");
  li.classList.add("items-center");
  li.classList.add("justify-center");

  btn.classList.add("rounded-xl");
  btn.classList.add("p-2");
  btn.classList.add("text-sm");
  span.classList.add("text-lg");
  span.innerText = newTodo.text;
  btn.innerText = "❌";
  // btn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  btn.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = {
    // "id": crypto.randomUUID(),
    "id": Date.now(),
    "text": todoInput.value,
  };
  todoInput.value = "";
  todos.push(newTodo);
  saveTodos();
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}