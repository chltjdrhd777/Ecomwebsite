/* import { connect, Schema, model } from "mongoose"; */
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/shoppingmall", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("c");
  })
  .catch((err) => {
    console.log(err);
  });

const shopppingSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  brand: String,
  rating: Number,
  numReviews: Number,
  description: String,
  countStocks: Number,
});

const ShoppingData = mongoose.model("Shopping", shopppingSchema);

const testData = new ShoppingData({ id: 1, name: "test", price: 120 });
