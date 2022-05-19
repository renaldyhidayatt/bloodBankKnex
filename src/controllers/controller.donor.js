const DonorService = require("../services/service.donor");

class DonorController {
  getAllDonors(req, res) {
    DonorService.getAllDonors()
      .then((donors) => res.json(donors))
      .catch((err) => res.status(500).json(err));
  }
  getDonorById(req, res) {
    DonorService.getDonorById(req.params.id)
      .then((donor) => res.json(donor))
      .catch((err) => res.status(500).json(err));
  }
  getDonorByEmail(req, res) {
    DonorService.getDonorByEmail(req.params.email)
      .then((donor) => res.json(donor))
      .catch((err) => res.status(500).json(err));
  }
  createDonor(req, res) {
    DonorService.createDonor(req.body)
      .then((donor) => res.json(donor))
      .catch((err) => res.status(500).json(err));
  }
  updateDonor(req, res) {
    DonorService.updateDonor(req.params.id, req.body)
      .then((donor) => res.json(donor))
      .catch((err) => res.status(500).json(err));
  }
  deleteDonor(req, res) {
    DonorService.deleteDonor(req.params.id)
      .then((donor) => res.json(donor))
      .catch((err) => res.status(500).json(err));
  }
  getDonorReligionAndBloodGroup(req, res) {
    try {
      DonorService.getDonorReligionAndBloodGroup().then((donors) =>
        res.json(donors)
      );
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new DonorController();
