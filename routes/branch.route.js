const { Router } = require("express");
const { branchController } = require("../controllers/branch.controller");
const adminMiddleware = require("../middlewares/admin.middleware");

const router = Router();

router.get("/branch", branchController.getBranches);
router.post("/branch", adminMiddleware, branchController.postBranch);

module.exports = router;
