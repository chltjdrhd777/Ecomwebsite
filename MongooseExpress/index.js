const Product = require("./models/product");
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
/* command : "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe" */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//? get
app.get("/products", async (req, res) => {
  const productData = await Product.find({});
  res.render("products/index", { productData });
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

//! mongoose part
mongoose
  .connect("mongodb://localhost:27017/farming", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("there is an err", err);
  });
