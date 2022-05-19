const ReligionService = require("../services/service.religion");

class ReligionController {
  getAllReligions(req, res) {
    ReligionService.getAllReligions()
      .then((religions) => res.json(religions))
      .catch((err) => res.status(500).json(err));
  }
  getReligionById(req, res) {
    ReligionService.getReligionById(req.params.id)
      .then((religion) => res.json(religion))
      .catch((err) => res.status(500).json(err));
  }
  getReligionByName(req, res) {
    ReligionService.getReligionByName(req.params.name)
      .then((religion) => res.json(religion))
      .catch((err) => res.status(500).json(err));
  }
  createReligion(req, res) {
    ReligionService.createReligion(req.body)
      .then((religion) => res.json(religion))
      .catch((err) => res.status(500).json(err));
  }
  updateReligion(req, res) {
    ReligionService.updateReligion(req.params.id, req.body)
      .then((religion) => res.json(religion))
      .catch((err) => res.status(500).json(err));
  }
  deleteReligion(req, res) {
    ReligionService.deleteReligion(req.params.id)
      .then((religion) => res.json(religion))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = new ReligionController();
