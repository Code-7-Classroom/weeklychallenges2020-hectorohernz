/*
VERY HARD: Write a function that takes in a string and outputs
 the *first* occurrence of a character that does not repeat itself in that string.
  Output the first character in a string that is unique.
Input: “the quick brown fox jumps over the calm kitten quietly”  Output: “b”
Input: “this hat is the greatest!”  Output: “g”
Input: “what a wonderful day it has been!”  Output: “o”
*/

var letterTakeOut = (word) => {
    word = word.split('').filter( x => x != ' ');
  
      for(var i = 0; i < word.length; i++){
  
        var indices = [];
  
        element = word[i];
  
        var idx = word.indexOf(element);
  
        while (idx != -1) {
  
        indices.push(idx);
  
       // console.log(indices, element, word, i);
  
        idx = word.indexOf(element, idx + 1);
  
       }
       var long = indices.length;
        if(long > 1){
        word = word.filter(x => x != element);
        i--;
      }
    }
    return word[0];
  }
  
  console.log(letterTakeOut("this hat is the greatest !"))
  