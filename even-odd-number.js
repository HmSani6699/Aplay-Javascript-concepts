// // const isEven = 155;
// // const num = isEven % 2;
// // const result = isEven % 2 == 0;
// console.log(result);

function is_even(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const number = 55;
const full = is_even(number);
console.log(full);

const numbers = 56;
const ful = is_even(numbers);
console.log(ful);

function isOdd(numb) {
    if (numb % 2 != 0) {
        return true
    }
    return false;
}
const numb = 298;
const res = isOdd(numb);
console.log('Ami Noton Kiso Korbo', res);

//////

//is even number
var is_even = 26;
var num = is_even % 2;
console.log(num);

function isEvennumber(num) {
    if (num % 2 == 0) {
        return true
    }
    return false;
}

var num = 33;
var isEven = isEvennumber(num);
console.log('Insa Allha', isEven);


///is odd number

function isodd(num) {
    if (num % 2 != 0) {
        return true;
    }
    return false;
}

var num = 30;
var oddNum = isodd(num)
console.log('Ami Ekhon Odd Number Dhekbo', oddNum);


//is Even Number

function isEvennumber(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

var number1 = 24;
var myEvenNumber = isEvennumber(number1);
console.log('IS Even Number Now :', myEvenNumber);


//odd number

function isOddNumber(num) {
    if (num % 2 != 0) {
        return true
    }
    return false
}

var num = 27;
var myOddNumber = isOddNumber(num);
console.log(myOddNumber);