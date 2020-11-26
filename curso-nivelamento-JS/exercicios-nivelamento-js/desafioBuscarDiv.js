//DESAFIO - Buscar divisível por

/* Programe uma função buscarDivisivelPor que recebe dois parâmetros, um array de números e um número de teste, 
 * retornando como resposta o primeiro número do array que seja divisível pelo número dado e diferente de zero. 
 * Caso nenhum número do array passe no teste, retorne o texto "Nenhum número válido encontrado!". 
 */


//Array informado aqui no meu código para teste
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//Função criada ára resolução do desafio
function buscarDivisivelPor(array, num) {
    for (var i = 0; i < array.length; i++) {

        if (array[i] % num == 0 && array[i] != 0) {
            return array[i]
        }
    }
    return "Nenhum número válido encontrado!";
}


//Testando a função
console.log(buscarDivisivelPor(array, 2)); //2
console.log(buscarDivisivelPor(array, 8)); //2
console.log(buscarDivisivelPor(array, 3)); //2
console.log(buscarDivisivelPor(array, 0)); //Nenhum número válido encontrado!
console.log(buscarDivisivelPor(array, 1.5)); //3