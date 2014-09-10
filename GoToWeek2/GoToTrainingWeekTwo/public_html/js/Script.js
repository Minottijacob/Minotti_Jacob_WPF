/* 
Jacob Minotti
GoToTraining Week 2
Sept. 10, 2014
 */


//alert("Lok'Tar Ogar, Friend! Your JavaScript has been successfully added!");

// Create a calculator for age
// Ask the user their name
var name= prompt("Please enter in your name.");

//test
console.log(name);

//alerting user
alert("Welcome "+ name +"! Let's figure out how old you are!");

//ask user the year that they were born in
var yearBorn = prompt("What year were you born?");
console.log(yearBorn);

var currentYear= 2014;

//Calculating the age
var age = currentYear - yearBorn;
console.log(age);

//alert the user's age
alert(name+" you are "+ age+".");

//How old the user will be in the future
//Ask the user how many years in the future
var yearsMore = prompt("How many years should I look into the future?");
console.log(yearsMore);
console.log(age);

//Calculate the future age
var futureAge = age + Number(yearsMore);
console.log(futureAge);

//Casting` treating one variable type as another
// Number(); put variable inside of ()


alert(name+" you will be "+futureAge +" in "+yearsMore+ " more years!");

