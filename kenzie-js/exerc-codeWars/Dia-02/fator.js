// Fator

// Esta função deve testar se o fator é um fator de base.
// Retorna verdadeiro se for um fator ou falso se não for. 
// Sobre  Fatores, são números que você pode multiplicar
// para obter outro número. 

// 2 e 3 são fatores de 6 porque: 2 * 3 = 6 

// Você pode encontrar um fator dividindo os números. 
// Se o resto for 0, o número é um fator. 
// Você pode usar o operador mod (%) na maioria dos idiomas para verificar o resto 
// Por exemplo,  2 não é um fator de 7 porque: 7% 2 = 1 
// Nota: base é um número não negativo, fator é um número positivo.

checkForFactor = (base, factor) => {
    // code here
    if (base % factor === 0) {
        return true
    } else {
        return false;
    }
}

console.log(checkForFactor(3, 6));//true
console.log(checkForFactor(2, 6));//true
console.log(checkForFactor(2, 9));//false