const { query } = require("./infra/database");

console.log(process.env.NAME);

// query("SELECT 1 + 1;")
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log("Deu ruim", err);
//   });
