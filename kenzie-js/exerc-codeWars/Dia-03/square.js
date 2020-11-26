// Complete a função de soma quadrada
// de modo que cada número passado para ela quadrada e depois some os resultados. 
// Por exemplo, para [1, 2, 2], deve retornar 9 porque 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

function squareSum(numbers) {
    return numbers.reduce(function (sum, x) {
        return (x * x) + sum;
    }, 0)
}