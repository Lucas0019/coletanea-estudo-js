// Oh não, Timmy criou um loop infinito! Ajude Timmy
// a encontrar e corrigir o bug em seu loop for inacabado!



createArray = (number) => {
    let newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}