//Break e Continue

var listaDeNomes = ['Lucas', 'Eduarda', 'Bianca', 'Gabrielle']
var buscarNome = 'Eduarda'

//loop
for (var i = 0; i < listaDeNomes.length; i++) {
    if (listaDeNomes[i] == buscarNome) {
        console.log('Encontrei o nome');
        break; //Evita percorrer o array apos encontrado o nome
    }
}

//continue
for (var i = 0; i < listaDeNomes.length; i++) {
    if (listaDeNomes[i] == buscarNome) {

        continue; //Pular o nome informado
    }
    console.log(listaDeNomes[i]);
}



// Break e Continue - Bingo

// Vamos criar um bingo, onde os números da cartela serão representados por um array chamado cartela, 
// e o número sorteado deve ficar em uma variável chamada numeroSorteado. 
// Seu trabalho será  verificar se existe o número sorteado na cartela,
//  quando encontrar deve imprimir “Encontrei o número!” e parar o loop!

var cartela = [8, 13, 18, 22, 42, 49]
var numeroSorteado = 42 //Quarta Posição no array

for (var i = 0; i < cartela.length; i++) {
    if (cartela[i] == numeroSorteado) {
        console.log('Encontrei o número!');
        break; //Evita percorrer o array apos encontrado o nome
    }
}

// Break e Continue - Números Pares
// Precisamos imprimir somente os números pares de 0 à 20.
//  Mas temos alguns requisitos, você precisa utilizar, o loop for, 
//  o comando continue e o numero deve ser o contador do loop! Vamos lá?

// (meuNumero % 2 == 0)


for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
        continue; //Evita percorrer o array apos encontrado o nome
    }
}



// Break e Continue - Sobrenome da família
// Temos uma lista com nomes de todos os integrantes da família mas esqueceram de colocar o sobrenome!
// Seu desafio será imprimir nome junto com o sobrenome "Macedo" para cada integrante da família.
// Mas temos uma exceção, temos um integrante com sobrenome diferente, se tiver algum "Pedro", coloque o sobrenome  "Sousa".

// Dica: Utilize for e continue para criar a solução.

// Acrescente um espaço antes do sobrenome, por exemplo: “Sousa”.

var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

for (var i = 0; i < familia.length; i++) {

    if (familia[i] == "Pedro") {

        console.log(familia[i] + " Sousa")

        continue

    }

    console.log(familia[i] + " Macedo")

}


// Break e Continue - Baralho
// Temos um array em uma variável chamada baralho e 
// precisamos de um script que procure a carta “Rei” 
// entre as cartas do baralho. Assim que encontrar o “Rei”
// pare o loop utilizando break  e exiba um console.log 
// a seguinte frase: Encontrei o Rei!

var baralho = ["Ás", "Dama", "Rei", "Valete"]


for (var i = 0; i < baralho.length; i++) {

    if (baralho[i] == "Rei") {

        console.log("Encontrei o Rei!")

        break

    }

}