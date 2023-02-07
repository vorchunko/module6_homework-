// Задание 1

let input = prompt ('Введите значение');
let value = +input;
if (isNaN(value)) {
    alert ('Упс, кажется вы ошиблись');
} else if (typeof value === "number") {
    if (value % 2 === 0) {
        alert ('Это целое число');
    } else {
        alert ('Это дробное число')
    }
}

// Задание 2

let x
if (typeof x === "number") {
    console.log(x + " — число");
} else if (typeof x === "string") {
    console.log(x + " — строка");
} else if (typeof x === "boolean") {
    console.log(x + " — логическое значение");
} else {
    console.log("Тип x не определён");
}

// Задание 3

let welcome = "Hello"
let massive = [...welcome];
massive.reverse().join("");

// // Задание 4

let randomNum = Math.floor(Math.random() * 101);
console.log (randomNum);

// Задание 5

let user1 = ["vitaly", "efimenko", 32, "standup"]
console.log (user1.length);
console.log (user1 [0]);
console.log (user1 [1]);
console.log (user1 [2]);
console.log (user1 [3]);

// Задание 6 

let listName = ["noname", "noname", "noname", "noname", "noname", "noname", "Alex"];
let firstName = listName[0];
for (let i = 1; i < listName.length; i++) {
if (listName[i] !== firstName) {
console.log(false);
}else{
    console.log(true);
}
}

//Задание 7

let arrNumber = [4,3,67,234,4,1,0,2,6,9,0,0,123,445,2,7];
let evennumber = 0;
let oddnumber = 0;
let zeronumber = 0;
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

// Задание 8

let myShowList = new Map();
myShowList.set('Vitaly', 'Efimenko');
myShowList.set('Volodya', 'Sapinsky');
myShowList.set('Igor', 'Gavva');
// console.log (myShowList.keys());
// console.log (myShowList.values());
// console.log (myShowList.keys());
for (let elem of myShowList){
console.log(`'Представляю вам нашего нового участника:' ${elem}`);
// Извините, сделал в своем стиле, но могу сделать как в задании
}