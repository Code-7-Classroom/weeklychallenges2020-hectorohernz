// Given coins different denominations and a total amount of money amount.

// Write a function to compute the fewest number of coins that you need to make up that amount

// If that amount of money cannot be made up by any combination of coins return -1

// You may assume that you have an infinite number of each kind of coin.

/*Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1
*/
function coinSort(coin, amount){
    var finalResult = FindMinCount(coin, 0, 0, amount, 0, amount + 1);
    function FindMinCount(coin, i, currentSum, amount, count, result){
      if(amount == 0){
        return 0;
      } 
      if(currentSum > amount){
        return result;
      }
      if(currentSum == amount){
        result = Math.min(count, result);
        return result;
      }
      if(i <= coin.length - 1){
        count++;
        result = FindMinCount(coin, i, currentSum + coin[i], amount, count, result);
  
        count--;
        result = FindMinCount(coin, i + 1, currentSum, amount, count, result);
      }
    return result;
    }
    if(finalResult == coin){
      return -1; 
    } else{
      return finalResult; 
    }
  }
console.log(coinSort([1,2,5],11));
console.log(coinSort([2],3));