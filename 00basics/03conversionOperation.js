let score = 33
console.log(typeof score);   // type of the score variable 
console.log(typeof (score)); // type of the score variable using method

let scoreNow = "33"      // input as a string
console.log(typeof scoreNow);   // o/p = string
let valueInNumber = Number(scoreNow)  // try to convert string into number
console.log(typeof valueInNumber);  // o/p = number
console.log(valueInNumber); // o/p = 33

let scoreNow2 = "33abc"  // input as a string
console.log(typeof scoreNow2); // o/p = string
let valueInNumber2 = Number(scoreNow2)  // try to convert string into number
console.log(typeof valueInNumber2);  // o/p = number
console.log(valueInNumber2);   // o/p = NaN (not a number)

let scoreNow3 = null  // i/p = null
console.log(typeof scoreNow3);  // o/p = object
let valueInNumber3 = Number(scoreNow3)  // try to convert null into number
console.log(typeof valueInNumber3);  // o/p = number
console.log(valueInNumber3);  // o/p = 0

let scoreNow4 = undefined   // i/p = undefined
console.log(typeof scoreNow4);   // o/p = undefined
let valueInNumber4 = Number(scoreNow4)  // try to convert undefined into number
console.log(typeof valueInNumber4);  // o/p = number
console.log(valueInNumber4);   // o/p = NaN (not a number)

let scoreNow5 = true
console.log(typeof scoreNow5);   // o/p = boolean
let valueInNumber5 = Number(scoreNow5) // try to convert boolean value into number
console.log(typeof valueInNumber5); // o/p = number
console.log(valueInNumber5);   // o/p = 1

let scoreNow6 = "saumya"    
console.log(typeof scoreNow6);  // o/p = string
let valueInNumber6 = Number(scoreNow6)  // try to convert string into number
console.log(typeof valueInNumber6);  // o/p = number
console.log(valueInNumber6);    // o/p = NaN (not a number)

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) // try to convert number into boolean value
console.log(booleanIsLoggedIn);  // o/p = true

let isLoggedIn1 = ""     // input as empty string
let booleanIsLoggedIn1 = Boolean(isLoggedIn1) // try to convert into boolean value
console.log(booleanIsLoggedIn1); // o/p = false

let isLoggedIn2 = "saumya"  // input as string
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)  // try to convert into boolean value
console.log(booleanIsLoggedIn2);  // o/p = true

let someNumber = 33  // input as a number
let stringNumber = String(someNumber) // try to convert number into string
console.log(stringNumber);   // o/p = 33
console.log(typeof stringNumber); // o/p = string

let value = true
console.log(typeof value);
let stringValue = String(value)
console.log(typeof stringValue);
console.log(value);