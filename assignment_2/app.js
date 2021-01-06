const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("First middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second middleware");
//   res.send("<h1>Assignment solved...almost</h1>");
// });

app.use("/users", (req, res, next) => {
  console.log("/users middleware");
  res.send("<h1>Helllo from Users page!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("/ middleware");
  res.send("<h1>Hello from main page.</h1>");
});

app.listen(3000);
