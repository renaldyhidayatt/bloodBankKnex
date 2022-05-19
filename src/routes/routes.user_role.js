const UserRoleController = require("../controllers/controller.user_role");

const router = require("express").Router();

router.get("/", UserRoleController.getAllUserRoles);
router.get("/:id", UserRoleController.getUserRoleById);
router.get("/name/:name", UserRoleController.getUserRoleByName);
router.post("/", UserRoleController.createUserRole);
router.put("/:id", UserRoleController.updateUserRole);
router.delete("/:id", UserRoleController.deleteUserRole);

module.exports = router;
