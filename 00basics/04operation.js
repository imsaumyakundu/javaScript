let value = 3
let negValue = -value
console.log(negValue); // o/p = -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " saumya"
let str3 = str1+str2
console.log(str3); // o/p = hello saumya

console.log("1" + 2)  // o/p = 12
console.log(1 + "2");  // o/p = 12
console.log("1" + 2 +2) // o/p = 122
console.log(1 + 2 +"2") // o/p = 32

console.log(3 + 4 * 5 % 3); // why this much complexity. Readability is down

console.log(true); // o/p = true
console.log(+true); // o/p = 1
console.log(+""); // o/p = 0

let num1, num2, num3
num1 = num2 = num3 = 2+2  // why this much complexity. Readability is down

let gameCounter=100
gameCounter++
console.log(gameCounter); // o/p = 101
++gameCounter
console.log(gameCounter); // o/p = 102

let x = 3;
const y = ++x; 
console.log(x, y); // o/p=> x = 4; y = 4

let x2 = 3n;
const y2 = ++x2;
console.log(x2, y2); // o/p=> x2 = 4n; y2 = 4n

let x1 = 3;
const y1 = x++;
console.log(x1, y1); // o/p=> x1 = 4; y1 = 3

let x21 = 3n;
const y21 = x2++;
console.log(x21, y21); // o/p=> x21 = 4n; y21 = 3n

/*for more reading go to the link below:
 1. https://tc39.es/ecma262/multipage/abstract-operations.html
 2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/

