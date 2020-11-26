//Condicional IF
var diaDaSemana = 'quarta-feira'

if (diaDaSemana === 'quarta-feira') {
    console.log('Hoje é dia de feijoada!!!');
}


// Condicional IF
// Precisamos de um código que verifique a idade do usuário para ver se já tem idade mínima para adquirir carta de habilitação.
// Para isso, teremos uma variável nome que guarda um valor do tipo string, e uma variável idade que guarda um valor do tipo numérico.

// O sistema deve cumprimentar o usuário independente da idade, o resultado seria assim:

// Caso o usuário tenha idade mínima para dirigir imprima: 

// “Olá, NOME_DO_USUARIO_AQUI”
// ”Você passou no nosso teste e já pode dirigir!”.

// Caso o usuário não tenha a idade mínima para dirigir imprima somente o cumprimento:

// “Olá, NOME_DO_USUARIO_AQUI”

var nome = "João"
var idade = 17

if (idade >= 18) {
    console.log('Ola, ' + nome + 'Você passou no nosso teste e já pode dirigir!')
}

// Condicionais - Conta bancária
// Queremos um código que oriente o usuário de acordo com o saldo da conta bancária. 
// Para isso precisamos de uma variável saldo que guarda um número decimal(float), 
// e imprime uma mensagem de acordo com a situação financeira. Se o saldo for maior que 0 (zero) 
// imprima “Seu saldo está positivo! Gostaria de fazer um investimento?”, 
// agora, se o saldo for menor que zero(0) imprima “Seu saldo está negativo! Gostaria de fazer um empréstimo?”

// Seu código aqui
var saldo = 1045.00

if (saldo > 0.0) {
    console.log('Seu saldo está positivo! Gostaria de fazer um investimento?')
}

if (saldo < 0.0) {
    console.log('Seu saldo está negativo! Gostaria de fazer um empréstimo?')
}