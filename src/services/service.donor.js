const knex = require("../database");

class DonorService {
  getAllDonors() {
    return knex("donor");
  }
  getDonorById(id) {
    return knex("donor").where("id", id).first();
  }
  getDonorByEmail(email) {
    return knex("donor").where("email", email).first();
  }
  createDonor(donor) {
    return knex("donor")
      .insert(donor)
      .returning("*")
      .then((donor) => donor[0]);
  }
  updateDonor(id, donor) {
    return knex("donor")
      .where("id", id)
      .update(donor, "*")
      .then((donor) => donor[0]);
  }
  deleteDonor(id) {
    return knex("donor").where("id", id).del();
  }

  getDonorReligionAndBloodGroup() {
    return knex("donor")
      .select(
        "donor.*",
        "religions.name as religion",
        "blood_group.name as blood_group"
      )
      .join("religions", "donor.religion_id", "religions.id")
      .join("blood_group", "donor.blood_group_id", "blood_group.id")
      .where("donor.status", "active");
  }
}

module.exports = new DonorService();
