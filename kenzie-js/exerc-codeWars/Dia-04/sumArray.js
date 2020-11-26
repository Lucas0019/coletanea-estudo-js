// Escreva um método sum (sum_array em python, sumarray em julia, SumArray em C #)
// que pega uma matriz de números e retorna a soma dos números. 
// Eles podem ser inteiros ou decimais para Ruby e qualquer instância de Num para Haskell.
// //  Os números também podem ser negativos. Se a matriz não contiver nenhum número, você deve retornar 0.

// numbers = [1, 5.2, 4, 0, -1]
// puts sum(numbers)
// 9.2

// Suposições 

// Você pode presumir que recebeu apenas números. 
// Você não pode assumir o tamanho da matriz. 
// Você pode assumir que obteve uma matriz e, se a matriz estiver vazia, retorne 0.

// Sum Numbers

function sum(numbers) {
    console.log(numbers.reduce((a, b) => a + b, 0));
}


sum([1, 2, 3, 4, 5, 6])//21
sum([1, 5.2, 4, 0, -1])//9.2
sum([])//0

