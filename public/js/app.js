const getButton = document.getElementById("get-button");
const todoItems = document.getElementById("todo-items");

const getTodos = async () => {
  const response = await fetch("/api");
  const todos = await response.json();

  todoItems.innerHTML = todos.map((todo) => `<li>${todo}</li>`).join("");
};

getButton.addEventListener("click", getTodos);
