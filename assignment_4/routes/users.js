const path = require("path");

const express = require("express");

const mainRoute = require("./main");

const router = express.Router();

router.get("/users", (req, res, next) => {
  const users = mainRoute.users;
  res.render("users", {
    users: users,
    pageTitle: "Users",
    path: "/users",
    hasUsers: users.length > 0,
    activeUser: true,
    userCSS: true,
  });
});

module.exports = router;
