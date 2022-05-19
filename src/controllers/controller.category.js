const CategoryService = require("../services/service.category");

class CategoryController {
  getAllCategories(req, res) {
    CategoryService.getAllCategories()
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err));
  }
  getCategoryById(req, res) {
    CategoryService.getCategoryById(req.params.id)
      .then((category) => res.json(category))
      .catch((err) => res.status(500).json(err));
  }
  getCategoryByName(req, res) {
    CategoryService.getCategoryByName(req.params.name)
      .then((category) => res.json(category))
      .catch((err) => res.status(500).json(err));
  }
  createCategory(req, res) {
    const { name } = req.body;

    const data = {
      name,
      slug: name.toLowerCase().replace(/ /g, "-"),
    };

    CategoryService.createCategory({ ...data })
      .then((category) => res.json(category))
      .catch((err) => res.status(500).json(err));
  }
  updateCategory(req, res) {
    CategoryService.updateCategory(req.params.id, req.body)
      .then((category) => res.json(category))
      .catch((err) => res.status(500).json(err));
  }
  deleteCategory(req, res) {
    CategoryService.deleteCategory(req.params.id)
      .then((category) => res.json(category))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = new CategoryController();
