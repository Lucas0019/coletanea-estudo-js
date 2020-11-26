//DESAFIO - Personagens


/*
 * Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e ano de estréia no cinema. 
 * A função deve receber também um valor de id escolhido pelo usuário com intervalo de 1 até o tamanho máximo dos arrays fornecidos e 
 * retornar uma frase com o seguinte modelo: "personagem é um personagem do filme filme que estreou no cinema em lançamento.
 * " Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida." 
 * 
 * Deve retornar a string:
 * Leia é um personagem do filme Star wars que estreou no cinema em 1977.
 * */

//Exemplo
var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 3

// filme(personagens, filmes, lancamentos, id)  
// retorna a string "Leia é um personagem do filme Star wars que estreou no cinema em 1977."



//Função criada ára resolução do desafio
function filme(personagens, filmes, lancamentos, id) {

    //Tratando o Id para iniciar em 0
    if (id > 0 && id <= filmes.length) {
        id--
        return personagens[id] + " é um personagem do filme " + filmes[id] + " que estreou no cinema em " + lancamentos[id] + "."

    } else {
        return "Essa não é uma opção válida."
    }
}

//Testando a função
console.log(filme(personagens, filmes, lancamentos, id)); //Leia é um personagem do filme Star wars que estreou no cinema em 1977.

console.log(filme(personagens, filmes, lancamentos, 0)); // "Essa não é uma opção válida."

console.log(filme(personagens, filmes, lancamentos, 2)); // Trinity é um personagem do filme Matrix que estreou no cinema em 1999.




//Base de Entendimento

//Nota Importante: Todo array inicia-se na posição 0 !!!

// A primeira condição que o programa estabelece é que o id seja válido.
// Para que ele seja válido, o seu tamanho mínimo deve ser 1 e também não deve ser maior que o tamanho dos arrays fornecidos