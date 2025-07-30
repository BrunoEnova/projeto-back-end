const fs = require("node:fs");


fs.readFile("./arq1.txt", function (error1, resposta1) {
  if (error1) {
    console.log("Erro ao ler o primeiro arquivo")
    return
  }

  
  fs.readFile("./arq2.txt", function (error2, rersposta2) {
    fs.readFile("./arq3.txt", function (error3, rersposta3) {
      console.log(`${resposta1}${rersposta2}${rersposta3}`);
    });
  });
});

console.log("FIM");
