// function factorial(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// const myRecursive = factorial(5);
// console.log(myRecursive);

function factorialRecursive(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

var myRecursive = factorialRecursive(6);
console.log(myRecursive)


function factorial(n) {
    if (n == 1) {
        return 1
    }
    return n * factorial(n - 1)
}

var myRecur = factorial(8);
console.log(myRecur);