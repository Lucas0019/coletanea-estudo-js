//ELSE IF

var semafaro = 'Verde'

if (semafaro === 'Verde') {
    console.log('Pode prosseguir');
} else if (semafaro === 'Amarelo') {
    console.log('Atenção o sinal irá fechar');
} else {
    console.log('Pare espere o sinal abrir');

}

// Condicional ELSE IF - Petshop
// Precisamos criar um código que ajude um petshop a dizer se o pet está com o peso ideal. 
// E para isso eles deixaram para você as informações que ele usam para fazer essa classificação:

//  - Abaixo de 4kg = Abaixo do Peso
//  - Maior que 10kg = Acima do Peso
//  - Se tiver entre esses dois valores =  Peso normal.

// Utilizando o ELSE IF e crie o código para suprir essa necessidade e imprimindo as mensagens de acordo com a lista acima!

var petPeso = 7

if (petPeso < 4) {
    console.log('Abaixo do Peso');
} else if (petPeso > 10) {
    console.log('Acima do Peso');
} else {
    console.log('Peso Normal');

}


// Condicional ELSE IF - Lados Iguais
// Precisamos de ajuda para escrever um código que de acordo com a quantidade de lados iguais de um triângulo, 
// exiba com console.log se ele é Equilátero, Isósceles ou Escaleno, sem a necessidade de repetir no código a palavra “triângulo”. 

// − Triângulo Equilátero: possui os 3 lados iguais.	
// − Triângulo Isósceles: possui 2 lados iguais.	
// − Triângulo Escaleno: possui 3 lados diferentes

// Nesse exercício a variável ladosIguais já estará definida.

var ladosIguais = 0

if (ladosIguais === 3) {
    console.log('Equilátero');
} else if (ladosIguais === 2) {
    console.log('Isósceles');
} else {
    console.log('Escaleno');

}