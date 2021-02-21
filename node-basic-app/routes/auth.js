const express = require("express");

const authControlller = require("../controllers/auth");

const router = express.Router();

router.get("/login", authControlller.getLogin);

router.post("/login", authControlller.postLogin);

module.exports = router;
