const { Router } = require("express");
const { taskController } = require("../controllers/task.controller");
const adminMiddleware = require("../middlewares/admin.middleware");
const userMiddleware = require("../middlewares/user.middleware");
const router = Router();

router.post("/tasks", adminMiddleware, taskController.postTask);
router.get("/tasks", taskController.getTasks);
router.get("/tasks/:id", taskController.getTaskById);
router.patch("/tasks/:id", userMiddleware, taskController.message);
router.patch("/tasks/take/:id", userMiddleware, taskController.work);
router.patch("/tasks/close/:id", userMiddleware, taskController.close);
router.get("/tasks/branch/:id", taskController.getTasksByBranch);

module.exports = router;
