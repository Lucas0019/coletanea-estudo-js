//Loop com Array

var cores = ['Red', 'Blue', 'Black']

// var frase = 'A cor do sangue é: ' + cores[0]
// console.log(frase);

for (i = 0; i < cores.length; i++) {
    console.log('Cores : ' + cores[i]);
}

// Loop com Array - Lista de Carros
// Uma agência de carros quer exibir seu catálogo para os clientes. 
// Eles exportaram os nomes dos carros no formato de array que se chama listaDeCarros,
//  que vai estar disponível no código. Seu trabalho é percorrer essa array exibindo os nomes dos carros:

// “Nome do Carro: Fox”
// “Nome do Carro: Uno”

// Crie um loop que atenda o problema acima utilizando uma variável chamada i como contador, 
// e que use o console.log para exibir o nome dos carro de acordo com o exemplo acima.

var listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"]


for (i = 0; i < listaDeCarros.length; i++) {
    console.log('Nome do Carro: ' + listaDeCarros[i]);
}

// Loop com Array - Lucros

// Uma empresa separou em uma lista, os valores dos lucros mensais. 
// Com isso você terá no código um array com o seguinte nome:
//  listaDeLucro contendo em cada posição o valor de recebido de cada mês!

// var listaDeLucro = [100, 30, 300, -10, 600, 10]

// Seu trabalho será criar um loop que calcule o valor total baseado nessa lista, 
// e coloque o valor em uma variável já existente no código chamada: lucroTotal

var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;

for (i = 0; i < listaDeLucro.length; i++) {
    console.log(lucroTotal += listaDeLucro[i]);
}


// Loop com Array - Saldo negativo
// Uma empresa mandou uma lista contendo os números mensais de tudo o que ela faturou, 
// e nosso trabalho é ajudá-los a criar um relatório que exiba em quantos meses eles tiveram o saldo negativo.

// var listaDeGanhos = [10, 30, -10, -5, -1, 40]

// Com base no array acima, que está disponível no código, 
// faça um loop que verifique quantos meses tiveram valores negativos e
// armazene a contagem uma variável chamada totalNegativos que também está disponível no código.


var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0

//seu loop aqui:
for (var i = 0; i < listaDeGanhos.length; i++) {
    if (listaDeGanhos[i] < 0)
        totalNegativos++
}
console.log(totalNegativos);



// Loop Array - Frutas
// Um sacolão montou uma lista com as frutas que eles vendem, 
// e de acordo com a fruta que o usuário busca eles querem informar se existe a fruta na lista ou não! 

// var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]

// Você deverá criar um loop que verifique se a fruta contida na variável 
// busca existe na lista de frutas do sacolão. Se existe basta exibir uma mensagem,
//  “Sim, temos a fruta banana disponível”. Use a variável busca para exibir 
//  o nome da fruta nessa mensagem de forma dinâmica.
var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"]
var busca = "Cajá"

//seu loop aqui

for (var i = 0; i < listaDeFrutas.length; i++) {
    if (listaDeFrutas[i] == busca) {
        console.log("Sim, temos a fruta Cajá disponível")
    }
}