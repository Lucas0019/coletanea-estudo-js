// Simples, remova os espaços da string e retorne a string resultante.

// //mdn
// var str = '   foo  ';
// console.log(str.trim()); // retorna 'foo'

noSpace = (x) => {
    return x.replace(/\s/g, '');

}