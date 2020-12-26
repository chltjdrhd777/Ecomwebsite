const mongoose = require("mongoose");
const Product = require("./models/product");

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

/* const p = new Product({
  name: "test seed1",
  price: 3.15,
  category: "fruit",
});

p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((err) => console.log(err));
 */
const seedsData = [
  {
    name: "test seed2",
    price: 5.15,
    category: "fruit",
  },
  {
    name: "test seed3",
    price: 6.15,
    category: "diary",
  },
  {
    name: "test seed7",
    price: 7.15,
    category: "vegetable",
  },
];

Product.insertMany(seedsData)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
