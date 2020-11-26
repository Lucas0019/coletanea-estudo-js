// Pegue uma matriz e remova cada segundo elemento da matriz.
// Sempre mantenha o primeiro elemento e comece a remover com o próximo elemento. 

// Exemplo:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

//Nenhum dos arrays ficará vazio, então você não precisa se preocupar com isso!



removeEveryOther = (arr) => {
    //your code here
    return arr.filter(function (elem, index) {
        return index % 2 === 0;
    });
}

