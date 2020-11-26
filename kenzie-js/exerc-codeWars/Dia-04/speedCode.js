//SpeedCode #2 - Array Madness


// Objetivo 

// Dados dois arrays inteiros a, b, ambos de comprimento >= 1,
// crie um programa que retorna verdadeiro se a soma dos quadrados de cada elemento 
// em a for estritamente maior que a soma dos cubos de cada elemento em b.

//arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3


function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    return a.map((el) => Math.pow(el, 2)).reduce((a, b) => a + b, 0) > b.map((el) => Math.pow(el, 3)).reduce((a, b) => a + b, 0);

}

//Teste
console.log(arrayMadness([4, 5, 6], [1, 2, 3]));