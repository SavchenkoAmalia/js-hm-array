//! 1

// let arr = [1, 4, 8];
// arr[1] = 10;
// console.log(arr);

//! 2

// let arr = ['Amalia', 'Nazariy', 'Pavlo' ];
// arr[3] = 'Sasha';
// console.log(arr);

//! 3

// let arr = [1, 4, 8, 26, 7, 32];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     console.log(sum);
// }

//! 4

// let arr = [1, 4, 8, 7, 9];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//! 5

// let arr = ['Hello', 'Hi', 'Bye', 'Good Bye', 'Good morning' ];

// for(let i = 0; i < arr.length; i++){
//     if( arr[i].length > 5){
//         console.log(arr[i]);
//     }
// }

//! 6

// let arr = [1, 4, 8, 10, 35, 6, 45, 76, 32, 5] ;

// let max = 0;

// for(let i = 1; i < arr.length; i++){
//     if (arr[i] > max) {
//         max = arr[i];
//       }
// }
// console.log("Максимальне значення масиву: ", max);

//! 7

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 1; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log("Це парне число: ", arr[i]);
    }
}