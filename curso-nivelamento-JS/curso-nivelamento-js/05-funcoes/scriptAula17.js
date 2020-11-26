//Exercícios


// Funções Nativas - Estava presente na aula?

// Nas escolas do futuro não haverá necessidade de chamadas. 
// Ao entrar em sala, uma câmera fará o reconhecimento facial do aluno e registrará sua presença!
// Imagine que, a cada aula, um array guardasse o nome de todos os alunos que estiveram presentes na aula.

// Escreva uma função estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes)
// Essa função deve receber dois parâmetros:

// O primeiro deve representar o nome de um aluno
// O segundo deve representar um array com o os nomes dos alunos presentes.

// A sua função deve retornar true caso o nome do aluno passado como parâmetro estiver entre os presentes. false caso contrário.
var nomeDoAluno = "Lucas"

var nomesDosPresentes = ["João", "Lucas", "Eduarda", "André"]

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
    if (nomesDosPresentes.indexOf(nomeDoAluno) != -1) {
        return true;
    } else {
        return false;
    }
}


// Funções Nativas - transformaParaMaiusculo
//  Algumas vezes precisamos padronizar as informações antes de guardá-las no nosso sistema. 
//  Escreva uma função transformaParaMaiusculo(palavras). 
//  Essa função recebe como parâmetro um array de palavras. 
//  Ela deve retornar um array com a versão MAIÚSCULA de todas as palavras contidas no array passado como parâmetro.

function transformaParaMaiusculo(palavras) {

    var array = Array()

    for (var i = 0; i < palavras.length; ++i)

        array.push(palavras[i].toUpperCase())

    return array

}


// Funções Nativas - Gerar Dezenas
// Uma fábrica de biscoitos da sorte precisa de um sistema.
// O sistema deve gerar seis dezenas aleatórias para serem impressas.
// Sabe como é: Palpites para seus clientes jogarem na mega sena! 
// O seu trabalho é escrever uma função gerarDezenas(). 
// Essa função não recebe nenhum parâmetro. 
// Tudo que ela deve fazer é gerar e 
// retornar um array contendo seis números aleatórios entre 1 e 60.

function gerarDezenas() {

    var array = Array();

    for (var i = 0; i < 6; i++) {

        array.push(Math.round(Math.random * 59) + 1);

    }

}



// Funções Nativas - Maximo e Minimo
// Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
// Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros
// e o segundo elemento é o maior dos parâmetros.

function maxmin(a, b, c, d, e) {

    var menor = ["1", "2", "3", "4", "5"]

    var maior = ["5", "4", "3", "2", "1"]

    Math.min(menor, maior)

    Math.max(menor, maior)

    return [menor, maior]

}