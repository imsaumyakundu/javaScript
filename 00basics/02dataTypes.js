"use strict"; // treat all JS code as newer version

/*
alert("hello")
alert(3+3) // we are using nodejs, not browser; in browser it will show a popup
*/

console.log(3
    +3); console.log("saumya")  // this is possible because js automatically avoid spaces, but this is not readable and not recommended 

/*
for learning JS from documentation:
1. https://tc39.es/ecma262/     
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/

/*
primitive dataTypes example: 
1. number => The Number type in JavaScript represents both integers and floating-point numbers using double-precision 64-bit format, as defined by the IEEE 754 standard. It can accurately represent integers within the range of -(2^53 - 1) to 2^53 - 1), which is represented by Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER respectively.
2. bigint => It can handle integers larger than Number.MAX_SAFE_INTEGER without losing precision.
3. string => "" or ''    
4. boolean => true/false
5. null => standalone value (eg: let country = null)
6. undefined => value is not assigned yet (eg: let state;)
7. symbol => using for uniqueness
*/

/*
non-primitive dataTypes example:
1. object
*/

let name = "saumya"
let age = 5
console.log(typeof "saumya"); // use of typeof
console.log(typeof age); // use of typeof

// some problem regarding typeof of null:
console.log(typeof null);  // o/p = object
console.log(typeof undefined); // o/p = undefined