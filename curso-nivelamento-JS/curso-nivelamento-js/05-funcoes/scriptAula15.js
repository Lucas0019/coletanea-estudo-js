//Executando Funções

function subtrair(numA, numB) {
    return numA - numB;
}

console.log(subtrair(4, 2)); //2
console.log(subtrair(8, 6)); //2
console.log(subtrair(2, 9)); //-7

// Usando funções - Começa com Maiúscula
// O código abaixo já tem a função comecaComMaiuscula(palavra) definida.
// Essa função retorna true caso a palavra passada no parâmetro seja iniciada por uma letra maiúscula
//e false caso contrário. Use um for  com um contador i para imprimir para cada palavra no array
// de palavras as seguintes frases:

//“Começa com maiúscula” caso a palavra comece com maiúscula
//e “Não começa com maiúscula” caso contrário.

function comecaComMaiuscula(palavra) {
    return /^[A-Z]/.test(palavra);
}
var palavras = ["Amor", "copo", "Bolacha", "biscoito"];

//
var resultado = comecaComMaiuscula(palavras);

for (var i = 0; i < palavras.length; i++) {
    if (palavras[i] == resultado) {
        console.log("Começa com maiúscula");
    } else {
        console.log("Não começa com maiúscula");
    }
}

// Usando funções - Valida CPF

// Temos no código abaixo uma função que já foi definida. Ela se chama validaCPF.
// Ela definida para receber um parâmetro que representa um possível CPF.
// Tudo que ela faz resumi-se em um único objetivo:
// Retornar true caso o parâmetro seja um CPF válido ou false caso contrário.
// Eis aqui algo legal sobre funções: tudo que você precisa para utilizá-las é saber o que ela faz.
// Você não precisa saber o como ela faz.

// Execute utilize a função validaCPF para imprimir “CPF válido”
// caso o “576.524.020-85” seja um cpf válido. Caso contrário, imprima “CPF inválido”

// validaCPF("576.524.020-85")

// for (var i = 0; i < validaCPF.lenght; i++) {

//     if (validaCPF[i] == true) {

//         console.log('CPF válido')

//     } else {

//         console.log("CPF inválido")

//     }
// }

// Usando funções - deixaEntrar

// Uma rede de cinemas quer implementar um sistema para controlar a entrada nas suas salas.
// Os clientes, antes de entrar na sala, devem apresentar o RG em uma câmera.
// A câmera seria capaz de ler a data de nascimento do cliente e,
// caso ele não tenha idade suficiente para assistir a sessão, o acesso dele não seria autorizado.
// Um dos programadores já fez uma função que calcula a idade com base na data de nascimento.
// Ela recebe como parâmetro uma data de nascimento no
// formato dd/mm/aaaa (dia com dois dígitos, mês com dois dígitos e ano com quatro dígitos) e retorna idade da pessoa hoje.

// Precisamos agora que você escreva a função deixaEntrar(dataDeNascimento, censura).
// A função deve receber dois parâmetros:
// O primeiro deve representar a data de nascimento do cliente no formato dd/mm/aaaa
// O segundo deve representar a censura da sessão, ou seja, a idade mínima do cliente para que ele possa acessar a sala.
// A função deve retornar true caso o cliente tenha idade maior ou igual a censura e false caso contrário.

// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
    var [dia, mes, ano] = dataDeNascimento.split("/");

    var d = new Date();
    var anoAtual = d.getFullYear();
    var mesAtual = d.getMonth() + 1;
    var diaAtual = d.getDate();

    ano = +ano;
    mes = +mes;
    dia = +dia;

    var quantosAnos = anoAtual - ano;

    if (mesAtual < mes || (mesAtual == mes && diaAtual < dia)) {
        quantosAnos--;
    }

    return quantosAnos < 0 ? 0 : quantosAnos;
}

//A função
function deixaEntrar(dataDeNascimento, censura) {
    return calcularIdade(dataDeNascimento, censura);
}

// Usando funções - Filtrar produtos

// Uma loja virtual permite a seus visitantes filtrar produtos pelo preço.
// Existe um array com os preços dos produtos. Um programador já criou uma função maisBaratosQue(valor, precos)
// que retorna um array com os preços dos produtos mais baratos que o valor passado como parâmetro.
// Outro programador já criou uma função maisCarosQue(valor, precos) que retorna um array com os preços mais caros
// que o valor passado como parâmetro. Chegou sua vez!

// Crie uma função precosEntre(valorMenor, valorMaior, precos)
// que deve utilizar as funções maisBaratosQue e maisCarosQue para retornar os preços que estão entre o valorMenor e o valorMaior.
// Sua função deve receber então dois parâmetros:

// valorMenor para representar o valor mínimo dos preços a serem listados
// valorMaior para representar o valor máximo dos preços a serem listados
// precos para representar um array com os preços dos produtos
// Ela deve retornar um array com todos os preços entre valorMenor e valorMaior

function maisBaratosQue(valor, precos) {
    return precos.filter((p) => p <= valor);
}

function maisCarosQue(valor, precos) {
    return precos.filter((p) => p >= valor);
}

function precosEntre(valorMenor, valorMaior, precos) {
    var maisBaratos = maisBaratosQue(valorMaior, precos);

    return maisCarosQue(valorMenor, maisBaratos);
}