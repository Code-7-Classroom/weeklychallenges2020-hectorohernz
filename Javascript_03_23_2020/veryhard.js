/*
 Create a simple calculator
 that prompts the user for a number,
 an operator (either +, -, * or /)
 and another number, and then uses the
 functions created in the hard challenge to output
 the value in sentence form. Example output: "3 + 4 = 7"
*/

function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
   return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
   return num1 / num2;
}

function userPrompt(){
   var choiceOp = prompt("Which Operation would you like, Options are add, subtract, multiply, divide .?").toLowerCase();
   var options = {
       add: true,
       subtract: true,
       multiply: true,
       divide: true,
   }
   if (!options[choiceOp]){
       alert('Your Choice was invalid.')
       return userPrompt();
   }
   var num1 = prompt('What is the first number?');
   var num2 = prompt('What is your second number?');
   num1 = Number(num1);
   num2 = Number(num2);

   if (isNaN(num1) || isNaN(num2)){
       alert('Invalid Numbers')
       return userPrompt();
   }
   if(choiceOp === 'add'){
        return alert(' You\'re answer is: ' + num1 + ' + ' +  num2 + ' = ' + add(num1,num2))
   } else if (choiceOp === 'subtract'){
        return alert(' You\'re answer is: ' + num1 + ' - ' +  num2 + ' = ' + subtract(num1,num2))
   }  else if (choiceOp === 'multiply'){
        return alert(' You\'re answer is: ' + num1 + ' * ' +  num2 + ' = ' + multiply(num1,num2))
   }  else if(choiceOp === 'divide'){
       return alert(' You\'re answer is: ' + num1 + ' / ' +  num2 + ' = ' + divide(num1,num2))
   } 
}
console.log(userPrompt());

