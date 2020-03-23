/*
         Write a program to tell if someone 
         is shouting (typing in all caps), whispering 
         (typing in all lowercase), or neither. 
         Use prompt to get user input, and then console 
         log whether the user was shouting, whispering, 
         or talking normally.
*/

function userLetter(userWords){
    var userInput = prompt('Add Any Word and I Will Decided If You Are SHOUTING or whispering.' );
    userWords = userInput;
    var upperCase = userWords.toUpperCase();
    var lowercase = userWords.toLowerCase();
    if (upperCase == userWords){
        console.log('WHY ARE YOU SCREAMING')
    }
    else if (lowercase == userWords){
        console.log('why are you whispering')
    }
    else{
        console.log('WHY are You Mixing LetTers With UpperCase and LOWERCASE')
    }
}
userLetter();