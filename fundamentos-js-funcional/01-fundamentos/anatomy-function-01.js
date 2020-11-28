//function declaration
function umaFrase() {
    console.log('Eae Dev');
}

umaFrase()

//function declaration c/ parâmetro
//essas funções não retornar valores
function somaDois(number) {
    console.log(number + 2);
}

somaDois(4)//6


function eaeDev(name) {
    console.log('Eae ' + name);
}


eaeDev('Lucas')


function templateString(nomeFruta) {
    console.log(`Você gosta de ${nomeFruta}`);
}

templateString('Pera')

//retornando valores em funções
function returnHi() {
    return 'Hi';
}

let imprimi = returnHi()

console.log(imprimi);
console.log(returnHi());


//Passando uma função que retornar algo e tem param
function returnHiTo(name) {
    return `Hi ${name}`;
}

console.log(returnHiTo('Lucas'));