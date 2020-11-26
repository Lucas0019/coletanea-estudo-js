// Você obtém uma matriz de números, retorna a soma de todos os números positivos.
// Exemplo [1, -4,7,12] => 1 + 7 + 12 = 20 
// Nota: se não houver nada para somar, o valor padrão é 0.

function positiveSum(arr) {

    var sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(positiveSum([1, -4, 7, 12]));//20