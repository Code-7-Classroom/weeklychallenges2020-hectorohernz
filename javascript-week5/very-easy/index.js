/*
VERY EASY: What is the difference between the following JavaScript keywords: var, let and const.
   Please provide a written explanation. You are able to include a code reference along with your
   written explanation for each keyword.
*/
 
// Const is a keyword for a value that can't be change throughout the script. It's permanently assigned that value. Const maintain the values, but is also blocked scoped. This means Const cannot be updated or re-declared.
const cannotChangeValue = 3;

// Let is another new keyword from the update of ES6. It has a block scope. Let can be updated, but not re-declared
let blockScope = "Hello World";

// The issue with using var is the scope, which is global scoped, and re-declared and updated. It's hoisting is moved to the top of their scope before code is executed.
var globalScope = "Bye World";