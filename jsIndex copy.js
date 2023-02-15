// Модуль 6

// Задание 1

let arrNumber = [4,3,67,234,4,1,0,2,6,9,0,0,123,445,2,7];

let evennumber = 0;
let oddnumber = 0;
let zeronumber = 0;
function getCount() {
for (let i = 0; i < arrNumber.length; i++) {
if (arrNumber[i] === 0) {
zeronumber++;
} else if (arrNumber[i] % 2 === 0) {
evennumber++;
} else {
oddnumber++;
}
}
console.log(`Всего четных чисел: ${evennumber}, нечетных чисел: ${oddnumber}, нулей: ${zeronumber}`);
}

getCount();

//Задание 2

let num = prompt ('Введите число от 1 до 1000');
function numCount() {

    if (num == 0 || num > 1000) {
    return alert('Введите число от 1 до 1000');
    }for (let i = 2; i < num; i++) {
        if (num % i === 0) 
        return alert (`${num} составное число`);
    } return alert (`${num} простое число`);

} numCount ();

//Задание 3

function func1 (number1) {
    return function func2 (number2) {
        return number1 + number2;
    }
}
const adder = func1(123);
console.log(adder(321));

//Задание 4

function number(a, b) {
var intervalId = setInterval(function () {
    console.log(a);
    if (a == b) {
        clearInterval(intervalId);
    }else{
        a++;
    }    
    }, 1000);
}
number(5, 15);

//Задание 5

const exponentiation = ( a, b ) => {
const result = a ** b 
console.log (result);
};
exponentiation(5, 3);