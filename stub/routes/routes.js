// load up our shiny new route for users
const orderRoutes = require("./orders");
const paymentsRoutes = require("./payments");
const pricesRoutes = require("./prices");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });

  orderRoutes(app, fs);
  pricesRoutes(app, fs);
  paymentsRoutes(app, fs);
};

module.exports = appRouter;
