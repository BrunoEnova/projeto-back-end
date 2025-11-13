require("dotenv").config();
const livroRepository = require("./infra/repository/livro");
const express = require("express");
const app = express();

app.get("/", async function (req, res) {
  const livrosTops = await livroRepository.consultaTops();

  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
`;

  for (livro of livrosTops) {
    html += `<li>${livro}</li>`;
  }

  html += `
    </ul>
  </body>
</html>`;

  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Inicializando server");
});
