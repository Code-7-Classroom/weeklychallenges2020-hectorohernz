/*
HARD: Data security exercise. Inside of a closure, 
create an object called pii (Personally Identifiable Information)that cannot be accessed directly.
 The object should have at least two properties: name and ssn.
  Only the name property should be accessible,
  and it should be called through a public function. The ssn property should not be accessible at all.
Creating private objects and private properties helps you control who has access to what data and helps
 you prevent people who shouldn't see important info like social security numbers from getting access to the data.
You can use 'getName' or other get methods to access data that people might need. For example, people addressing a
 package or email may need a customer's name, but they definitely shouldn't have access to their ssn.
*/
 function userInfoTwo() { // Using Methods
    var Pii = {
        name: "Hector Hernandez",
        snn: 4562512863
    }
    this.getname = function(){
        return Pii.name;
    };
    this.setName = function(newName){
        Pii.name = newName;
    };
};

function userInfo(name,snn){ // Using Closures  and Parameters
    return () => {
        var Pii = {
            name: name,
            snn: snn
        }
    return Pii.name;
    }
}
var hector = userInfo("Hector", 12899212); 
console.log(hector())

//var me = new userInfoTwo(); // Assigning the function to me variable 

//console.log(me.getname()); // Calling my name from the function scope

//me.setName("Kevin"); // Reassiging the Pii.name object with a new name from the outer scope.

//console.log(me.getname()); 


