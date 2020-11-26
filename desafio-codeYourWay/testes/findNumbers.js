/* 1 - Find Numbers
   2- Odd Numbers
   3 - Which of the following sorting algorithms has the best asymptotic runtime complexity?

*/

const arr = [1, 2, 3, 4];
// const k = 4;


//Solução Hacker Rank
function findNumber(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            return 'YES';
        } else {
            arr[i] != k
        }
    }
    return 'NO'
}

