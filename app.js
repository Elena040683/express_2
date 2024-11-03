const express = require("express");

const products = require("./products");

const app = express();
app.set("json spaces", 8);

app.get("/", (req, res)=> {
  res.render("homepage", {title: "Home page"})
});

app.get("/products", (req, res) => {
  //res.send(products);
  res.json(products);
  // res.json(null);
  // res.send(null);
})



app.listen(4000, console.log("Server running"));

