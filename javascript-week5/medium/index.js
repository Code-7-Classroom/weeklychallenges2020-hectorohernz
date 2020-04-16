/*  MEDIUM: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
Input: [1 , 4 , 7]  Output: 4
Input: [10, 5]  Output: 7.5
Input: [1.5, 3, 2.5, 1]  Output: 2 */

var avergeArray = (arr) => {
    let total = 0;
    for(num in arr){
        total += arr[num]
    }
    let sum = total / arr.length;
    console.log(sum);
}

const testOne = [1,4,7];
const testTwo = [10,5];
const testThree = [1.5,3,2.5,1];

avergeArray(testOne);
avergeArray(testTwo);
avergeArray(testThree);

