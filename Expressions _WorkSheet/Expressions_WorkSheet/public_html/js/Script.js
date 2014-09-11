/* Jacob Minotti
 * Expressions Worksheet
 * Sept. 11th, 2014
 */

//alert("Lok'Tar Ogar, Friend! Your JavaScript has been successfully added!");


//Setting up Variables
var dogYears = 7;
var humanYears = prompt("How old is Sparky in human years?");
var totalDogYears= dogYears * humanYears;

//Alerting user of Sparky's age in Dog years

alert("Hello Friend! According to my calculations, Sparky is " + humanYears + " which is " + totalDogYears + " in dog years!");

//Now setting up for the pizza problem
var sliceOfPizza = prompt("How many slices of pizza is there to one pie? ");
var partyPeople = prompt("How many people where at the party?");
var pizzaOrdered = prompt("How many pizzas were ordered?");
var slicePerPerson = pizzaOrdered * sliceOfPizza/partyPeople;
//Now solving problem based off of numbers imputed by user

alert("Greetings, Pizzabot. According to my calculations you should get " + slicePerPerson +" pieces of pizza at the party!");

//Shopping List average. Setting up Variables
var shoppingAverage = [32.56, 37.52, 41.03, 34.01, 33.76];
