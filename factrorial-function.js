/*var factorial = 1;
for (var i = 1; i <= 7; i++) {
    factorial = factorial * i;
}
console.log('Is Factorial ', factorial);
*/

// function isFactorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// let result = isFactorial(7);
// console.log('Ami Parbo InsaAllah', result);


function isFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

let number = 7;
let result = isFactorial(number);
console.log(result);



//while loop
function isFactorial(num) {
    var factorial = 1
    var i = 1;
    while (i <= num) {
        factorial = factorial * i;
        i++
    }
    return factorial;
}

var factorial22 = isFactorial(7);
console.log(factorial22)

//for loop

function isForLoop(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial
}

var myFor = isForLoop(7);
console.log(myFor);