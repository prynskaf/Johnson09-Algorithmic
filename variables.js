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
