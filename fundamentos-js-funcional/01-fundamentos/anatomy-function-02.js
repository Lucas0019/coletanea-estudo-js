//Anonymous function
(function (a, b) {
    return a + b
})


//Function expression
//Para invocar um function anonymous, a mesma deve estar armazenada a uma váriavel
const sum = function (x, d) {
    return x + d
}

console.log(sum(1, 3));//4

const vaiSomar = sum
console.log(vaiSomar(4, 3));//7