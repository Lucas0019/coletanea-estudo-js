//Operadores Relacionais

var​ A = ​20
var​ B = ​10

A > B​ // o resultado da comparação é true (verdadeiro)
A < B​ // o resultado da comparação é false (falso)
A >= B // o resultado da comparação é true (verdadeiro)
A <= B​ // o resultado da comparação é false (falso)

//atençao
var x = '20' //string
var y = 20 //Number

x == y //true
x === y //false


// Condicional - Votação
// No sistema político atual, temos algumas regras para participar das eleições.
//  A principal delas, é que o voto é obrigatório a partir dos 18 anos, e opcional quando idade for igual a 16! 


// Diante desse cenário, escreva um código que de acordo com a variável 
// idade informe ao usuário usando console.log(), 
// “Você é obrigado a votar” caso ele cumpra o requisito ou “Seu voto é opcional”.

var idade = 17

if (idade > 18) {
    console.log('Voce é obrigado a votar');
}

if (idade == 16) {
    console.log('Seu voto é opcional');
}