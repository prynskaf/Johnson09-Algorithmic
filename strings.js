
// strings 
// Write a function which receives two strings and returns 
// them as one string.

// let prompt = require('prompt-sync')();
//function declared  passed with an urgeument str1  and str2
// function concatenateStrings(str1, str2) {
    // which has to return this both string 
//     return str1 + str2;
//   }

  // str1 and str2 input 
//   const str1 = prompt("Enter str1: ");
//   const str2 = prompt("Enter str2: ");

  // concatentestring 1 and 2 tofay
//   const results = concatenateStrings(str1 , str2);

  // end resutls 
//   console.log(results);
 

// Write a function which receives a character in uppercase and prints it in lowercase.
// let prompt = require('prompt-sync')();
// function uppercase() {
//     let input = prompt("Enter a word in upppercase to  convert it to lowercase:");
//     let result= input.toLocaleLowerCase();
//     console.log(result);
// }
// uppercase();


// Write a function which receives a character in lowerase and prints it in uppercase.
// let prompt = require('prompt-sync')();
// function lowercase() {
//     let input = prompt("Enter a word in lowercase to convert it to uppercase:");
//     let result= input.toLocaleUpperCase();
//     console.log(result);
// }

// lowercase();

// let prompt = require('prompt-sync')();
// function lowercase() {
//     let input = prompt("Enter a word in lowercase to convert it to uppercase:");
//     let result= input.toLocaleUpperCase();
//     console.log(result);
// }
// lowercase();


// Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"
// let prompt = require('prompt-sync')();
// function formatName(name) {
//     const [lastname, firstname] = name.split(", ");
//     return `${firstname} ${lastname}`;
//   }
  
//   const name = prompt("Enter a name in the format 'Doe, John': ");
//   const formattedName = formatName(name);
//   console.log("Formatted name:", formattedName);
  

  // Write a function which receives a sentence full of whitespace
  // and returns it without them.

  let prompt = require('prompt-sync')();
  function whitespaceSentence() {
    let message = prompt("Enter a sentence with whitespace: ");
    let result = message.replace(/\s/g, "");
    console.log("New sentence without whitespace:", result);
  }
  whitespaceSentence();
  