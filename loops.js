/**
 * ! loops 
 */

// Write an algorithms which receives an integers n and prints:
 
// the numbers from 1 to n
function test() {
    let n = 30;
    for( let i = 0; i <=  n; i++)
    console.log(i)
}
test();


// the numbers from 1 to n in descending orderdata
function decressNumber(){
    let n = 5;
    for(let i = 0; i < n; n--)
    console.log(n);
}
decressNumber() // 5 4 3 2 1

// the numbers from -n to n
function negativeToPositve()
{
    for(let n = -5; n < 6; n++){
        console.log(n);
    }
}
negativeToPositve();

//the odd numbers from 1 to n
function oddNumbers(){
    for(let i = 0; i <= 10; i++ ){   
        if (i % 2 === 0){
            console.log(i);
        }
    }
}
oddNumbers();  // oddd numbers 0 2 4 6 8 10 




// Write an algorithm which throws a dice a given number of time 
//and count the number of 
//time a certain number is received.
let number_of_throws = prompt("Please enter the number of Throws =  ");
let number_to_be_received = Math.floor(Math.random() * 6) + 1;
let count = 0;
for (i = 0; i <= number_of_throws; i++){
    let diceNumber = Math.floor(Math.random() * 6) + 1;

    if(diceNumber === number_to_be_received){
        count++;
    }
   console.log("the number = " + number_to_be_received + " was received = "+ count +" times out of " + number_of_throws + " throws");
}

//Write an algorithm which verify if a given positive integer is a perfect number, meaning 
//equal to the sum of his divisors (except himself)
let n = parseInt(readlineSync.question('Enter any number = '));

let sum = 0;

for(let i=1; i<n; i++){
    if(n%i === 0){
        sum = sum + i;
    }
}

if(sum === n) {
    console.log(n+ " is a perfect number");
}
else {
    console.log(n+ " is not a perfect number");
}
