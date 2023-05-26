/*
conditions
*/

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
console.log(priceToPay()) // returns 8 


// Write an algorithm which given 3 numbers finds the maximum.
const grades = [10 , 12 , 30];
console.log(Math.max(...grades)); // 30  // /... Spread operator;



//Write an algorithm which throws 3 dices and finds out the number of 
//identical value, three, two or none.

function rollThreeDice() {
    // Roll three dice and store the values in an array
    const diceValues = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];
  
    // Iterate through the dice values to check for identical numbers
    let result;
    if (diceValues[0] === diceValues[1] && diceValues[1] === diceValues[2]) {
      result = "Three identical values."
    } else if (diceValues[0] === diceValues[1] || diceValues[1] === diceValues[2] 
    || diceValues[0] === diceValues[2]) {
      result = "Two identical values."
    } else {
      result = "No identical values."
    }
  
    return result;
  }
  
  console.log(rollThreeDice()); // outputs "Two identical values."
  
  //Write an algorithm which given the number of a day returns its name.

//   const dayNumber = new Date();
//   const dayNames = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ]
//  console.log("Day: "  + dayNumber.getDay() , "and Today is:", dayNames[1] ); 
 // returns  Day: 2 and Today is: Tuesday


 //A print shop charges 0.12€ the ten first copy, 0.11 € 
//  the next 20 and 0.10 € from there. Write an algorithm which given a 
//  number of copies and calculates the price
// function calcShopPrice() {
//     const amount = 19;  // 19
//     let price = 0;
//     if (amount < 10) {
//       price = amount * 0.12;
//       console.log(price);
//     } else if (amount >= 10 && amount <= 20) {
//       price = amount * 0.11;
//       console.log(price);
//     } else {
//       price = amount * 0.1;
//       console.log(price);
//     }
//   }
//   calcShopPrice(); // returns 2.09
