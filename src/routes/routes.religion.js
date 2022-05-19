const ReligionController = require("../controllers/controller.religion");
const router = require("express").Router();

router.get("/", ReligionController.getAllReligions);
router.get("/:id", ReligionController.getReligionById);
router.get("/name/:name", ReligionController.getReligionByName);
router.post("/", ReligionController.createReligion);
router.put("/:id", ReligionController.updateReligion);
router.delete("/:id", ReligionController.deleteReligion);

module.exports = router;
