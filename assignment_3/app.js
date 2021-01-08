const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const userRoutes = require("./routes/users");
const mainRoutes = require("./routes/main");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);
app.use(mainRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
