//O relógio mostra 'h' horas, 'm' minutos e 's' segundos depois da meia-noite.
// Sua tarefa é fazer a função 'Passado' que retorna o tempo convertido em milissegundos

//past(0, 1, 1) == 61000

//Restrições de entrada:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


function past(h, m, s) {
    //#Happy Coding! ^_^
    return ((h * 3600) + (m * 60) + s) * 1000;

}

console.log(past(0, 1, 1));// 61000