// Crie uma função que responda à pergunta "Você está tocando banjo?".
// Se seu nome começa com a letra "R" ou "r" minúsculo, você está jogando banjo! 
// A função recebe um nome como seu único argumento e 
// retorna uma das seguintes strings:

// name + " plays banjo" 
// name + " does not play banjo"

//Os nomes dados são sempre strings válidas.

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
