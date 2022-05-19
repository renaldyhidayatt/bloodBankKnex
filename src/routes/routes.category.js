const CategoryController = require("../controllers/controller.category");
const router = require("express").Router();

router.get("/", CategoryController.getAllCategories);
router.get("/:id", CategoryController.getCategoryById);
router.get("/name/:name", CategoryController.getCategoryByName);
router.post("/", CategoryController.createCategory);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

module.exports = router;
