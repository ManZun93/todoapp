const {Router} = require("express");
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask, getTodosWithCategories } = require("../controllers/todos.controller");


const router = Router();

router.get("/todos", getAllTasks);

router.get("/todos/:id", getTaskById);

router.get("/todos/:id/categories", getTodosWithCategories);

router.post("/todos", createTask);

router.put("/todos/:id", updateTask);

router.delete("/todos/:id", deleteTask);

module.exports = router;