// Encontre números que são divisíveis por determinado número

// Complete a função que recebe dois argumentos e retorna todos os números divisíveis pelo divisor fornecido.
//  O primeiro argumento é uma matriz de números e o segundo é o divisor.


divisibleBy = (numbers, divisor) => {

    console.log(numbers, divisor)

    let array = []

    numbers.forEach((element) => {
        //O método forEach() executa uma dada função em cada elemento de um array.

        if (element % divisor === 0)
            return array.push(element);
        //O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

    })

    console.log(array)

    return array;

}


//Testes

divisibleBy([1, 2, 3, 4, 5, 6], 2)//[2, 4, 6]
divisibleBy([1, 2, 3, 4, 5, 6], 3)//[3, 6]
