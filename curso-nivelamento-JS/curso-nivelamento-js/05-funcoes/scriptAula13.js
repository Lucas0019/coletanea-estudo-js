//Funções
function saudacao() {
    console.log('Eae Dev');
}

//Chamando a função e executando
saudacao()



// Declarando funções - Listar produtos
// Um mercado tem uma lista de produtos, que eles querem exibir para todo novo cliente que chegar! 
// Como o processo é um pouco trabalhoso e repetitivo eles precisam do seu conhecimento em funções para ajudá-los.

// Eles já tem um código, porém toda vez eles precisam reescrever o código para exibir ao cliente:

// Seu trabalho é melhorar esse código, para ficar mais simples utilizá-lo. 
// Precisamos que você transforme o código acima em uma função chamada listarProdutos.




function listarProdutos() {
    var lista = ['Leite', 'tomate', 'Biscoito', 'Tapioca']
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

listarProdutos()



// Declarando funções - Cartão de visita
// Crie uma função chamada cartaoDeVisitas, ela deverá imprimir o seu nome em conjunto com sobrenome!



function cartaoDeVisitas() {
    var nome = 'Lucas dos Santos'
    var sobrenome = 'Xavier'
    console.log(nome + ' ' + sobrenome);
}

cartaoDeVisitas()



// Declarando funções - Tabuada do Sete
// Uma professora quer ajudar os alunos a decorarem a tabuada do 7 exibindo o resultado para eles! 
// Crie uma função chamada tabuadaDoSete que imprima a tabuada do sete utilizando um loop.

// O resultado da sua função deve ser:

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

function tabuadaDoSete() {
    var x = 7
    for (var i = 1; i <= 10; i++) {
        console.log('7 x ' + i + ' = ' + x * i);
        // more statements
    }

}

tabuadaDoSete()