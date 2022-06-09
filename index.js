import express from "express";
import { port } from "./server/config.js";
import { router } from "./server/api/routes.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// html routes
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// api routes
app.use("/api", router);

// start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
