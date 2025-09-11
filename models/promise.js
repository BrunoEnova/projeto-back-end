const readfile = require("node:readline");
const terminal = readfile.createInterface({
  input: process.stdin,
  output: process.stdout,
});


async function test()  {
  try{
    const valor = await question()
  }catch(e){

  }finally{
    
  }

}


function question(pergunta) {
  const promessa = new Promise(function (resolve, reject) {
    terminal.question(pergunta, function (valor) {
      resolve(valor);
    });
  });
  return promessa;
}

question("Qual seu nome? \n")
  .then(function (nome) {
    console.log("Nome: " + nome);
  })
  .catch(function (error) {
    console.log("Deu error " + error);
  })
  .finally(function () {
    terminal.close();
  });

// terminal.question("Qual seu nome ?\n", function (nome) {
//   console.log("Nome: " + nome);
//   terminal.close();
// });

// const promessa = new Promise(function (resolve, reject) {
//   resolve("Sucesso");
// });

// promessa
//   .then(function (resultado) {
//     console.log("bloco de sucesso", resultado);
//   })
//   .catch(function (e) {
//     console.log("bloco de error ", e);
//   })
//   .finally(function () {
//     console.log("Finalizou");
//   });

// function question(pergunta) {
//   return new Promise(function (resolve, reject) {
//     terminal.question(pergunta + "\n", function (valor) {
//       resolve(valor);
//     });
//   });
// }
// question("Qual seu nome")
//   .then(function (valor) {
//     console.log(`Seja bem vindo ${valor}`);
//   })
//   .finally(function () {
//     terminal.close();
//   });
