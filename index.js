require("dotenv").config();
const livroRepository = require("./infra/repository/livro");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log(req.method, req.url);
  res.send("Raiz do projeto");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Inicializando server");
});

// const http = require("node:http");

// const server = http.createServer(function (req, res) {
//   // res.writeHead(200, { "content-type": "application/json" });

//   // const livros = await livroRepository.consultarTodos();

//   console.log("Method", req.method);
//   console.log("Recurso que cliente solicitou", req.url);

//   if (req.url === "/livros") {
//     res.end(`<html>
//       <head>
//         <meta charset="UTF-8" />
//         <style>
//           body {
//             font-size: 35px;
//             background-color: black;
//             color: white;
//           }
//         </style>
//       </head>
//       <body>
//        <h1>Livros</h1>
//       </body>
//     </html>`);
//     return;
//   }

//   res.end(`<html>
//       <head>
//         <meta charset="UTF-8" />
//         <style>
//           body {
//             font-size: 35px;
//             background-color: black;
//             color: white;
//           }
//         </style>
//       </head>
//       <body>
//         <h1>Seja bem vindo</h1>
//         <p>Vamos prestar atenção na aula</p>
//       </body>
//     </html>`);
// });

// const port = process.env.PORT || 3000;

// server.listen(port, function () {
//   console.log("Inicializando servidor HTTP na porta " + port);
// });
