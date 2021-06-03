const orderRoutes = (app, fs) => {
  const dataPath = "./stub/data/orders.json";

  app.get("/orders", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.type("application/json");
      res.send(JSON.parse(data));
    });
  });
};

module.exports = orderRoutes;
