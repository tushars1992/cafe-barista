const pricesRoutes = (app, fs) => {
  const dataPath = "./stub/data/prices.json";

  app.get("/prices", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.type("application/json");
      res.send(JSON.parse(data));
    });
  });
};

module.exports = pricesRoutes;
