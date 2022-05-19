const routerUserRole = require("./routes.user_role");
const routerUser = require("./routes.user");
const routerBloodGroup = require("./routes.bloodGroup");
const routerCategory = require("./routes.category");
const routerReligion = require("./routes.religion");
const routerDonor = require("./routes.donor");
const routerNews = require("./routes.news");

module.exports = (app) => {
  app.use("/user", routerUser);
  app.use("/userRole", routerUserRole);
  app.use("/bloodGroup", routerBloodGroup);
  app.use("/religion", routerReligion);
  app.use("/category", routerCategory);
  app.use("/donor", routerDonor);
  app.use("/news", routerNews);
};
