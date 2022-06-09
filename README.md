# Todo App

## Get started

1. Install dependences `npm install`

2. Run development server `npm run dev`

3. Edit the the files located in the public folder to update the frontend

## API routes

### get `/api`

Add todo item to the list. Returns a list of all todo items

```js
await fetch("/api");

/* response */
[{ id: 1, title: "Clean room", toggle: false }];
```

### post `/api`

Returns a list of all todo items

```js
await fetch("/api", {
  method: "POST",
  body: { title: "Do dishes" },
});

/* response */
[
  { id: 1, title: "Clean room", toggle: false },
  { id: 2, title: "Do dishes", toggle: false },
];
```

### post `/api/toggle`

Toggles todo item. Returns list of todo items

```js
await fetch("/api", {
  method: "POST",
  body: { id: 1 },
});

/* response */
[
  { id: 1, title: "Clean room", toggle: true },
  { id: 2, title: "Do dishes", toggle: false },
];
```

### put `/api`

Updates the text of a todo item

```js
await fetch("/api", {
  method: "PUT",
  body: {
    id: 2,
    title: "Wash dishes",
  },
});

/* response */
[
  { id: 1, title: "Clean room", toggle: false },
  { id: 2, title: "Wash dishes", toggle: false },
];
```

### delete `/api`

Deletes todo item from list. Returns todo items

```js
await fetch("/api", {
  method: "DELETE",
  body: {
    id: 2,
  },
});

/* response */
[{ id: 1, title: "Clean room", toggle: false }];
```

## Features

- [ ] Add todo item
- [ ] Update todo item
- [ ] Remove todo item
- [ ] Display todo items
- [ ] Toggle todo item
- [ ] Filter todos by completed
