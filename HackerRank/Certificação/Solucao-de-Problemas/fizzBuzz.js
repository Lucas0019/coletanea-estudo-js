//1 - FizzBuzz

// Dado um número n , para cada inteiro i  no intervalo de 1  a n  inclusive, 
// imprima um valor por linha da seguinte maneira:


// Se i for um múltiplo de 3 e 5 , imprima FizzBuzz .
// Se i for um múltiplo de 3 (mas não 5 ), imprima Fizz . 
// Se i for um múltiplo de 5 (mas não 3 ), imprima o Buzz . 
// Se i não for um múltiplo de 3  ou 5 , imprima o valor de i



function fizzBuzz(n) {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(" FizzBuzz");
        } else if (i % 5 == 0) {
            console.log(" Buzz");
        } else if (i % 3 == 0) {
            console.log(" Fizz");
        } else {
            console.log(i)
        }

    }

}


fizzBuzz(3)



//Maneira da HackerRank

function fizzBuzz(n) {
    for (i = 1; i <= 100; i++) {
        console.log((i % 3 == 0 && i % 5 == 0) ? "FizzBuzz" : (i % 3 == 0) ? "Fizz" : (i % 5 == 0) ? "Buzz" : i);
    }
}