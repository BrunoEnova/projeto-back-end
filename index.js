require("dotenv").config();
const livroRepository = require("./infra/repository/livro");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Oi sou túlio");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Inicializando server");
});
