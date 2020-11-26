//A função de gravação isPalíndromo que verifica se uma determinada string
// (não diferencia maiúsculas de minúsculas) é um palíndromo.

//No Racket, a função é chamada de palíndromo?

// (palindrome? "nope") ; returns #f
// (palindrome? "Yay")  ; returns #t


const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}