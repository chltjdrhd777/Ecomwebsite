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
