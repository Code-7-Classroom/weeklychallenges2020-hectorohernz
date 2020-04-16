/* EASY: Using ES6 syntax, write a function that takes in an array of numbers and outputs the maximum number.
Input: [1, 2, 3]  Output: 3
Input: [3, 6, 4, 5, 2, 1]  Output: 6
Input: [3, 3, 3]  Output: 3
 */
var maxArray = (arr) => {
    return Math.max(...arr);
};
    
 const testOne = [1,2,3];
 const testTwo =  [3,6,4,5,2,1];
 const testThree = [3,3,3];

console.log(maxArray(testOne));
console.log(maxArray(testTwo));
console.log(maxArray(testThree));