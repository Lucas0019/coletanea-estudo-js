// Arrow Function
// meuNome = (name) => {}

expoNumero = (number) => {
    return number ** 2
}

console.log(expoNumero(4));



multiNumero = num => {
    return num * 2
}

console.log(multiNumero(2));

//Function expression
const incremento = function (n) {
    return n + 1;
}

//Function anonima - Arrow V2
//Ela tem um return implícito

const incrementoTo = (n) => {
    return n + 1;
}

const incrementoTree = n => {
    return n + 1;
}

const incrementoFor = n => n + 1


console.log(incremento(2));// 2 + 1 = 3
console.log(incrementoTo(3));// 3 + 1 = 4
console.log(incrementoTree(4));// 4 + 1 = 5
console.log(incrementoFor(5));// 5 + 1 = 6


const sumDoisParam = (a, b) => a + b
console.log(sumDoisParam(4, 25));//29
