const getButton = document.getElementById("get-button");
const todoItems = document.getElementById("todo-items");

const getTodos = async () => {
  const response = await fetch("/api");
  const todos = await response.json();

  todoItems.innerHTML = todos.map((todo) => `<li>${todo}</li>`).join("");
};

getButton.addEventListener("click", getTodos);

let userInput = document.querySelector("todoInput");

function addToList() {
  var newItem = document.createElement("li");
  newItem.textContent = userInput.value;
  newItem.addEventListener("click", deleteItem);
  list.appendChild(newItem);
  userInput.value = "";
}

const deleteItem = (event) => {
  event.target.remove();
};

addToList.addEventListener("click", addToList());
