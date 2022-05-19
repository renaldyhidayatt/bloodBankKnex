const knex = require("../database");

class NewsService {
  getAllNews() {
    return knex("news");
  }
  getNewsById(id) {
    return knex("news").where("id", id).first();
  }
  getNewsByTitle(title) {
    return knex("news").where("title", title).first();
  }
  getNewsAndCategory() {
    return knex("news")
      .join("category", "news.category_id", "category.id")
      .select(
        "news.id",
        "news.title",
        "news.description",
        "news.image",
        "news.created_at",
        "news.updated_at",
        "category.name as category_name"
      )
      .orderBy("news.id", "desc");
  }
  createNews(news) {
    return knex("news")
      .insert(news)
      .returning("*")
      .then((news) => news[0]);
  }
  updateNews(id, news) {
    return knex("news")
      .where("id", id)
      .update(news, "*")
      .then((news) => news[0]);
  }
  deleteNews(id) {
    return knex("news").where("id", id).del();
  }
}

module.exports = new NewsService();
