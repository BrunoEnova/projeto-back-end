// @ts-check
const caculadora = {
  somar: function (valor1, valor2) {
    return valor1 + valor2;
  },
};

test("Somar 2 + 2 deveria retornar 4", function () {
  const resultado = caculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 100 + 5 deveria retornar 105", function () {
  const resultado = caculadora.somar(100, 5);
  expect(resultado).toBe(105);
});
