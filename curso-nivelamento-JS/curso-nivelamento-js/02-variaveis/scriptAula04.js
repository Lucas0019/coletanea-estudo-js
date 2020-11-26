// Exercício: Cálculos
// Declare e atribua duas variáveis: numeroA e numeroB, em que ambas precisam conter um valor numérico. 
// Em seguida, faça as variáveis de soma, subtração, multiplicação e divisão utilizando essas duas variáveis.

var numeroA = 20
var numeroB = 20

var soma = numeroA + numeroB
var subtracao = numeroA - numeroB
var multiplicacao = numeroA * numeroB
var divisao = numeroA / numeroB

console.log(soma, subtracao, multiplicacao, divisao); //40 0 400 1



// Exercício - Cálculo de Lucros
// Uma empresa separou os seus ganhos dos meses nas seguintes variáveis:
// Ela precisa da sua ajuda para saber o total do lucro adquirido.
// Sua missão é usar os operadores junto com as variáveis para fazer esse 
// cálculo e use o console.log para imprimir o resultado!



//Para lhe auxiliarmos, já deixamos o código inicial:

var janeiro = 100
var fevereiro = 300
var marco = 90
var valorTotal = janeiro + fevereiro + marco
console.log(valorTotal);



// Exercício: Cálculo de média
// Em uma escola, um professor quer calcular a média de notas dos seus alunos.
// Ele tem separado em variáveis cada nota dos trabalhos realizados por cada aluno:

var trabalhoDeHistoria = 8.0
var trabalhoDeMatematica = 7.0
var trabalhoDeCiencia = 10
var trabalhoDeGeografia = 9.5
var totalDeTrabalhos = 4



// O professor já sabe que a média é calculada com a soma de todas as notas e dividindo pelo total. 
// Mas ele se perdeu um pouco no código, e precisa da sua ajuda para terminar essa tarefa! 
// Sua missão é ajudar o professor com o seu conhecimento dos operadores aritméticos para calcular
// a média dos alunos. Atribua na variável media o cálculo matemático para chegar no valor requisitado.

var mediaTotal = (trabalhoDeHistoria + trabalhoDeMatematica + trabalhoDeCiencia + trabalhoDeGeografia) / totalDeTrabalhos
console.log(mediaTotal.toFixed(2));