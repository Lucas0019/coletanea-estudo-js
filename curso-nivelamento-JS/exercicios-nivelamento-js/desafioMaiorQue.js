//DESAFIO - Maior que o número


/*
 * Programe uma função maiorQueNum que busca em um dado array apenas os números maiores do que o número 
 * fornecido no segundo parâmetro da função e retorna um novo array apenas com esses números. */


//Array informado aqui no meu código para teste
var numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]


//Função criada ára resolução do desafio
function maiorQueNum(array, num) {
    var maiorQueNum = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] > num) {
            maiorQueNum.push(array[i])
        }
    }
    return maiorQueNum;
}


//Teste da Função
console.log(maiorQueNum(numeros, 5)); //[ 10, 7, 128, 42, 300 ]