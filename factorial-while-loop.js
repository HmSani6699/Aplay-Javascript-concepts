// function getWhileLoop(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// let myFactorial = getWhileLoop(6);
// console.log(myFactorial);

// function getWhileLoop2(number) {
//     let factorial = 1;
//     let i = number;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial
// }

// let myFactorial = getWhileLoop2(6);
// console.log('Ami Ekhon Wile Loop DIa', myFactorial);


//for lop revers


function myFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
let result = myFactorial(7);
console.log('Insa Allah', result)