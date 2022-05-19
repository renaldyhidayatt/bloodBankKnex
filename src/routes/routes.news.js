const NewsController = require("../controllers/controller.news");
const router = require("express").Router();

router.get("/", NewsController.getAllNews);
router.get("/:id", NewsController.getNewsById);
router.get("/title/:title", NewsController.getNewsByTitle);
router.get("/category", NewsController.getNewsAndCategory);
router.post("/", NewsController.createNews);
router.put("/:id", NewsController.updateNews);
router.delete("/:id", NewsController.deleteNews);

module.exports = router;
