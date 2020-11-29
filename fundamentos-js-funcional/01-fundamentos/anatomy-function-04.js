//Anonymous function
//Como chama essa função


// IIFE - Immediately invoked function expression
(function (a, b) {
    console.log(`Result: ${a + b}`);
})(1, 2); //3


(function (a, b) {
    console.log(`Result: ${a - b}`);
})(4, 2); //2

//funçõs arrow
(() => {
    console.log('Arrow #1');
})();

(() => console.log('Arrow #2'))();
