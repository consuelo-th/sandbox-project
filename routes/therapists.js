const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("pages/th/login");
});

router.get("/register", (req, res) => {
  res.render("pages/th/register");
});

router.get("/dashboard", (req, res) => {
  res.render("pages/th/dashboard");
});

module.exports = router;
