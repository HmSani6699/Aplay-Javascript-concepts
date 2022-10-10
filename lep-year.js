function isLepYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const isMyLepYear = 2240;
const resuld = isLepYear(isMyLepYear);
// console.log(resuld);


function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));


function lepYear(num) {
    if (num % 4 == 0) {
        return true;
    }
    return false;
}
var num = 2231;
var myLepYear = lepYear(num);
console.log(myLepYear);
