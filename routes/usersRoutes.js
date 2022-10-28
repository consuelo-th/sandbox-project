const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("users/login");
});
//more to go

module.exports = router;
