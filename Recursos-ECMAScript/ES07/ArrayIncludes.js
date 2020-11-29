//O método Array.includes verifica se há algum valor dentro de um array.
//Deste modo, se sim, retorna true; se não, retorna false.

const numbers = [1, 2, 3];

console.log(numbers.includes(2));
// Resultado: true

console.log(numbers.includes(4));
// Resultado: false


//Mais Exemplos


// Array de Strings
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('dog'));
// Resultado:  true

console.log(pets.includes('at'));
// Resultado:  false


// Diferente do includes da String que pegar o valor parcialmente.
console.log("Lucas".includes("as"))
// Resultado:  true





class dev {
    constructor(name) {
        this.name = name
    }
}

// dev
const Lucas = new dev("lucas");
const Duda = new dev('Eduarda');
const Gabs = new dev("Gabrielle");

// Instrutores
const Diego = new dev('diego');
const Mayk = new dev('maykao')

// Array de Objetos
const alumniGoStack = [Lucas, Duda, Gabs]
const instrutores = [Diego, Mayk]


console.log("Tem algum dev Lucas?: ", alumniGoStack.includes(Lucas))
// Resultado:  true

console.log("Tem algum dev Pedro?: ", alumniGoStack.includes(new dev("pedro")))
// Resultado: false

console.log("Diego está entre os alunos do GoStack?", alumniGoStack.includes(Diego))
// Resultado:  false