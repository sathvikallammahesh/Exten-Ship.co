// camel case.
// string concactenation.

var name = prompt("What's your name?");
var first_Slice = name.slice(0,1);
var uppercase_Firstchar = first_Slice.toUpperCase();
var restOfname = name.slice(1,name.length);
restOfname = restOfname.toLowerCase();
var capitalName = uppercase_Firstchar + restOfname;
alert("Hello " + capitalName);

var dog_Age = prompt("How old is your dog?");
var human_Age = (dog_Age-2)*4 + 21;
alert("Your dog is " + human_Age + "years old in human years.");

// Let's write some code to learn more java script.

var num_Mul1 = prompt("Type a first number to multiply with:");
var num_Mul2 = prompt("Type in the second number to multiply with:");
alert("You get " + num_Mul1*num_Mul2 + " when you multiply " + num_Mul1 + " and " + num_Mul2);

// // BMI CALCULATOR!

function bmiCalculator(weight, height) {
    var bmi = weight/ Math.pow(height, 2);
    return math.pow(bmi);
}

var bmi = bmiCalculator(40, 1.50);
alert("Hello there! This is your " + bmi + " BMI in total.")
//BMI CALCULATOR 2

var weight_One = prompt("Type your weight in Kgs.");
var height_One = prompt("Type in your height in metres.");
var bmi_Two = weight_One/ Math.pow(height_One, 2);
alert("Hello there! BMI of your body is " + bmi_Two + " kg/m2");