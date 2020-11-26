// Reduce
// Usado quando baseado em um array original,você precisar reduzir a um outo tipo de dado
//o reduce pode gerar um output que não necessariamente seja um array

//EXEMPLO 01 - Temos um array de numeros e queremos o total da SOMA deles
const numbers = [1, 2, 3];

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0);
// O 0 serviu para ser o primeiro valor do accumulator na primeira vez que a função foi executada

console.log(sumResult); //6

//EXEMPLO 02 - Em um array que possue a pontuação de jogadores de vídeo game em uma determinada fase, quero saber o total de um especifico
const phaseScores = [
  { name: "Vinicius Costa", score: 337 },
  { name: "Roger Melo", score: 43 },
  { name: "Alfredo Braga", score: 234 },
  { name: "Pedro H. Silva", score: 261 },
  { name: "Ana Paula Rocha", score: 491 },
  { name: "Vinicius Costa", score: 167 },
  { name: "Roger Melo", score: 137 },
  { name: "Alfredo Braga", score: 135 },
  { name: "Ana Paula Rocha", score: 359 },
  { name: "Pedro H. Silva", score: 133 },
];

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
  if (phaseScore.name === "Roger Melo") {
    accumulator += phaseScore.score;
  }
  return accumulator;
}, 0);

console.log(rogerScore);
