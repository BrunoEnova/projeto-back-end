const readfile = require("node:readline");
const terminal = readfile.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question("Qual seu nome: \n", function (valor) {
  console.log("Seja bem vindo " + valor);
});
git add . && git commit -m "ok" && git push  