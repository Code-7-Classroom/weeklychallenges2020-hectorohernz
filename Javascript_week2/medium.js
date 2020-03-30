function monthGenerator(month){
    month = prompt("Please enter a month using only number from 1 to 12, and I'll generate the name :) ");
    month = Number(month);
    switch(month){
      case 1:
      alert("The month is January and your Number was : " + month);
      break;
      case 2:
      alert("The month is February and your number was : " + month);
      break;
      case 3:
      alert("The month is March and your Number was : " + month);
      break;
      case 4:
      alert("The month is April and your number was : " + month);
      break;
      case 5:
      alert("The month is May and your Number was : " + month);
      break;
      case 6:
      alert("The month is June and your number was : " + month);
      break;
      case 7:
      alert("The month is July and your Number was : " + month);
      break;
      case 8:
      alert("The month is August and your number was : " + month);
      break;
      case 9:
      alert("The month is September and your Number was : " + month);
      break;
      case 10:
      alert("The month is October and your number was : " + month);
      case 11:
      alert("The month is November and your Number was : " + month);
      break;
      case 12:
      alert("The month is December and your number was : " + month);
      break;
      default:
      alert("Sorry The Number is invalid or isn't a number from 1 to 12. Try Again.")
      monthGenerator();
      }
    }
    
    monthGenerator();