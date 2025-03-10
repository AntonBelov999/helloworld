//exp 1

// let numb = [ 1, 5, 4, 10 ,0 ,3 ];

// for (let i = 0; i < 10; i++) {
//    if(numb[i] === 0 ) break
//     console.log(numb[i]);
// }

//exp 2

// let numb = [ 1, 5, 4, 10 ,0 ,3 ];
// for (let i = 0; i < numb.length; i++) {
//     if(numb[i] === 4 ) {
//     console.log(i);
//     break;
// }
// }

// console.log(numb.indexOf(4))


//exp 3 

// let numb = [ 1, 3, 5, 10 ,20 ];
// let joinedNumb = numb.join(' ');
// console.log(joinedNumb);

// console.log(numb.join(separator)(4))


//exp 4

// const arr = [];

// for ( let i = 0; i < 3; i++) {
//     const arr2 = [];
//     for ( let i = 0; i < 3; i++) {
//         arr2.push(1);
//     }
//     arr.push(arr2);
// }

// console.log(arr);

//exp 5

// let arr = [1,1,1];
// arr.push(2,2,2);
// console.log(arr);

//exp 6

// let arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// console.log(arr);
// arr.pop('a');
// console.log(arr);

//exp 7

// let arr = [9, 8, 7, 6, 5];
// let question = +prompt('chose you number?');
// if (arr.includes(question)) {
//     alert('you my hero');
// } else {
//     alert('you suck');
// }

//exp 8

// let arr = 'abcdef';
// arr = arr.split('')
// console.log(arr); 
// arr.reverse();
// arr = arr.join('');
// console.log(arr) ;

//exp 9
// const arr = [[1, 2, 3],[4, 5, 6]];
// const newArr = [];

// for( let i = 0; i < arr.length; i++) {
//     newArr.push(...arr[i]);
// }
// console.log(newArr);

// console.log(arr.flat());




// exp 10

// const arr = [ 1, 2, 3, 4, 5, 6]
// for ( let i = 0; i < arr.length; i++) {
//     if (arr[i+1]);
//     console.log(arr[i] + arr[i +1]);
// }


// exp 11

// function square(arr) {
//     return arr.map(item => item **2);
// }
// console.log(square([1, 2, 3]));



// exp 12

// function world(spech){
//     return spech.map(item => item.length);
// }

// console.log(world(['why' , 'who' , 'what']));


// exp 13
// function number(arr){
//     return arr.filter(item => item <0);
// }

// console.log(number([1, 2, 3, 4, 5, -6, -7, -8]));



// exp 14

// function randomNumber() {
//     return Math.floor(Math.random() * 10);
// }

// const arr = [];

// for ( let i = 0; i < 10; i++) {
//     arr.push(randomNumber());
// }

// console.log(arr);

// const evenArr = [];

// for ( let i = 0; i < arr.length; i++ ) {
//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     }
// }
//  console.log(evenArr);





// exp 15

// function randomNumber() {
//     return Math.floor(Math.random() * 10);
// }

// const arr = [];

// for ( let i = 0; i < 2; i++) {
//     arr.push(randomNumber());
// }

// console.log(arr);

// const evenArr = arr.reduce( (a,b) => a + b) / arr.length;

// console.log(evenArr);


