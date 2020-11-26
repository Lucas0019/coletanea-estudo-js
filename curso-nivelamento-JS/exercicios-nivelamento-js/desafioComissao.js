//DESAFIO - Comissão

/** 
 * Crie um sistema para calcular a comissão dos vendedores de uma loja.
 * Crie uma função que tenha dois argumentos: preço e porcentagem de comissão. 
 * */



//Função criada ára resolução do desafio
function comissao(preco, porcentagem) {

    var comissao = preco * (porcentagem / 100)
    return comissao

}

//Teste da Função
console.log(comissao(30, 1.2)); //0.36%