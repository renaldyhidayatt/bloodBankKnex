const NewsService = require("../services/service.news");

class NewsController {
  getAllNews(req, res) {
    NewsService.getAllNews()
      .then((news) => res.json(news))
      .catch((err) => res.status(500).json(err));
  }
  getNewsById(req, res) {
    NewsService.getNewsById(req.params.id)
      .then((news) => res.json(news))
      .catch((err) => res.status(500).json(err));
  }
  getNewsByTitle(req, res) {
    NewsService.getNewsByTitle(req.params.title)
      .then((news) => res.json(news))
      .catch((err) => res.status(500).json(err));
  }
  getNewsAndCategory(req, res) {
    NewsService.getNewsAndCategory()
      .then((news) => res.json(news))
      .catch((err) => res.status(500).json(err));
  }
  createNews(req, res) {
    NewsService.createNews(req.body)
      .then((news) => res.json(news))
      .catch((err) => res.status(500).json(err));
  }
  updateNews(req, res) {
    NewsService.updateNews(req.params.id, req.body)
      .then((news) => res.json(news))
      .catch((err) => res.status(500).json(err));
  }
  deleteNews(req, res) {
    NewsService.deleteNews(req.params.id)
      .then((news) => res.json(news))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = new NewsController();
