//If Else
var grauCelsius = 18;

if (grauCelsius < 18) {
    console.log("Está ficando frio. Não esqueça de levar um agasalho!")
} else {
    console.log("O clima está agradável! Não esqueça o óculos de sol :)")
}

// Condicionais - Autoescola
// Vamos otimizar nosso sistema de autoescola!
// Caso o usuário tenha 18 anos ou mais, ele pode dirigir, se a afirmação for negativa precisamos imprimir a mensagem “Ops, você ainda não tem a idade mínima para dirigir!”.
// Parte do código já está pronto, agora é sua vez de utilizar o else para dar um feedback ao usuário!

var idade = 15

if (idade >= 18) {
    console.log("Você já pode dirigir!")
} else {
    console.log("Ops, você ainda não tem a idade mínima para dirigir!")

}


// Condicionais - Estrangeiro
// Utilize a condicional if/else para verificar a variável estrangeiro que guarda um valor booleano. 
// Caso o valor seja verdadeiro solicite o Registro Nacional de Estrangeiros(RNE).
// Se o valor for falso solicite o Cadastro de Pessoa Física (CPF).
// Mensagem para estrangeiro: “Você poderia apresentar seu RNE, por favor?”
// Mensagem para brasileiro: “Você poderia apresentar seu CPF, por favor?”
var estrangeiro = true

// escreva seu código aqui
if (estrangeiro) {
    console.log("Você poderia apresentar seu RNE, por favor?")
} else {
    console.log("Você poderia apresentar seu CPF, por favor?")
}


// Condicional IF ELSE - Aposentado
// Precisamos verificar se uma pessoa pode se aposentar com base na idade.
// Utilize a condicional if else para verificar se a variável idade é maior que 65 e imprima uma mensagem para cada caso:

// Condição verdadeira : “Você já pode se aposentar”
// Condição falsa: “Você ainda não pode se aposentar”

var idade = 40

if (idade >= 65) {
    console.log("Você já pode se aposentar");
} else {
    console.log("Você ainda não pode se aposentar");
}

// Condicionais - IF ELSE - Par ou ímpar?
// Dentro do código estará criada uma variável numeroDaSorte  contendo um número. 
// Sua missão é verificar se o valor da variável é par ou ímpar utilizando o operador relacional módulo (%). 
// Imprima “Par” ou “Ímpar” de acordo com o resultado.

var numeroDaSorte = 18

// (meuNumero % 2 == 0)

if (numeroDaSorte % 2 == 0) {
    console.log('Par')
} else {
    console.log('Impar')
}