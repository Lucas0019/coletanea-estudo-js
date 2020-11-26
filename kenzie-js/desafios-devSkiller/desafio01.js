// Calcular notas

// Nessa entrega, você tem como objetivo calcular e avaliar a média dos alunos.
// Você receberá vários arrays de notas, que podem possuir de 4 a 5 números.
// Quando o Array tiver 5 números, o último valor será considerado uma nota extra (bônus).

//EXEMPLO

//O número 20 é um bônus
// [80,80,80,80,20]

//Não possui bônus
// [80,80,80,80]



//Passo 01
function somarNotas(notas) {
    let sum = 0

    for (let i = 0; i < notas.length; i++) {
        sum += notas[i]
    }

    return sum;
}


//Passo 02
function calcularMedia(notas) {
    let media = somarNotas(notas) / 4
    return media;
}


///Passo 03
function avaliacao(media) {
    if ((media) === 100) {
        console.log('O aluno passou com nota a nota máxima');
        return true;
    } else if ((media) >= 70) {
        console.log('O aluno passou');
        return true;
    } else {
        console.log('O aluno reprovou');
        return false;
    }
}


//Meus testes locais
console.log(somarNotas([80, 80, 80, 80]));//320
console.log(calcularMedia([80, 80, 80, 80])); //80
console.log(avaliacao([80])); // o Aluno passou , true







