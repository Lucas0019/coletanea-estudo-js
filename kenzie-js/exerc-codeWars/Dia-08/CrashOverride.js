// Todo hacker precisa de um apelido!

// O Phantom Phreak, Acid Burn, Zero Cool e Crash Override são alguns exemplos notáveis ​​do filme Hackers. 
// Sua tarefa é criar uma função que, dado um nome e sobrenome adequados, retornará o alias correto. 
// Dois objetos que retornam um nome de uma palavra em resposta à primeira letra do primeiro nome e 
// um para a primeira letra do sobrenome já foram fornecidos. 
//  o primeiro caractere de qualquer um dos nomes dados à função não for uma letra de A - Z, 
//  você deve retornar "Seu nome deve começar com uma letra de A - Z.

//  " Às vezes, as pessoas podem esquecer de colocar a primeira letra de seu nome em maiúscula, 
//  de modo que sua função deve acomodar esses erros gramaticais.

// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'


const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);

const aliasGen = (fName, lName) => {
    return (isValidName(fName) && isValidName(lName))
        ? `${firstName[initialCap(fName)]} ${surname[initialCap(lName)]}`
        : 'Your name must start with a letter from A - Z.';
}