// Sua tarefa é encontrar o primeiro elemento de um array que não seja consecutivo.
// Por não consecutivo, não queremos dizer exatamente 1 maior do que o elemento anterior da matriz.
// Por exemplo. Se tivermos um array [1,2,3,4,6,7,8], então 1, 2, 3 e 4 são todos consecutivos,
// mas 6 não, então esse é o primeiro número não consecutivo. Se toda a matriz for consecutiva,
// retorne null2. A matriz sempre terá pelo menos 2 elementos1 e todos os elementos serão números. 
// Os números também serão únicos e em ordem crescente. 
// Os números podem ser positivos ou negativos e o primeiro não consecutivo também pode ser!

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1]
        }
    }
    return null
}