class Todo {
  constructor(id, title, completed) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  toggle = () => {
    this.completed = !this.completed;
  };

  update = (title) => {
    this.title = title;
  };
}

class TodoList {
  constructor() {
    this.todos = [];
  }

  add = (title) => {
    const todo = new Todo(Math.random().toString(), title, false);
    this.todos.push(todo);
  };

  remove = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  toggle = (id) => {
    const todo = this.todos.find((todo) => todo.id === id);
    todo.toggle();
  };

  update = (id, title) => {
    const todo = this.todos.find((todo) => todo.id === id);
    todo.update(title);
  };

  get = (id) => {
    return this.todos.find((todo) => todo.id === id);
  };
}

export { Todo, TodoList };
