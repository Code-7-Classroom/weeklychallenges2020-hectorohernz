/* HARD: Create two buttons,
 one that when clicked turns the background of the body red.
  The other, when clicked, turns the body's background color white.
  Each of the background colors should be defined as class styles and when the buttons are pushed
   the body's classList is updated to include the correct class for the background. 
  Create a single function that takes an input className and updates the body's classList to 
  ONLY include that className
  Check the Assigned Weekly Challenges Repo under 10-modernjs/challenges/hard for html starter code.
 */
var buttonOne = document.getElementById("btn-1");
var buttonTwo = document.getElementById("btn-2");
var body = document.getElementById("body");
var white  = "white";
var red = "red";

window.updateTheBackground = function(className) {
  if(className === white){
    this.body.classList.toggle(className);
    this.body.classList.remove(this.red);
  } else{
    this.body.classList.toggle(className);
    this.body.classList.remove(this.white);
  }
}
buttonOne.addEventListener("click",() => {
  window.updateTheBackground("red")
})

buttonTwo.addEventListener("click",() => {
  window.updateTheBackground("white")
})
