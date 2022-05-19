const BloodGroupService = require("../services/service.bloodGroup");

class BloodGroupController {
  getAllBloodGroups(req, res) {
    BloodGroupService.getAllBloodGroups()
      .then((bloodGroups) => res.json(bloodGroups))
      .catch((err) => res.status(500).json(err));
  }
  getBloodGroupById(req, res) {
    BloodGroupService.getBloodGroupById(req.params.id)
      .then((bloodGroup) => res.json(bloodGroup))
      .catch((err) => res.status(500).json(err));
  }
  getBloodGroupByName(req, res) {
    BloodGroupService.getBloodGroupByName(req.params.name)
      .then((bloodGroup) => res.json(bloodGroup))
      .catch((err) => res.status(500).json(err));
  }
  createBloodGroup(req, res) {
    BloodGroupService.createBloodGroup(req.body)
      .then((bloodGroup) => res.json(bloodGroup))
      .catch((err) => res.status(500).json(err));
  }
  updateBloodGroup(req, res) {
    BloodGroupService.updateBloodGroup(req.params.id, req.body)
      .then((bloodGroup) => res.json(bloodGroup))
      .catch((err) => res.status(500).json(err));
  }
  deleteBloodGroup(req, res) {
    BloodGroupService.deleteBloodGroup(req.params.id)
      .then((bloodGroup) => res.json(bloodGroup))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = new BloodGroupController();
