const { Client } = require("pg");

async function query(sql, args = []) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "",
    password: "",
  });
  await client.connect();

  const res = await client.query(sql, args);

  await client.end();
  return res.rows;
}
