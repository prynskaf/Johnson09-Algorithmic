
//ARRAY

//Write an algorithm which prints everything in an array
// function maximum(){
// const arr =  [
//     10,
//     20,
//     30,
//     40,
//     50,
//     60,
//     70

// ]
// console.log("numbers of array:",  arr  , "Length of arrays: " , arr.length );
// }
// maximum();  // returns 70  //numbers of items in the arrays

// Write an algorithm which receives an array of integers and prints its maximum.



// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Radius : ", (num1) => {
//   var num2 = num1 * num1;
//   var surface = Math.PI * num2;
//   console.log(surface);
//   rl.close();
// });


// Write an algorithm which receives an array of integers and prints its maximum.
// const arr = [];
// const input = prompt("Enter a comma-separated list of integers:");
// arr.push(...input.split(","));

// const max = Math.max(...arr);
// console.log( "array list: " , arr ,   "Max:", max); // ['10  ', ' 30  ', ' 40 ', ' 50']0: "10  "1: " 30  "2: " 40 "3: " 50"length: 4[[Prototype]]: Array(0) Max: 50


//Write an algorithm which receives an array of integers and prints its minimum.

// declare an epmty array
//const Arr = [];

// declare the prompt input for users to enter intergers
//const data = prompt("enter intergers seperated with comma: "); 

 // push the data of intergers into the the empty array with splitting it with comma into the empty array
//Arr.push(...data.split(","));

// declare the min numbers using Math.min 
//const min = Math.min( ...Arr); 

//console.log("arraylist:" , Arr , "Min:" , min); 
//arraylist: (4) ['10  ', ' 30  ', ' 30  ', ' 50'] Min: 10


//Write an algorithm which receives an array of integers and prints the position of its minimum.

// const arr = [];
// let prompt = require('prompt-sync')();
// const input = prompt("Enter a comma-separated list of integers:");
// arr.push(...input.split(","));

// let min = arr[0];
// let minIndex = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//     minIndex = i;
//   }
// }

// console.log("Array list:", arr);
// console.log("The min number:", min);
// console.log("Index of min number:", minIndex);


// Write a algorithm which receives an array of integers and check if its ordered ascendantly.
// Print true if the array is ordered, false if it’s not.
const arr = [1, 2, 3, 4, 5]; // example array
let isOrdered = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i+1]) {
    isOrdered = false;
    break;
  }
}

console.log("Is the array ordered in ascending order?", isOrdered);




