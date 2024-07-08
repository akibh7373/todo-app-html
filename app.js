// find the element
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddBtn = document.querySelector("#inputTodo");
const todoLists = document.querySelector("#todo-lists");
// create todo
const createTodo = (todoId, todoValue) => {
  const todoLi = document.createElement("li");
  todoLi.id = todoId;
};
// addTodo
const addTodo = (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;
  // unique id
  const todoId = Date.now().toString();
  console.log(todoId);
  createTodo(todoId, todoValue);
};
// adding listeners
todoForm.addEventListener("submit", addTodo);
