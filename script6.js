// exp 1
// let world = 'js';
// world = world.toLocaleUpperCase();
// console.log(world);


// exp 2

// function filter(arr, str) {
//     return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
// }

// console.log(filter(['milkShake', 'chocoMilk', 'chokoShake'], 'mi'));



// exp 3
// let num = 32.58884;

// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.round(num));



// exp 4

// function number() {
//     const num = [52, 53, 49, 77, 21, 32];

//     console.log(Math.min(...num));
//     console.log(Math.max(...num));
// }
// number();



// exp 5
// function numbers() {
//     const num = Math.random() * 10;

//     console.log(Math.floor(num));
// }
// numbers();



// exp 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа.Длина массива должна быть в два раза меньше переданного числа.
// function number(n) {
//     const arr = [];
//     for (let i = 0; i < n / 2; i++) {
//         arr.push(Math.floor(Math.random() * n));
//     }
//     return arr;
// }

// console.log(number(10));



// exp 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomNumber(1, 10));


// exp 8
// let currentDate = new Date();
// console.log(currentDate);


// exp 9

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);


// exp 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// function dayNow() {

//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
//         "Пятница", "Суббота"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//         "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//     let myDate = new Date();
//     let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];

//     console.log(fullDate);

//     console.log(myDate.toLocaleTimeString('ru-RU'));
// }
// dayNow()

// Дата: [число][месяц на русском][год] — это[день недели на русском].
// Время: [часы]: [минуты]: [секунды]


