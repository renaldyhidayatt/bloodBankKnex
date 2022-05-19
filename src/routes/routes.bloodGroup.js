const BloodGroupController = require("../controllers/controller.bloodGroup");
const router = require("express").Router();

router.get("/", BloodGroupController.getAllBloodGroups);
router.get("/:id", BloodGroupController.getBloodGroupById);
router.get("/name/:name", BloodGroupController.getBloodGroupByName);
router.post("/", BloodGroupController.createBloodGroup);
router.put("/:id", BloodGroupController.updateBloodGroup);
router.delete("/:id", BloodGroupController.deleteBloodGroup);

module.exports = router;
