const { query } = require("./infra/database");

query("SELECT 1 + 1;")
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log("Deu ruim", err);
  });
