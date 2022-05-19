const UserController = require("../controllers/controller.user");

const router = require("express").Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.get("/email/:email", UserController.getUserByEmail);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
