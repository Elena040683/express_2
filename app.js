const express = require("express");

const products = require("./products");

const app = express();

app.get("/products", (req, res) => {
  //res.send(products);
  res.json(products);
  
})



app.listen(4000, console.log("Server running"));

