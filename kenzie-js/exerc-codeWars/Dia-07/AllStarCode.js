// Crie uma função chamada que aceita 2 argumentos de string e retorna um inteiro da contagem de ocorrências do
// segundo argumento encontrado no primeiro. Se nenhuma ocorrência for encontrada, uma contagem de 0 deve ser retornada.

// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z')      // => 0

function strCount(str, letter) {
    //code here
    return str.split(letter).length - 1
}