//Funções Nativas em JS

//Funções em Array
//.pop() - Remove sempre o ultimo elemento de um array

var frutas = ['Bananas', 'Uva', 'Pera', 'Laranja']

var removeUltimaFruta = frutas.pop() //Laranja

console.log(removeUltimaFruta); //Laranja
console.log(frutas);


//.push() - adiciona um novo item na ultima posição de um array
frutas.push('Goiaba')
console.log(frutas);


//.indexOf() - Verifica se um elemento existe no array
console.log(frutas.indexOf('Goiaba')); //Retorna a posição do elemento

console.log(frutas.indexOf('Melancia')); //Retorna -1 , pois o elemento não existe


//Math
// Biblioteca matemática

//Math.random() - Retorna um numero aleatorio entre 0  e 1
console.log(Math.random().toFixed(2));

console.log(Math.random().toFixed(2) * 50); //Entre 0 e 50

//Math.round() - Arredonda o numero para inteiro
console.log(Math.round(Math.random() * 50)); // Ex: 20

//Math.min() - Retorna o menor valor de dois ou mais parâmetros
console.log(Math.min(10, 20, 5)); //5

var precoTubaina = 3.50
var precoGuarana = 4.00
var precoCocaCola = 10.00

console.log(Math.min(precoTubaina, precoGuarana, precoCocaCola)); //3.5

//Math.max() - Retorna o maior valor de dois ou mais parâmetros
console.log(Math.max(precoTubaina, precoGuarana, precoCocaCola)); //10.00




//Funções String

//.repeat() - Repete um string
console.log('Eae Dev'.repeat(5)); // Eae Dev Eae Dev Eae Dev Eae Dev Eae Dev

var bomDia = 'Bom dia'
console.log(bomDia.repeat(3));

//.toUpperCase() - Converte em maiúsculas

var souMinusculo = 'lucas xavier'

console.log(souMinusculo.toUpperCase()); //LUCAS XAVIER


//Teste Pratico
var linguagensDeProgramacao = ["Javascript", "PHP", "Node.js", "Cobol", "C#", "Python"]
console.log(linguagensDeProgramacao.indexOf("Node.js"));