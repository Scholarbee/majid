const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./Routes/Routes");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/**
 * setting routes
 */
app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});
app.use("/api", routes);

/**
 * setting database and starting the server
 */
mongoose
  .connect("mongodb://localhost/new_db")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`app running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
