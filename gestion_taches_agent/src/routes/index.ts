import { Router } from "express";
import {
  get,
  addTask,
  getTasks,
  updateTask,
  deleteTask,
  getTask,
  getTaskByAgentId,
} from "../controllers/task";

const router = Router();

router.get("/", get);
router.get("/task", getTasks);
router.post("/task", addTask);
router.get("/task/agent/:id", getTaskByAgentId);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);
router.get("/task/:id", getTask);

export default router;
