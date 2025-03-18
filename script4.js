//exp 1
//
// function min ( a , b) {
//     if ( a < b) {
//         return a;
//     } else  {
//         return b;
//     }
// }
//  console.log(min(4 , 8))
//  console.log(min(6 , 6))

//exp 2 
//
// function isEven ( n ) {
//     if (n % 2 === 0 ) {
//         return 'число верно';
//     } else {
//         return 'число не верно';
//     }
// }
// console.log(isEven(5));
// console.log(isEven(4));

//exp 3
// 
// function square( number ) {
//     console.log ( number ** 2);
// } 

// const up = (n) => n ** 2;

// square(7);
// console.log(up(5));

// exp 4
// 
// function getAge() { 
//     let age = prompt('Сколько тебе лет?');

//     if (age < 0) {
//         alert ('Вы ввели неправильное значение');
//     } else if (age > 0  &&  age < 12) {
//        alert ('Привет, друг!');
//     } else if (age >= 13) {
//         alert ('Добро пожаловать!');
//     } else {
//         alert ('i dont know');
//     }
// }

// getAge();

// exp 5
// 
// function calc( a , b ) {
//     console.log(Number.isNaN(Number(a)));
//     console.log(Number.isNaN(Number(b)));
//     if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
//         return 'Одно или оба значения не являются числом';
//     } else { 
//         return a * b; 
//     }
// }
// console.log(calc(3 , 4));

// exp 6
//
// function getNumber() {
//     let number = prompt ( 'Введи число' );
//     if (isNaN(number)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${number} в кубе равняется ${number ** 3}`;
//     }
// }

// console.log(getNumber());

//exp 7
//
// function  getArea () {
//     return Math.PI * this.radius **2;
// }

// function  getPerimetr() {
//     return 2* Math.PI * this.radius;
// }

// const circle1 = {
//     radius : 10,
//    methodgetArea : getArea,
//    methodgetPerimetr : getPerimetr,
// }

// const circle2 = {
//     radius : 20,
//     methodgetArea : getArea,
//     methodgetPerimetr : getPerimetr,
//     }
 
// console.log(circle1.methodgetArea())
// console.log(circle2.methodgetArea())