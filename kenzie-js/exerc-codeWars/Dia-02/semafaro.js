//Semáforo

// Você está escrevendo um código para controlar os semáforos da sua cidade.
// Você precisa de uma função para lidar com cada mudança de verde para amarelo, 
// para vermelho e depois para verde novamente. 
// Complete a função que recebe uma string como um argumento que representa o estado atual da luz 
// retorna uma string que representa o estado para o qual a luz deve mudar. 

// Por exemplo, update_light ('green') deve retornar 'yellow'.

updateLight = (current) => {
    //your code here!
    if (current === 'green') {
        return 'yellow'
    } else if (current === 'yellow') {
        return 'red'
    } else {
        return 'green'
    }
}

console.log(updateLight('green'))//yellow
console.log(updateLight('yellow'))//red
console.log(updateLight('red'))//green
