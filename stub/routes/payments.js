const paymentsRoutes = (app, fs) => {
  const dataPath = "./stub/data/payments.json";

  app.get("/payments", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.type("application/json");
      res.send(JSON.parse(data));
    });
  });
};

module.exports = paymentsRoutes;
