// Map

// Usado para gerar outro array com a mesma quantidade de itens do array anterior,
// só que com cada item transformado

//Exemplo 01 - Multiplicando o Array
const numbers = [1, 2, 3];
const doubleNumbers = numbers.map((item) => item * 2);

console.log(doubleNumbers); // [ 2, 4, 6 ]

//Exemplo 02 - Dividindo o Array
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const salePrices = prices.map((price) => price / 2);

console.log(salePrices); //[10, 5, 15, 12.5, 7.5, 20, 40, 2.5]

//Exemplo 03 - Criar um novo array de produtos, e os mesmo que tiverem com preço >= R$ 30, 00 devem custar  a metade
const products = [
  { name: "Mouse Sem Fio", price: 30 },
  { name: "Pen Drive", price: 25 },
  { name: "Cartucho de Tinta", price: 50 },
  { name: "Suporte Ergonômico para Notebook", price: 23 },
  { name: "Repetidor de Sinal Wi-Fi", price: 44 },
];

const saleProducts = products.map((product) => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2 };
  }

  return product;
});

console.log(Products);
console.log(saleProducts);
