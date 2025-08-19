/* Primitive detatypes
    7 types:
        1. String
        2. Number
        3. Boolean
        4. null
        5. undefined
        6. symbol
        7. BigInt
*/

const string = "Hello"
const score = 100;const scoreValue = 100.3
const isLoggedIn = true
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 7n

console.log(typeof string);
console.log(typeof score);console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);


/* Non-primitive detatypes/ Referance Datatypes
    3 types:
        1. array
        2. objects
        3. function
*/

const heros = ["THulk", "IronMan", "captainAmerica"]
let myObject = {
                    name : "Saumya kundu",
                    age : 21
               }
const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof heros);
console.log(typeof myObject);
console.log(typeof myFunction);


// JavaScript is dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

