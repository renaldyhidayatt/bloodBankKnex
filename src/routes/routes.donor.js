const DonorController = require("../controllers/controller.donor");
const router = require("express").Router();

router.get("/", DonorController.getAllDonors);
router.get("/:id", DonorController.getDonorById);
router.get("/email/:email", DonorController.getDonorByEmail);
router.post("/", DonorController.createDonor);
router.put("/:id", DonorController.updateDonor);
router.delete("/:id", DonorController.deleteDonor);
router.get(
  "/donorReligionAndBloodGroup",
  DonorController.getDonorReligionAndBloodGroup
);

module.exports = router;
