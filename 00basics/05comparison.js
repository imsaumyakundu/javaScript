console.log(2 > 1); // o/p = true
console.log(2 < 1); // o/p = false
console.log(2 == 1); // o/p = false
console.log(2 != 1); // o/p = true
console.log(2 >= 1); // o/p = true
console.log(2 <= 1); // o/p = false

console.log("2" > 1);  // o/p = true // typecript doesnot allow it. Because of two different datatype
console.log("02" > 1);  // o/p = true // typecript doesnot allow it. Because of two different datatype

console.log(null > 0); // o/p = false
console.log(null >= 0); // o/p = true
console.log(null == 0); // o/p = false
console.log(null != 0); // o/p = true
console.log(null < 0);  // o/p = false
console.log(null <= 0); // o/p = true

console.log(undefined > 0); // o/p = false
console.log(undefined >= 0); // o/p = false
console.log(undefined == 0); // o/p = false
console.log(undefined != 0); // o/p = true
console.log(undefined < 0); // o/p = false
console.log(undefined <= 0); // o/p = false

console.log("2" === 2);  // o/p = false // This is called "strict check"


