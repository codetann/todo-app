import { TodoList } from "./model.js";

const todoList = new TodoList();

const get = (_, res) => res.json(todoList.todos);

const post = (req, res) => {
  todoList.add(req.body.title);
  res.json(todoList.todos);
};

const remove = (req, res) => {
  todoList.remove(req.params.id);
  res.json(todoList.todos);
};

const toggle = (req, res) => {
  todoList.toggle(req.params.id);
  res.json(todoList.todos);
};

const put = (req, res) => {
  todoList.update(req.params.id, req.body.title);
  res.json(todoList.todos);
};

export const controller = {
  get,
  post,
  delete: remove,
  put,
  toggle,
};
