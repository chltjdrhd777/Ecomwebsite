import { data } from "./data.js";
import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("server is ready");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`starting from ${port}`);
});
