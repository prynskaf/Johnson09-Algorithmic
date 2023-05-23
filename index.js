/*
Variables
*/

// Write an algorithm which calculates:

// the sum of two chosen number
const score1 = 10;
const score2 = 30

const totalScore = score1 + score2;
console.log(totalScore); // this returns 40


// the division of two chosen number
const importPrice =100;
const oilPrice = 1200;

const taxPrice= importPrice / oilPrice
console.log(taxPrice); // returns 0.083333


// the modulo of two inputed numbers
const game_cost = 40;
const balance = 122;

console.log( balance % game_cost); // this returns 2


// Write an algorithm which concatenates two phrases together.
const position = "web developer";
const skills =  "Java Script"

const  data = "my position is "  + position + " and  i love using" + skills ;
console.log(data)


//Write an algorithm which receives a price without VAT and returns 
//the price with VAT with a rate of 21%.
const vatRate = 0.21;  //21%
const priceWithoutVat = 300;  

const vatAmount = priceWithoutVat *  vatRate; //  300 * 0.21 = 63
const priceWithVat = priceWithoutVat + vatAmount; // 300 + 63

console.log(priceWithVat);   // returns  363


// Write an algorithm which receives the radius of a 
// circle and calculate its surface.
function calculateSurface(radius) {
    const areaSurface = Math.PI * radius * radius;
    return areaSurface;
}
calculateSurface(22);
console.log(calculateSurface(22)); // returns 1520.5308443374597

function surfacearea(){
 let radius = 22;
 const area = Math.PI  * radius * radius;
 console.log(area);
}
surfacearea()  // returns 1520.5308443374597


//Write an algorithm which receives the time of day 
// in three different numbers, the hour, the minutes and the seconds
 //and returns the number of seconds since midnight.
 function midNightSeconds(hour , minute , second){
    const hourInSeconds = hour *  3600;
    const munitesInSeconds = minute * 60;
    const totalSeconds = hourInSeconds + munitesInSeconds + second;

    console.log(totalSeconds);
 }

 midNightSeconds(3 , 30 , 45);


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

  const dayNumber = new Date();
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
 console.log("Day: "  + dayNumber.getDay() , "and Today is:", dayNames[1] ); 
 // returns  Day: 2 and Today is: Tuesday


 //A print shop charges 0.12€ the ten first copy, 0.11 € 
//  the next 20 and 0.10 € from there. Write an algorithm which given a 
//  number of copies and calculates the price
function calculatePrice(copies) {
    let price = 0;
  
    if (copies >= 10) {
      const firstTen = Math.min(copies, 10);
      price += firstTen * 0.12;
      copies -= firstTen;
    }
  
    if (copies > 0) {
      const nextTwenty = Math.min(copies, 20);
      price += nextTwenty * 0.11;
      copies -= nextTwenty;
    }
  
    if (copies > 0) {
      price += copies * 0.10;
    }
  
    return price.toFixed(2);
  }

  const numCopies = 35;
  const totalPrice = calculatePrice(numCopies);
  console.log(`The Number of copies is: ${numCopies} \nThe Total price: ${totalPrice}€`);

  