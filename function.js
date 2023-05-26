// functions 

// Write an algorithm which given the number of a day returns its name.
// let prompt = require('prompt-sync')();

//function  declared
// function getDayName(dayNumber) {
    // giving weekdays names from sunday to friday
    //const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // so if day name is more or equal to 0 and dayname is small and equall to six ,
    // it has to retrive the day name
    // and outprint with the weekname 
    // if (dayNumber >= 0 && dayNumber <= 6) {
    //   const dayName = weekdays[dayNumber];
    //   return dayName;

      //if the results doesn meet its invalid
//     } else {
//       return "Invalid day number. Please enter a number between 0 and 6.";
//     }
//   }
  // prompt 
//   const input = prompt("Enter the day number (0-6):");

  // output the input
//   const dayNumber = parseInt(input);
  // output getDayName
//   const dayName = getDayName(dayNumber);
  //console 
//  console.log(`The day with number ${dayNumber} is ${dayName}.`);
  


  //the sum of two chosen number
//   let prompt = require('prompt-sync')();

//   function totalSum(a, b) {
//     const result = a + b;
//     return result;
//   }
  
//   const num1 = parseInt(prompt("Enter the first number:"));
//   const num2 = parseInt(prompt("Enter the second number:"));
//   const totalScore = totalSum(num1, num2);
//   console.log(`The sum of ${num1} and ${num2} is ${totalScore}.`);


  // In a cinema the full tariff is 10 €, the reduced 
// one is 8 €. Write an algorithm which given a boolean indicating 
// if the person can have 
// a reduced tariff prints the price to pay

function priceToPay(){
    const fullTariff = 10;
    const reducedTariff = 8;
    
    if (reducedTariff < fullTariff) {
        return reducedTariff;
    
    }
    else {
        return fullTariff;
    }
    
    }
    priceToPay(); 
    console.log( "the price to pay is: ", priceToPay()) // returns 8
  
