//DESAFIO - Séries

/** 
 * Programe uma função series que recebe dois parâmetros, um prefixo com o nome da série e um array com a lista de todos os episódios da série. 
 * A função deve retornar um novo array com a lista de episódios iniciando com o nome da série. 
 * A função deve retornar como resultado o seguinte array:

resultado = [
  "Harry Potter e a Pedra Filosofal",
  "Harry Potter e a Câmara Secreta",
  "Harry Potter e o Prisioneiro de Azkaban",
  "Harry Potter e o Cálice de Fogo",
  "Harry Potter e a Ordem da Fênix",
  "Harry Potter e o Enigma do Príncipe",
  "Harry Potter e as Relíquias da Morte"
];*/


//Array informado aqui no meu código para teste
var prefixo = 'Harry Potter'

var array = [
    'e a Pedra Filosofal',
    'e a Câmara Secreta',
    'e o Prisioneiro de Azkaban'
]


//Função criada ára resolução do desafio
function series(prefixo, array) {
    var prefixArray = []

    for (var i = 0; i < array.length; i++) {
        prefixArray[i] = prefixo + " " + array[i]
    }

    return prefixArray;

}


// Testando a Função
console.log(series(prefixo, array));