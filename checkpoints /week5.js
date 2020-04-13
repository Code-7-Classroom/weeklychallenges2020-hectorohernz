/*
   Information is stored in object by first creating a an object, then assign it with properties. Those properties can be manipulated by methods, which are functions that are inside of an object. You can then acess that same information by call it by the objects name and propertie name.
 */

 
let me = {
    name : "hector hernandez",
    sayHi : () => {
        console.log(name);
    }
}
console.log(me.name);
me.sayHi();