// Dados de um usuário

// Em uma  academia está acontecendo um cadastro de vários usuários 
// contendo as seguintes informações: nome, idade e altura. 
// E para realizar um determinado treino, 
// existe alguns requisitos: Ter 18 anos ou mais e ter uma altura igual ou maior a 1,70.

// Crie uma função chamada maiorAlto que retorne verdadeiro (true) caso ele atenda os requisitos, 
// e falso (false) para o contrário. Nessa função você irá receber um parâmetro que será um array, 
// contendo na primeira posição o nome, segunda posição a idade do aluno e na terceira contendo a altura em Centímetros.

// Exemplo:
// maiorAlto(["Aluno incrível", 18, 170]) // retorna true
// maiortAlto(["Aluno baixo", 17, 150]) // retorna false

var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]

function maiorAlto(usuario) {
    if (usuario[1] >= 18 && usuario[2] >= 170) {
        return true;
    } else {
        return false;
    }
}