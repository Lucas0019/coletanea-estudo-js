// Nesta tarefa simples, você recebe um número e deve torná-lo negativoNesta tarefa simples,
// você recebe um número e deve torná-lo negativo

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// Notas: 

// O número já pode ser negativo, caso em que nenhuma alteração é necessária. 
// Zero (0) não é verificado para nenhum sinal específico. Zeros negativos não fazem sentido matemático




function makeNegative(num) {
    if (num > 0) {
        console.log(-num);
    }
    else {
        console.log(num);
    }
}


makeNegative(1) //-1
makeNegative(0)//0
makeNegative(-1)//-1

