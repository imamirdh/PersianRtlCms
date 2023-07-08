const express = require("express");
const SabzLearnShopDB = require("./../db/SabzLearnShop");

const adminsRouter = express.Router();

// routes

adminsRouter.get("/", (req, res) => {

  let selectMainAdminQuery = `SELECT * FROM Admins`;

  SabzLearnShopDB.query(selectMainAdminQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

module.exports = adminsRouter;
