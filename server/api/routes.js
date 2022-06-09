import express from "express";
import { controller } from "./controller.js";

const router = express.Router();

router.get("/", controller.get);
router.post("/", controller.post);
router.put("/", controller.put);
router.delete("/", controller.delete);
router.post("/toggle", controller.toggle);

export { router };
