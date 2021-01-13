const path = require("path");

const express = require("express");

const router = express.Router();

const users = [];

//  / => GET
router.get("/", (req, res, next) => {
  res.render("main", {
    pageTitle: "Add User",
    path: "/",
    activeAddUser: true,
    formsCSS: true,
    userCSS: true,
  });
});

// / => POST
router.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.name });
  res.redirect("/users");
});

exports.routes = router;
exports.users = users;
