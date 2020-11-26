// Filter
// Usado para gerar outro array novo, só que, só alguns itens do array original

//EXEMPLO 01 - Coletar somente  os numeros numa escala de 0 a 100 que são maiores que 37
const radomNumbers = [36, 99, , 37, 63, 48];
const maiorQue37 = radomNumbers.filter((item) => item > 37);

console.log(maiorQue37);

//EXEMPLO 02 - Um Array de Users, e só obter um array de Users Premium
const users = [
  { name: "Ada Lovelace", premium: true },
  { name: "Grace Hopper", premium: false },
  { name: "Alan Turing", premium: true },
  { name: "Linus Torvalds", premium: false },
  { name: "Margaret Hamilton", premium: true },
];

const premiumUser = users.filter((userItem) => userItem.premium);
console.log(premiumUser);
