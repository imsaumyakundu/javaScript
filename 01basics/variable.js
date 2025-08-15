const accountId = 144553      //only one method to declear constant in javaScript
let accountEmail = "saumya@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState      //value undefined ; if you dont assign value and leave it, it will show undefined


//accountId = 2 //not allowed to change constant value; throwing error
accountEmail = "s@gmail.com" //o/p changed
accountPassword = "54321" //o/p changed
accountCity = "bangaluru" //o/p changed


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
  prefer not to use var.
  because of issue in block scope and funcational scope
*/

//its possible to declear variavle without mention it's type. but dont do this; unfare usage