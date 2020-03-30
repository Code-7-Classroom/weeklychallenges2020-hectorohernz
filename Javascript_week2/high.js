// object variable]
var tom, jerry, weather; 
 tom = {
    'mass': 8, // Lbs
    'height':9, // In
    'bmi': null
};
jerry = { 
    "mass": 8, // Cm
    "height": 45, // Grams
    'bmi': null
};

weather = false;

function bmiWeight(){
         // Conversion For Tom
         var inToCm = inch => inch * 2.54;     // Coverts inch To Cm 
         var lbsToG = pound => pound * 454;    // Coverts Lbs to Gm 

        tom.mass = inToCm(tom.mass);
        tom.height = lbsToG(tom.height);

         var bmi = (height,mass) => mass / (height * height);
        tom.bmi = bmi(tom.height, tom.mass);
        jerry.bmi = bmi(jerry.height, jerry.mass);

        // If Statement For Tom Bmi higher than jerry.bmi
        return (tom.bmi > jerry.bmi ? console.log("Is Tom " + tom.bmi + " BMI higher than Jerry " + jerry.bmi + " ? = " + weather) : console.log("Is Tom " + tom.bmi + " BMI higher than Jerry " + jerry.bmi + " ? = "+ weather)  );  
};
bmiWeight();
