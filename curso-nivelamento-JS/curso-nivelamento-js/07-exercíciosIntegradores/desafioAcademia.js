// Academia 

// Uma academia precisa separar grupos de pessoas tendo como base a sua altura para que dessa forma consiga formar grupos para as aulas de zumba. 
// Temos um array que lista a altura de cada aluno da academia, e outros 3 arrays (Grupo A, B e C) que são classificados da seguinte forma: 

// grupoA - Alunos com altura entre 150 a 159
// grupoB - Alunos com altura entre 160 a 169
// grupoC - Alunos com altura de 1.70 ou mais

// Seu trabalho é pegar cada valor do array alunos e colocar o valor correspondente em seu respectivo grupo. Para esse exercício, 
// você precisará usar loops, condicionais e funções de arrays. 

var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB = []
var grupoC = []

for (var i = 0; i < alunos.length; i++) {

    if (alunos[i] <= 159) {
        grupoA.push(alunos[i])

    } else if (alunos[i] <= 169) {
        grupoB.push(alunos[i])
    } else {
        grupoC.push(alunos[i])
    }
}