//Funções com parâmetros

function somarDois(numA, numB) {
    return numA + numB
}

console.log(somarDois(2, 2)); //4




function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maiorNumero(8, 4));


// Funções parametrizadas - Menor Número
// Escreva uma função chamada menorNumero.
// Ela deve receber dois números como parâmetro
// e retornar o menor entre eles.
// caso os números sejam iguais,
// basta que se retorne qualquer um deles.

function menorNumero(numA, numB) {
    if (numA < numB) {
        return numA;
    } else {
        return numA, numB;
    }
}


console.log(menorNumero(5, 10)); //5
console.log(menorNumero(10, 10)); //10



// Funções parametrizadas - Autonommia

// Os engenheiros de uma montadora estão projetando o computador de bordo de um carro. 
// Eles precisam de uma função que possa calcular a autonomia atual do automóvel, 
// em outras palavras, quantos quilômetros ele consegue andar com a quantidade de combustível atual.
// A autonomia pode ser obtida multiplicando a quantidade de combustível pelo rendimento. Será que você consegue ajudá-los?

// Escreva uma função chamada autonomia:
//  Essa função deve receber dois parâmetros:

// O primeiro, que represente a quantidade de combustível que está no tanque
// O segundo, que represente o rendimento do automóvel
// A função deve retornar a autonomia do automóvel.
// Lembre-se: a autonomia do automóvel pode ser obtido multiplicando 
// o rendimento pela quantidade de combustível presente no tanque.


function autonomia(quantidadeDeCombustivel, rendimento) {
    return quantidadeDeCombustivel * rendimento;
}

console.log(autonomia(20, 3));


// Funções parametrizadas - calculaValorDevido

// A lavanderia DigitalLaundry lava roupa por quilo. 
// Ela cobra dos seus clientes R$ 5,00 por cada quilo de roupa suja.
// Atualmente, eles usam um caderninho e uma calculadora para descobrir 
// o valor que cada cliente tem a pagar. Precisamos automatizar essa empresa!

// Escreva uma função calculaValorDevido
// A função recebe como parâmetro o peso de roupa suja (em quilos) e deve retornar o valor a ser cobrado do cliente.

function calculaValorDevido(pesoDaRoupaSuja) {

    return pesoDaRoupaSuja * 5

}



// Funções parametrizadas - calculaValorDevido 2

// Depois de nossa consultoria, a lavanderia DigitalLaundry percebeu que poderia deixar a sua cobrança mais sofisticada 
// e justa. Ela decidiu cobrar R$10,00 fixo, a título de taxa de serviço (independente da quantidade de roupa),
//  mais R$ 3,00 por quilo de roupa suja. Reescreva a função calculaValorDevido

// Essa função recebe como único parâmetro a quantidade de roupa suja. 
// Ela deve retornar o valor a ser cobrado do cliente usando a nova política de preços0

function calculaValorDevido(pesoDeRoupaSuja) {
    var preco = pesoDeRoupaSuja * 3

    preco += 10
    return preco
}

console.log('R$' + (calculaValorDevido(20.50)).toFixed(2))

//A saída desse teste será R$71.50