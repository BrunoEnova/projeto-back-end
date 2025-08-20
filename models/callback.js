const fs = require("node:fs");

/* criar um função que retorne um promessa 
usando o fs para leitura de um arquivo
*/

function readFile(arquivo) {
  const promessa = new Promise(function (resolve, reject) {
    fs.readFile(arquivo, function (err, repsosta) {
      if (err) {
        reject(err);
        return;
      }
      resolve(repsosta.toString());
    });
  });

  return promessa;
}

readFile();

fs.readFile("./arq1.txt", function (error1, resposta1) {
  if (error1) {
    console.log("Erro ao ler o primeiro arquivo");
    return;
  }

  fs.readFile("./arq2.txt", function (error2, rersposta2) {
    fs.readFile("./arq3.txt", function (error3, rersposta3) {
      console.log(`${resposta1}${rersposta2}${rersposta3}`);
    });
  });
});

console.log("FIM");
