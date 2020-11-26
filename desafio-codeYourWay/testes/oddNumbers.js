// Dados dois inteiros, l e r, 

// imprima todos os números ímpares entre l e r (l e r inclusive). 
// Complete a função oddNumbers no editor abaixo. 
// Possui 2 parâmetros: Um número inteiro, l, denotando a parte esquerda do intervalo.
//  Um número inteiro, r, denotando a parte direita do intervalo. 
//  A função deve retornar uma matriz de inteiros denotando os números ímpares entre le r.


oddNumbers = (l, r) => {
    for (let l = 0; l <= r; l++) {

        if (l % 2 === 1)
            console.log(l)
        continue
    }
}

oddNumbers(1, 100)
// oddNumbers(7, 15)



// var numero = 10;
// var resto = numero % 2;

// if (resto == 0) {
//     alert("par");
// } else {
//     alert("impar");
// }