// Você vai fazer isso?

// Você estava acampando com seus amigos longe de casa, mas quando chega a hora de voltar, 
// você percebe que o combustível está acabando e a bomba mais próxima fica a 80 quilômetros de distância! 
// Você sabe que, em média, seu carro roda cerca de 40 quilômetros por litro. Restam 2 galões. 
// Considerando esses fatores, escreva uma função que diga se é possível chegar à bomba ou não. 
// A função deve retornar verdadeiro (1 no Prolog) se for possível e falso (0 no Prolog) se não for. 
// Os valores de entrada são sempre positivos.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return mpg * fuelLeft >= distanceToPump
};

